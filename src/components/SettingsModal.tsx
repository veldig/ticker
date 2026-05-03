import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from './Button'
import { clearAllData, clearSavedGame } from '../lib/storage'
import { advanceTestPuzzle, getTestPuzzleOffset, resetTestPuzzle } from '../lib/puzzle'

interface SettingsModalProps {
  open: boolean
  onClose: () => void
}

export function SettingsModal({ open, onClose }: SettingsModalProps) {
  const [testCode, setTestCode] = useState('')
  const [testMessage, setTestMessage] = useState<string | null>(null)

  const testOffset = getTestPuzzleOffset()
  const testStatus = testOffset === 0
    ? 'Live daily puzzle'
    : `Testing ahead by ${testOffset} puzzle${testOffset === 1 ? '' : 's'}`

  function runTestCode() {
    const normalized = testCode.trim().toUpperCase()

    if (normalized === 'PLAY-AGAIN') {
      const nextOffset = advanceTestPuzzle(1)
      clearSavedGame()
      setTestCode('')
      setTestMessage(`Loaded testing puzzle +${nextOffset}. Refreshing...`)
      setTimeout(() => { window.location.href = '/' }, 250)
      return
    }

    if (normalized === 'PLAY-TODAY') {
      resetTestPuzzle()
      clearSavedGame()
      setTestCode('')
      setTestMessage('Returned to the live daily puzzle. Refreshing...')
      setTimeout(() => { window.location.href = '/' }, 250)
      return
    }

    setTestMessage('Unknown code. Try PLAY-AGAIN or PLAY-TODAY.')
  }

  return (
    <Modal open={open} onClose={onClose} title="Settings">
      <div className="space-y-5">
        <section>
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">How Scoring Works</h3>
          <div className="space-y-2">
            {[
              { icon: '✓', color: 'text-green-400', label: 'Exact Match', desc: 'Value matches the target exactly' },
              { icon: '~', color: 'text-orange-400', label: 'Close',       desc: 'Within 10% of the target value' },
              { icon: '↑', color: 'text-red-400',    label: 'Too High',    desc: 'Your guess is above the target' },
              { icon: '↓', color: 'text-red-400',    label: 'Too Low',     desc: 'Your guess is below the target' },
              { icon: '✗', color: 'text-zinc-500',   label: 'No Match',    desc: 'Sector does not match' },
            ].map(({ icon, color, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <span className={`text-lg leading-tight ${color} w-5 text-center`}>{icon}</span>
                <div>
                  <span className="text-sm font-medium text-zinc-200">{label}</span>
                  <p className="text-xs text-zinc-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/8 pt-4 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Testing</h3>
              <p className="text-xs text-zinc-500 mt-1">{testStatus}</p>
            </div>
            {testOffset !== 0 && (
              <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-orange-300">
                Test Mode
              </span>
            )}
          </div>

          <p className="text-xs text-zinc-500 leading-relaxed">
            Enter a test code to clear the current round and jump to another puzzle for QA.
          </p>

          <div className="space-y-2">
            <input
              type="text"
              value={testCode}
              onChange={e => setTestCode(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') runTestCode()
              }}
              placeholder="Enter test code"
              autoCapitalize="characters"
              spellCheck={false}
              className="w-full rounded-xl border border-white/10 bg-white/6 px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500/50 focus:bg-white/8"
            />

            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              onClick={runTestCode}
              disabled={!testCode.trim()}
            >
              Run Test Code
            </Button>
          </div>

          <div className="rounded-xl bg-white/4 p-3 text-xs text-zinc-500 space-y-1">
            <p><strong className="text-zinc-300">PLAY-AGAIN</strong> loads the next puzzle and lets you keep testing.</p>
            <p><strong className="text-zinc-300">PLAY-TODAY</strong> returns you to the real daily puzzle.</p>
          </div>

          {testMessage && (
            <p className="text-xs text-blue-300">{testMessage}</p>
          )}
        </section>

        <div className="border-t border-white/8 pt-4">
          <Button
            variant="danger"
            size="sm"
            className="w-full"
            onClick={() => {
              if (confirm('Reset all stats and today\'s game? This cannot be undone.')) {
                clearAllData()
                window.location.href = '/'
              }
            }}
          >
            Reset All Stats
          </Button>
        </div>
      </div>
    </Modal>
  )
}
