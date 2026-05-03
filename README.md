# Ticker

A daily stock market deduction game — think Wordle, but for equities.

**[Play it live →](https://ticker-game.vercel.app)**

## How it works

Each day a new S&P 500 / NASDAQ stock is chosen. You have 6 guesses to identify it using feedback on four financial metrics:

| Metric | Feedback |
|---|---|
| Sector | ✅ exact match / ❌ miss |
| Market Cap | 🟩 exact · 🟧 within 10% · 🟥 too high/low |
| P/E Ratio | 🟩 exact · 🟧 within 10% · 🟥 too high/low |
| 5-Year Return | 🟩 exact · 🟧 within 10% · 🟥 too high/low |

A new puzzle drops at midnight UTC every day. Your streak and guess history are saved locally.

## Features

- Daily puzzle seeded by date — same stock for every player worldwide
- Autocomplete search across 110 stocks by ticker or company name
- Color-coded metric feedback with animated reveal
- Shareable emoji result grid
- Streak tracking and guess distribution stats
- Fully accessible (ARIA combobox, live regions, keyboard navigation)
- Mobile-optimized with safe-area insets and iOS scroll locking

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4**
- **React Router v7**
- Deployed on **Vercel**

## Local development

```bash
npm install
npm run dev
```
