import { stocksData } from '../data/stocks'
import { compareStocks } from './compare'
import type { GuessResult, Stock } from '../types/stock'

const LEGACY_TICKER_ALIASES: Record<string, string> = {
  PARA: 'PSKY',
  SQ: 'XYZ',
}

const STOCK_ALIASES: Record<string, string[]> = {
  PSKY: ['PARA', 'Paramount Global'],
  XYZ: ['SQ', 'Square', 'Square Inc', 'Square, Inc.'],
}

function normalizeQuery(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLowerCase()
}

function getAliases(stock: Stock): string[] {
  return STOCK_ALIASES[stock.ticker] ?? []
}

export function canonicalizeTicker(ticker: string): string {
  const normalized = ticker.trim().toUpperCase()
  return LEGACY_TICKER_ALIASES[normalized] ?? normalized
}

function findStockByTicker(ticker: string): Stock | undefined {
  const canonicalTicker = canonicalizeTicker(ticker)
  return stocksData.find(stock => stock.ticker === canonicalTicker)
}

export function findStockByQuery(query: string): Stock | undefined {
  const normalized = normalizeQuery(query)
  if (!normalized) return undefined

  const tickerMatch = findStockByTicker(query)
  if (tickerMatch) return tickerMatch

  return stocksData.find(stock => {
    if (stock.name.toLowerCase() === normalized) return true
    return getAliases(stock).some(alias => alias.toLowerCase() === normalized)
  })
}

export function getStockMatchRank(stock: Stock, query: string): number {
  const normalized = normalizeQuery(query)
  if (!normalized) return Number.POSITIVE_INFINITY

  const ticker = stock.ticker.toLowerCase()
  const name = stock.name.toLowerCase()
  const aliases = getAliases(stock).map(alias => alias.toLowerCase())

  if (ticker.startsWith(normalized)) return 0
  if (aliases.some(alias => alias.startsWith(normalized))) return 1
  if (name.startsWith(normalized)) return 2
  if (name.includes(normalized)) return 3
  if (aliases.some(alias => alias.includes(normalized))) return 4
  return Number.POSITIVE_INFINITY
}

export function normalizeSavedGuesses(guesses: GuessResult[], target: Stock): GuessResult[] {
  return guesses.map(guess => {
    const stock = findStockByTicker(guess.stock.ticker) ?? guess.stock
    return {
      stock,
      feedback: compareStocks(stock, target),
    }
  })
}
