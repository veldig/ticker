import { Modal } from './Modal'

interface HelpModalProps {
  open:    boolean
  onClose: () => void
}

export function HelpModal({ open, onClose }: HelpModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="How to Play">
      <div className="space-y-5 text-sm text-zinc-300">

        {/* Core rule */}
        <p>
          Guess the mystery stock in <strong className="text-white">6 tries</strong>.
          Search by ticker or company name. After each guess you get feedback on 4 metrics.
        </p>

        {/* Color legend */}
        <section>
          <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
            Feedback colours
          </h3>
          <div className="space-y-2">
            <FeedbackRow
              color="bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
              icon="🟩"
              label="Exact match"
              desc="Correct sector — or numeric value within 2%"
            />
            <FeedbackRow
              color="bg-orange-500/20 border-orange-500/40 text-orange-400"
              icon="🟧"
              label="Close"
              desc="Numeric value is within 10% of the answer"
            />
            <FeedbackRow
              color="bg-red-500/20 border-red-500/40 text-red-400"
              icon="🟥"
              label="Too high / Too low"
              desc="Numeric value is more than 10% off — arrow shows direction"
            />
            <FeedbackRow
              color="bg-zinc-800 border-white/8 text-zinc-500"
              icon="⬛"
              label="Miss"
              desc="Wrong sector"
            />
          </div>
        </section>

        {/* Example */}
        <section>
          <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
            Example — guessing AMD when answer is NVIDIA
          </h3>
          <div className="grid grid-cols-4 gap-1.5">
            <ExampleCell
              label="Sector"
              value="Tech"
              colorClass="bg-emerald-500/20 border-emerald-500/40"
              textClass="text-emerald-400"
              icon="✓"
            />
            <ExampleCell
              label="Mkt Cap"
              value="$245B"
              colorClass="bg-red-500/20 border-red-500/40"
              textClass="text-red-400"
              icon="↑"
              hint="Too low"
            />
            <ExampleCell
              label="P/E"
              value="38.9"
              colorClass="bg-red-500/20 border-red-500/40"
              textClass="text-red-400"
              icon="↑"
              hint="Too low"
            />
            <ExampleCell
              label="5Y Ret"
              value="+620%"
              colorClass="bg-red-500/20 border-red-500/40"
              textClass="text-red-400"
              icon="↑"
              hint="Too low"
            />
          </div>
          <p className="text-xs text-zinc-600 mt-2">
            Same sector ✓ — but AMD's cap, P/E, and returns are all lower than NVIDIA's, so guess higher.
          </p>
        </section>

        {/* Metrics explained */}
        <section>
          <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
            The 4 metrics
          </h3>
          <div className="space-y-2">
            <MetricRow name="Sector"       desc="Industry category (Technology, Healthcare, etc.)" />
            <MetricRow name="Market Cap"   desc="Total company value in billions of dollars" />
            <MetricRow name="P/E Ratio"    desc="Price-to-earnings ratio. N/A means the company is unprofitable." />
            <MetricRow name="5-Year Return" desc="How much the stock price changed over the last 5 years" />
          </div>
        </section>

        <p className="text-xs text-zinc-600 border-t border-white/6 pt-4">
          New puzzle every day at midnight UTC — same stock for everyone worldwide.
        </p>
      </div>
    </Modal>
  )
}

function FeedbackRow({
  color, icon, label, desc,
}: {
  color: string; icon: string; label: string; desc: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg border text-sm ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-white text-xs font-semibold">{label}</p>
        <p className="text-zinc-500 text-xs">{desc}</p>
      </div>
    </div>
  )
}

function ExampleCell({
  label, value, colorClass, textClass, icon, hint,
}: {
  label: string; value: string; colorClass: string; textClass: string; icon: string; hint?: string
}) {
  return (
    <div className={`flex flex-col items-center rounded-xl border p-2 gap-0.5 ${colorClass}`}>
      <span className="text-[9px] text-zinc-500 uppercase tracking-wider">{label}</span>
      <span className={`text-xs font-bold tabular-nums ${textClass}`}>{value}</span>
      <span className={`text-[10px] font-bold ${textClass}`}>{icon}</span>
      {hint && <span className="text-[8px] text-zinc-600">{hint}</span>}
    </div>
  )
}

function MetricRow({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-white text-xs font-semibold w-28 shrink-0">{name}</span>
      <span className="text-zinc-500 text-xs">{desc}</span>
    </div>
  )
}
