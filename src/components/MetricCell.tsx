import type { FeedbackValue } from '../types/stock'
import { FEEDBACK_STYLES } from '../lib/design'

interface MetricCellProps {
  label:      string
  value:      string
  feedback?:  FeedbackValue | 'exact' | 'miss'
  cellIndex?: number   // 0-3, used for stagger delay
  animate?:   boolean
}

export function MetricCell({ label, value, feedback, cellIndex = 0, animate = false }: MetricCellProps) {
  const style = feedback ? FEEDBACK_STYLES[feedback] : null
  const delay = `${cellIndex * 80}ms`

  return (
    <div
      className={`
        flex flex-col items-center justify-center gap-0.5 sm:gap-1
        rounded-xl border p-2 sm:p-2.5 min-h-[60px] sm:min-h-[68px]
        ${style
          ? `${style.bg} ${style.border} ${style.text}`
          : 'bg-white/4 border-white/8 text-zinc-300'
        }
      `}
      style={animate ? {
        animation: `cellReveal 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay} both`,
      } : undefined}
    >
      <span className="text-[8px] sm:text-[10px] font-semibold opacity-60 uppercase tracking-wider leading-tight text-center">
        {label}
      </span>
      <span className="text-[10px] sm:text-xs font-bold leading-tight text-center">
        {value}
      </span>
      {style && (
        <span className="text-base leading-none" aria-hidden="true">{style.icon}</span>
      )}
    </div>
  )
}
