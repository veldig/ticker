import { useLocation, Navigate, Link } from 'react-router-dom'
import { useState } from 'react'
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

const EMOJI: Record<string, string> = {
  exact: '🟩',
  close: '🟧',
  high:  '🟥',
  low:   '🟥',
  miss:  '⬛',
}

export function WinScreen() {
  const location = useLocation()
  const state    = location.state as LocationState | null
  const [copied, setCopied] = useState(false)

  if (!state?.target) return <Navigate to="/" replace />

  const { target, guesses, puzzleNumber } = state

  const grid = guesses.map(g => [
    g.feedback.sector,
    g.feedback.marketCap,
    g.feedback.pe,
    g.feedback.return5y,
  ])

  const shareText = [
    `Ticker #${puzzleNumber} — ${guesses.length}/6`,
    ...grid.map(row => row.map(f => EMOJI[f] ?? '⬜').join('')),
    'ticker.game',
  ].join('\n')

  function handleShare() {
    navigator.clipboard.writeText(shareText)
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000) })
      .catch(() => {})
  }

  return (
    <main className="flex flex-col min-h-[calc(100dvh-56px)] items-center justify-center px-4 py-4 sm:py-8 overflow-y-auto">
      <div className="max-w-sm w-full space-y-3 sm:space-y-4">

        {/* Victory header */}
        <div
          className="text-center space-y-1"
          style={{ animation: 'fadeSlideUp 0.3s ease both' }}
        >
          <p className="text-5xl" aria-hidden="true">🎉</p>
          <h1 className="text-2xl font-bold text-white">You got it!</h1>
          <p className="text-zinc-400 text-sm">
            Solved in{' '}
            <strong className="text-white">{guesses.length}</strong>{' '}
            guess{guesses.length > 1 ? 'es' : ''}
          </p>
        </div>

        {/* Revealed stock */}
        <div
          className="bg-[#161a20] border border-white/10 rounded-2xl p-5 space-y-3"
          style={{ animation: 'fadeSlideUp 0.3s ease 0.1s both' }}
        >
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
        </div>

        {/* Share card */}
        <div
          className="bg-[#161a20] border border-white/8 rounded-2xl p-5 space-y-3"
          style={{ animation: 'fadeSlideUp 0.3s ease 0.2s both' }}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Share your result
            </p>
            <span className="text-xs text-zinc-600 font-mono">#{puzzleNumber}</span>
          </div>

          {/* Emoji grid preview */}
          <div
            className="font-mono text-xl leading-relaxed space-y-0.5"
            aria-label={`Result grid: ${guesses.length} guesses`}
            role="img"
          >
            {grid.map((row, i) => (
              <div key={i} className="flex gap-0.5">
                {row.map((f, j) => (
                  <span key={j} aria-hidden="true">{EMOJI[f] ?? '⬜'}</span>
                ))}
              </div>
            ))}
          </div>

          {/* Share text preview */}
          <div className="bg-white/4 rounded-xl p-3 font-mono text-xs text-zinc-400 whitespace-pre leading-relaxed">
            {shareText}
          </div>

          <Button
            className="w-full"
            onClick={handleShare}
            aria-label={copied ? 'Copied to clipboard' : 'Copy result to clipboard'}
          >
            {copied ? '✓ Copied to clipboard!' : 'Copy Result'}
          </Button>
        </div>

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
            <Button variant="ghost" size="sm">Play Again</Button>
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
