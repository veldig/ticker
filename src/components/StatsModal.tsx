import { Modal } from './Modal'
import { loadStats } from '../lib/storage'

interface StatsModalProps {
  open: boolean
  onClose: () => void
}

export function StatsModal({ open, onClose }: StatsModalProps) {
  // Read fresh from storage every time modal opens
  const s = open ? loadStats() : {
    played: 0, wins: 0, currentStreak: 0, maxStreak: 0,
    guessDistribution: [0, 0, 0, 0, 0, 0],
  }

  const winRate = s.played > 0 ? Math.round((s.wins / s.played) * 100) : 0
  const maxDist = Math.max(...s.guessDistribution, 1)

  return (
    <Modal open={open} onClose={onClose} title="Statistics">
      <div className="space-y-6">

        {/* Summary row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { value: s.played,        label: 'Played' },
            { value: `${winRate}%`,   label: 'Win Rate' },
            { value: s.currentStreak, label: 'Streak' },
            { value: s.maxStreak,     label: 'Best' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white tabular-nums">{value}</span>
              <span className="text-xs text-zinc-500 text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>

        {/* Guess distribution */}
        <div>
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            Guess Distribution
          </h3>
          <div className="space-y-1.5">
            {s.guessDistribution.map((count, i) => {
              const pct = count > 0 ? Math.max((count / maxDist) * 100, 8) : 0
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 w-3 text-right">{i + 1}</span>
                  <div className="flex-1 h-6 bg-white/4 rounded-md overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-md flex items-center justify-end pr-2 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    >
                      {count > 0 && (
                        <span className="text-xs text-white font-semibold">{count}</span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {s.played === 0 && (
          <p className="text-xs text-zinc-600 text-center">Play your first puzzle to see stats.</p>
        )}
      </div>
    </Modal>
  )
}
