import { Modal } from './Modal'
import { SectorBadge } from './SectorBadge'
import { MetricCell } from './MetricCell'
import { formatMarketCap, formatReturn } from '../lib/design'

interface HelpModalProps {
  open: boolean
  onClose: () => void
}

export function HelpModal({ open, onClose }: HelpModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="How to Play">
      <div className="space-y-5 text-sm text-zinc-300">
        <p>
          Guess the mystery stock in <strong className="text-white">6 tries</strong>. Each guess gives you metric feedback to narrow it down.
        </p>

        <section>
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Metrics</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/4 rounded-lg p-3">
              <p className="font-medium text-white text-xs mb-0.5">Sector</p>
              <SectorBadge sector="Technology" size="sm" />
            </div>
            <div className="bg-white/4 rounded-lg p-3">
              <p className="font-medium text-white text-xs mb-0.5">Market Cap</p>
              <p className="text-zinc-400 text-xs">{formatMarketCap(2950)}</p>
            </div>
            <div className="bg-white/4 rounded-lg p-3">
              <p className="font-medium text-white text-xs mb-0.5">P/E Ratio</p>
              <p className="text-zinc-400 text-xs">55.4</p>
            </div>
            <div className="bg-white/4 rounded-lg p-3">
              <p className="font-medium text-white text-xs mb-0.5">5-Year Return</p>
              <p className="text-zinc-400 text-xs">{formatReturn(1840)}</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Example Guess</h3>
          <div className="grid grid-cols-4 gap-1.5">
            <MetricCell label="Sector" value="Tech" feedback="exact" />
            <MetricCell label="Mkt Cap" value="$245B" feedback="close" />
            <MetricCell label="P/E" value="38.9" feedback="low" />
            <MetricCell label="5Y Ret" value="+620%" feedback="low" />
          </div>
          <p className="text-xs text-zinc-500 mt-2">AMD vs NVIDIA — same sector, lower cap and returns.</p>
        </section>

        <p className="text-xs text-zinc-500">
          A new puzzle drops every day at midnight UTC. Same puzzle for everyone.
        </p>
      </div>
    </Modal>
  )
}
