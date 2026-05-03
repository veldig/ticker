export const SECTOR_COLORS: Record<string, string> = {
  Technology:     'bg-blue-500/15 text-blue-300 border-blue-500/30',
  Healthcare:     'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  Financial:      'bg-violet-500/15 text-violet-300 border-violet-500/30',
  Consumer:       'bg-orange-500/15 text-orange-300 border-orange-500/30',
  Energy:         'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  Industrials:    'bg-slate-500/15 text-slate-300 border-slate-500/30',
  'Real Estate':  'bg-rose-500/15 text-rose-300 border-rose-500/30',
  Utilities:      'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  Materials:      'bg-amber-500/15 text-amber-300 border-amber-500/30',
  Communications: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
}

export const FEEDBACK_STYLES = {
  exact: {
    bg: 'bg-green-500/20',
    border: 'border-green-500/50',
    text: 'text-green-300',
    icon: '✓',
    label: 'Match',
  },
  close: {
    bg: 'bg-orange-500/20',
    border: 'border-orange-500/50',
    text: 'text-orange-300',
    icon: '~',
    label: 'Close',
  },
  high: {
    bg: 'bg-red-500/20',
    border: 'border-red-500/50',
    text: 'text-red-300',
    icon: '↑',
    label: 'Too High',
  },
  low: {
    bg: 'bg-red-500/20',
    border: 'border-red-500/50',
    text: 'text-red-300',
    icon: '↓',
    label: 'Too Low',
  },
  miss: {
    bg: 'bg-zinc-700/40',
    border: 'border-zinc-600/50',
    text: 'text-zinc-400',
    icon: '✗',
    label: 'No Match',
  },
} as const

export function formatMarketCap(billions: number): string {
  if (billions >= 1000) return `$${(billions / 1000).toFixed(1)}T`
  return `$${billions}B`
}

export function formatPE(pe: number): string {
  if (pe < 0) return 'N/A'
  return pe.toFixed(1)
}

export function formatReturn(pct: number): string {
  return `${pct >= 0 ? '+' : ''}${pct}%`
}
