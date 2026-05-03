import type { Stock } from '../types/stock'
import { stocksData } from '../data/stocks'

const LAUNCH_DATE = new Date('2026-01-01T00:00:00Z')

export function getPuzzleDate(): string {
  return new Date().toISOString().slice(0, 10)
}

export function getPuzzleNumber(): number {
  const today = new Date()
  today.setUTCHours(0, 0, 0, 0)
  const diff = today.getTime() - LAUNCH_DATE.getTime()
  return Math.max(1, Math.floor(diff / 86_400_000) + 1)
}

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = Math.imul(31, hash) + str.charCodeAt(i) | 0
  }
  return hash >>> 0
}

export function getDailyStock(): Stock {
  const seed = hashString(getPuzzleDate())
  return stocksData[seed % stocksData.length]
}
