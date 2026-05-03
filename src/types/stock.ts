export interface Stock {
  ticker: string
  name: string
  sector: Sector
  marketCap: number  // in billions USD
  pe: number
  return5y: number   // percentage, e.g. 210 = +210%
  exchange: Exchange
}

export type Sector =
  | 'Technology'
  | 'Healthcare'
  | 'Financial'
  | 'Consumer'
  | 'Energy'
  | 'Industrials'
  | 'Real Estate'
  | 'Utilities'
  | 'Materials'
  | 'Communications'

export type Exchange = 'NASDAQ' | 'NYSE'

export type GuessResult = {
  stock: Stock
  feedback: MetricFeedback
}

export type FeedbackValue = 'exact' | 'close' | 'high' | 'low'

export interface MetricFeedback {
  sector: 'exact' | 'miss'
  marketCap: FeedbackValue
  pe: FeedbackValue
  return5y: FeedbackValue
}

export type GameState = 'idle' | 'typing' | 'submitting' | 'in_progress' | 'won' | 'lost' | 'locked_until_reset'
