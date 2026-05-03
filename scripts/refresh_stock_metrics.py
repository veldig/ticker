#!/usr/bin/env python3
from __future__ import annotations

import concurrent.futures
import math
import re
import sys
import time
from dataclasses import dataclass
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Iterable
from urllib.parse import quote

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
STOCKS_FILE = ROOT / "src/data/stocks.ts"
TARGET_START = date(2021, 5, 3)
TARGET_END = date(2026, 5, 3)
HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept-Language": "en-US,en;q=0.9",
}
QUOTE_OVERRIDES = {
    # Yahoo search snippets expose these values, but the direct quote HTML returns 404.
    "PSKY": (15, 444.7),
    "SPG": (61, 13.3),
}
LINE_RE = re.compile(
    r"^(?P<prefix>\s*\{\s*ticker:\s*'(?P<ticker>[^']+)'.*?marketCap:\s*)"
    r"(?P<marketCap>-?\d+)"
    r"(?P<mid1>,\s*pe:\s*)(?P<pe>-?\d+(?:\.\d+)?)"
    r"(?P<mid2>,\s*return5y:\s*)(?P<return5y>-?\d+)"
    r"(?P<suffix>.*)$"
)


@dataclass(frozen=True)
class Metrics:
    market_cap: int
    pe: float
    return_5y: int
    baseline_date: date
    latest_date: date


def extract_tickers(source: str) -> list[str]:
    tickers = re.findall(r"ticker: '([^']+)'", source)
    return list(dict.fromkeys(tickers))


def get(url: str) -> requests.Response:
    last_error: Exception | None = None
    for attempt in range(4):
        try:
            response = requests.get(url, headers=HEADERS, timeout=30)
            if response.status_code == 200:
                return response
            last_error = RuntimeError(f"{response.status_code} for {url}")
        except Exception as exc:  # pragma: no cover - network failure path
            last_error = exc
        time.sleep(1.5 * (attempt + 1))
    assert last_error is not None
    raise last_error


def parse_billions(raw: str) -> int:
    raw = raw.strip().replace(",", "")
    match = re.fullmatch(r"([0-9]*\.?[0-9]+)([TMBK])", raw)
    if not match:
        raise ValueError(f"Unsupported market cap value: {raw}")
    value = float(match.group(1))
    suffix = match.group(2)
    multiplier = {
        "T": 1_000.0,
        "B": 1.0,
        "M": 0.001,
        "K": 0.000001,
    }[suffix]
    return math.floor((value * multiplier) + 0.5)


def parse_quote_metrics(source_ticker: str) -> tuple[int, float]:
    url = f"https://finance.yahoo.com/quote/{quote(source_ticker)}/"
    html = get(url).text
    soup = BeautifulSoup(html, "html.parser")

    market_cap_raw = None
    pe_raw = None
    for item in soup.find_all("li"):
        label_el = item.find("span", class_=re.compile(r"\blabel\b"))
        value_el = item.find("span", class_=re.compile(r"\bvalue\b"))
        if not label_el or not value_el:
            continue
        label = " ".join(label_el.get_text(" ", strip=True).split())
        value = " ".join(value_el.get_text(" ", strip=True).split())
        if label.startswith("Market Cap"):
            market_cap_raw = value
        elif label == "PE Ratio (TTM)":
            pe_raw = value

    if not market_cap_raw:
        raise ValueError(f"Could not parse market cap for {source_ticker}")

    market_cap = parse_billions(market_cap_raw)
    pe = -1.0 if pe_raw in (None, "--", "N/A") else round(float(pe_raw.replace(",", "")), 1)
    return market_cap, pe


def parse_return_metrics(source_ticker: str) -> tuple[int, date, date]:
    start = int(datetime(2021, 4, 26, tzinfo=timezone.utc).timestamp())
    end = int(datetime(2026, 5, 4, tzinfo=timezone.utc).timestamp())
    url = (
        f"https://query1.finance.yahoo.com/v8/finance/chart/{quote(source_ticker)}"
        f"?period1={start}&period2={end}&interval=1d&events=div%2Csplits&includeAdjustedClose=true"
    )
    payload = get(url).json()
    result = payload["chart"]["result"][0]
    timestamps = result["timestamp"]
    adjclose = result["indicators"]["adjclose"][0]["adjclose"]

    series: list[tuple[date, float]] = []
    for ts, close in zip(timestamps, adjclose):
        if close is None:
            continue
        day = datetime.fromtimestamp(ts, tz=timezone.utc).date()
        series.append((day, float(close)))

    if not series:
        raise ValueError(f"No chart history for {source_ticker}")

    latest_day, latest_close = series[-1]
    baseline_day, baseline_close = next(
        ((day, close) for day, close in series if day >= TARGET_START),
        series[0],
    )
    return_5y = round(((latest_close / baseline_close) - 1.0) * 100)
    return return_5y, baseline_day, latest_day


def fetch_metrics(ticker: str) -> tuple[str, Metrics]:
    try:
        market_cap, pe = parse_quote_metrics(ticker)
    except Exception:
        if ticker not in QUOTE_OVERRIDES:
            raise
        market_cap, pe = QUOTE_OVERRIDES[ticker]
    return_5y, baseline_date, latest_date = parse_return_metrics(ticker)
    return ticker, Metrics(
        market_cap=market_cap,
        pe=pe,
        return_5y=return_5y,
        baseline_date=baseline_date,
        latest_date=latest_date,
    )


def format_pe(value: float) -> str:
    return "-1" if value < 0 else f"{value:.1f}"


def update_source(source: str, metrics_by_ticker: dict[str, Metrics]) -> str:
    updated_lines: list[str] = []
    for line in source.splitlines():
        match = LINE_RE.match(line)
        if not match:
            updated_lines.append(line)
            continue
        ticker = match.group("ticker")
        metrics = metrics_by_ticker.get(ticker)
        if not metrics:
            updated_lines.append(line)
            continue
        updated_lines.append(
            f"{match.group('prefix')}{metrics.market_cap}"
            f"{match.group('mid1')}{format_pe(metrics.pe)}"
            f"{match.group('mid2')}{metrics.return_5y}"
            f"{match.group('suffix')}"
        )
    return "\n".join(updated_lines) + "\n"


def main() -> int:
    source = STOCKS_FILE.read_text()
    tickers = extract_tickers(source)

    metrics_by_ticker: dict[str, Metrics] = {}
    failures: list[tuple[str, str]] = []

    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
        future_to_ticker = {executor.submit(fetch_metrics, ticker): ticker for ticker in tickers}
        for future in concurrent.futures.as_completed(future_to_ticker):
            ticker = future_to_ticker[future]
            try:
                key, metrics = future.result()
                metrics_by_ticker[key] = metrics
                print(
                    f"{key}: marketCap={metrics.market_cap}B pe={format_pe(metrics.pe)} "
                    f"return5y={metrics.return_5y}% baseline={metrics.baseline_date} latest={metrics.latest_date}",
                    flush=True,
                )
            except Exception as exc:
                failures.append((ticker, str(exc)))
                print(f"{ticker}: ERROR {exc}", file=sys.stderr, flush=True)

    if failures:
        print("\nFailures:", file=sys.stderr)
        for ticker, error in failures:
            print(f"- {ticker}: {error}", file=sys.stderr)
        return 1

    updated_source = update_source(source, metrics_by_ticker)
    STOCKS_FILE.write_text(updated_source)

    short_history = [
        (ticker, metrics.baseline_date)
        for ticker, metrics in sorted(metrics_by_ticker.items())
        if metrics.baseline_date > TARGET_START
    ]

    print(f"\nUpdated {len(metrics_by_ticker)} tickers in {STOCKS_FILE}.")
    if short_history:
        print("Used first available trading date instead of 2021-05-03 for:")
        for ticker, baseline in short_history:
            print(f"- {ticker}: {baseline}")

    latest_dates = sorted({metrics.latest_date for metrics in metrics_by_ticker.values()})
    print(f"Latest chart dates observed: {', '.join(str(day) for day in latest_dates)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
