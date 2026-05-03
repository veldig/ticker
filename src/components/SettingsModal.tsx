import { Modal } from './Modal'
import { Button } from './Button'
import { clearAllData } from '../lib/storage'

interface SettingsModalProps {
  open: boolean
  onClose: () => void
}

export function SettingsModal({ open, onClose }: SettingsModalProps) {
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
