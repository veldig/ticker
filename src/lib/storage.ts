import type { GuessResult } from '../types/stock'

const GAME_KEY  = 'ticker_game'
const STATS_KEY = 'ticker_stats'

// ── Saved game (today's session) ────────────────────────────────────────────

export interface SavedGame {
  puzzleDate:   string
  puzzleNumber: number
  guesses:      GuessResult[]
  result:       'in_progress' | 'won' | 'lost'
}

export function loadGame(): SavedGame | null {
  try {
    const raw = localStorage.getItem(GAME_KEY)
    return raw ? (JSON.parse(raw) as SavedGame) : null
  } catch {
    return null
  }
}

export function saveGame(game: SavedGame): void {
  try {
    localStorage.setItem(GAME_KEY, JSON.stringify(game))
  } catch {}
}

// ── All-time stats ───────────────────────────────────────────────────────────

export interface Stats {
  played:             number
  wins:               number
  currentStreak:      number
  maxStreak:          number
  lastWonDate:        string | null
  lastCompletedDate:  string | null
  guessDistribution:  number[]        // index = guesses used - 1
}

const DEFAULT_STATS: Stats = {
  played:            0,
  wins:              0,
  currentStreak:     0,
  maxStreak:         0,
  lastWonDate:       null,
  lastCompletedDate: null,
  guessDistribution: [0, 0, 0, 0, 0, 0],
}

export function loadStats(): Stats {
  try {
    const raw = localStorage.getItem(STATS_KEY)
    if (raw) return { ...DEFAULT_STATS, ...JSON.parse(raw) }
  } catch {}
  return { ...DEFAULT_STATS }
}

export function recordResult(won: boolean, guessCount: number, puzzleDate: string): Stats {
  const stats = loadStats()

  // Idempotent — never double-count the same puzzle
  if (stats.lastCompletedDate === puzzleDate) return stats

  stats.played++
  stats.lastCompletedDate = puzzleDate

  if (won) {
    stats.wins++
    stats.guessDistribution[Math.min(guessCount - 1, 5)]++

    const yesterday = utcDateString(-1)
    stats.currentStreak = stats.lastWonDate === yesterday ? stats.currentStreak + 1 : 1
    stats.maxStreak      = Math.max(stats.maxStreak, stats.currentStreak)
    stats.lastWonDate    = puzzleDate
  } else {
    stats.currentStreak = 0
  }

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats))
  } catch {}

  return stats
}

export function clearAllData(): void {
  try {
    localStorage.removeItem(GAME_KEY)
    localStorage.removeItem(STATS_KEY)
  } catch {}
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function utcDateString(offsetDays = 0): string {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() + offsetDays)
  return d.toISOString().slice(0, 10)
}
