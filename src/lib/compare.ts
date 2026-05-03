import type { Stock, MetricFeedback, FeedbackValue } from '../types/stock'

function compareNumeric(guess: number, target: number): FeedbackValue {
  if (guess === target) return 'exact'
  const pctDiff = Math.abs(guess - target) / Math.abs(target)
  if (pctDiff <= 0.10) return 'close'
  return guess > target ? 'high' : 'low'
}

function comparePE(guess: number, target: number): FeedbackValue {
  const targetNA = target < 0
  const guessNA = guess < 0
  if (targetNA && guessNA) return 'exact'
  // Target is unprofitable (N/A), guess has positive earnings → guess P/E is too high
  if (targetNA) return 'high'
  // Target is profitable, guess has no earnings → guess P/E is too low (no earnings < any P/E)
  if (guessNA) return 'low'
  return compareNumeric(guess, target)
}

export function compareStocks(guess: Stock, target: Stock): MetricFeedback {
  return {
    sector:    guess.sector === target.sector ? 'exact' : 'miss',
    marketCap: compareNumeric(guess.marketCap, target.marketCap),
    pe:        comparePE(guess.pe, target.pe),
    return5y:  compareNumeric(guess.return5y, target.return5y),
  }
}

export function isWin(feedback: MetricFeedback): boolean {
  return (
    feedback.sector    === 'exact' &&
    feedback.marketCap === 'exact' &&
    feedback.pe        === 'exact' &&
    feedback.return5y  === 'exact'
  )
}
