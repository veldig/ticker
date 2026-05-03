import type { Stock } from '../types/stock'
import { stocksData } from '../data/stocks'

const LAUNCH_DATE = new Date('2026-01-01T00:00:00Z')
const TEST_OFFSET_KEY = 'ticker_test_offset'

function getStoredTestOffset(): number {
  if (typeof window === 'undefined') return 0

  try {
    const raw = localStorage.getItem(TEST_OFFSET_KEY)
    if (!raw) return 0
    const parsed = Number.parseInt(raw, 10)
    return Number.isFinite(parsed) ? parsed : 0
  } catch {
    return 0
  }
}

function getPuzzleStartDate(offsetDays = getStoredTestOffset()): Date {
  const day = new Date()
  day.setUTCHours(0, 0, 0, 0)
  day.setUTCDate(day.getUTCDate() + offsetDays)
  return day
}

export function getPuzzleDate(): string {
  return getPuzzleStartDate().toISOString().slice(0, 10)
}

export function getPuzzleNumber(): number {
  const diff = getPuzzleStartDate().getTime() - LAUNCH_DATE.getTime()
  return Math.max(1, Math.floor(diff / 86_400_000) + 1)
}

export function getTestPuzzleOffset(): number {
  return getStoredTestOffset()
}

export function advanceTestPuzzle(days = 1): number {
  const nextOffset = getStoredTestOffset() + days
  try {
    localStorage.setItem(TEST_OFFSET_KEY, String(nextOffset))
  } catch {}
  return nextOffset
}

export function resetTestPuzzle(): void {
  try {
    localStorage.removeItem(TEST_OFFSET_KEY)
  } catch {}
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
