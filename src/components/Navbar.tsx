import { useState, useEffect } from 'react'
import { StatsModal } from './StatsModal'
import { SettingsModal } from './SettingsModal'
import { HelpModal } from './HelpModal'
import { loadStats } from '../lib/storage'

const HELP_SEEN_KEY = 'ticker_seen_help'

export function Navbar() {
  const [statsOpen, setStatsOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  const streak = loadStats().currentStreak

  // Auto-open help for first-time visitors
  useEffect(() => {
    if (!localStorage.getItem(HELP_SEEN_KEY)) {
      setHelpOpen(true)
    }
  }, [])

  function handleHelpClose() {
    localStorage.setItem(HELP_SEEN_KEY, '1')
    setHelpOpen(false)
  }

  return (
    <>
      <header className="w-full border-b border-white/8 bg-[#0d0f12]/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">

          {/* Left — Help */}
          <button
            onClick={() => { localStorage.setItem(HELP_SEEN_KEY, '1'); setHelpOpen(true) }}
            className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer text-lg font-medium"
            aria-label="How to play"
          >
            ?
          </button>

          {/* Center — Logo + streak */}
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-white font-bold text-xl tracking-tight">TICKER</span>
            {streak > 0 ? (
              <span className="text-[10px] text-orange-400 font-semibold tracking-widest uppercase">
                🔥 {streak} day streak
              </span>
            ) : (
              <span className="text-zinc-600 text-[10px] tracking-widest uppercase">Daily Stock Game</span>
            )}
          </div>

          {/* Right — Stats + Settings */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setStatsOpen(true)}
              className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Statistics"
            >
              <BarChartIcon />
            </button>
            <button
              onClick={() => setSettingsOpen(true)}
              className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Settings"
            >
              <GearIcon />
            </button>
          </div>

        </div>
      </header>

      <StatsModal    open={statsOpen}    onClose={() => setStatsOpen(false)} />
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <HelpModal     open={helpOpen}     onClose={handleHelpClose} />
    </>
  )
}

function BarChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6"  y1="20" x2="6"  y2="14" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}
