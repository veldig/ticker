import type { Sector } from '../types/stock'
import { SECTOR_COLORS } from '../lib/design'

interface SectorBadgeProps {
  sector: Sector
  size?: 'sm' | 'md'
}

export function SectorBadge({ sector, size = 'md' }: SectorBadgeProps) {
  const colors = SECTOR_COLORS[sector] ?? 'bg-zinc-700/40 text-zinc-300 border-zinc-600/30'
  return (
    <span className={`
      inline-flex items-center font-medium border rounded-full
      ${size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'}
      ${colors}
    `}>
      {sector}
    </span>
  )
}
