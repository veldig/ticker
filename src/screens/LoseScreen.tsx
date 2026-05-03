import { useLocation, Navigate, Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { CountdownTimer } from '../components/CountdownTimer'
import { SectorBadge } from '../components/SectorBadge'
import { formatMarketCap, formatPE, formatReturn } from '../lib/design'
import type { Stock, GuessResult } from '../types/stock'

interface LocationState {
  target:       Stock
  guesses:      GuessResult[]
  puzzleNumber: number
}

export function LoseScreen() {
  const location = useLocation()
  const state    = location.state as LocationState | null

  if (!state?.target) return <Navigate to="/" replace />

  const { target, guesses, puzzleNumber } = state

  return (
    <main className="flex flex-col min-h-[calc(100dvh-56px)] items-center justify-center px-4 py-4 sm:py-8 overflow-y-auto">
      <div className="max-w-sm w-full space-y-3 sm:space-y-4">

        {/* Loss header */}
        <div
          className="text-center space-y-1"
          style={{ animation: 'fadeSlideUp 0.3s ease both' }}
        >
          <p className="text-5xl" aria-hidden="true">📉</p>
          <h1 className="text-2xl font-bold text-white">Not quite</h1>
          <p className="text-zinc-400 text-sm">Better luck tomorrow</p>
        </div>

        {/* Revealed stock */}
        <div
          className="bg-[#161a20] border border-white/10 rounded-2xl p-5 space-y-3"
          style={{ animation: 'fadeSlideUp 0.3s ease 0.1s both' }}
        >
          <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
            The answer was
          </p>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">{target.ticker}</p>
              <p className="text-zinc-400 text-sm">{target.name}</p>
            </div>
            <SectorBadge sector={target.sector} />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <Stat label="Market Cap" value={formatMarketCap(target.marketCap)} />
            <Stat label="P/E Ratio"  value={formatPE(target.pe)} />
            <Stat label="5Y Return"  value={formatReturn(target.return5y)} />
          </div>
          <p className="text-xs text-zinc-400 pt-2 border-t border-white/6 leading-relaxed">
            {target.name} is a{' '}
            <strong className="text-zinc-200">{target.sector}</strong> company on{' '}
            <strong className="text-zinc-200">{target.exchange}</strong> with a market cap of{' '}
            <strong className="text-zinc-200">{formatMarketCap(target.marketCap)}</strong> and{' '}
            a <strong className="text-zinc-200">{formatReturn(target.return5y)}</strong> 5-year return.
          </p>
        </div>

        {/* Attempts summary */}
        <p
          className="text-center text-xs text-zinc-600"
          style={{ animation: 'fadeSlideUp 0.3s ease 0.2s both' }}
          aria-label={`You used all ${guesses.length} of ${guesses.length} guesses. Puzzle number ${puzzleNumber}`}
        >
          Ticker #{puzzleNumber} — {guesses.length}/6 guesses used
        </p>

        {/* Next puzzle */}
        <div
          className="bg-[#161a20] border border-white/8 rounded-2xl p-4 flex items-center justify-between"
          style={{ animation: 'fadeSlideUp 0.3s ease 0.3s both' }}
        >
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Next Puzzle</p>
            <CountdownTimer />
          </div>
          <Link to="/">
            <Button variant="ghost" size="sm">Go Back</Button>
          </Link>
        </div>

      </div>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center bg-white/4 rounded-xl p-2.5 gap-0.5">
      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-bold text-white tabular-nums">{value}</span>
    </div>
  )
}
