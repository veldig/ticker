import type { GuessResult } from '../types/stock'
import { MetricCell } from './MetricCell'
import { formatMarketCap, formatPE, formatReturn } from '../lib/design'

interface GuessRowProps {
  result:  GuessResult
  index:   number
  animate: boolean
}

const SECTOR_SHORT: Record<string, string> = {
  'Technology':    'Tech',
  'Healthcare':    'Health',
  'Financial':     'Finance',
  'Consumer':      'Consumer',
  'Energy':        'Energy',
  'Industrials':   'Industry',
  'Real Estate':   'Real Est.',
  'Utilities':     'Utilities',
  'Materials':     'Materials',
  'Communications':'Comms',
}

const CELLS = [
  { label: 'Sector',   key: 'sector'    as const },
  { label: 'Mkt Cap',  key: 'marketCap' as const },
  { label: 'P/E',      key: 'pe'        as const },
  { label: '5Y Ret',   key: 'return5y'  as const },
]

export function GuessRow({ result, index, animate }: GuessRowProps) {
  const { stock, feedback } = result

  const values: Record<string, string> = {
    sector:    SECTOR_SHORT[stock.sector] ?? stock.sector,
    marketCap: formatMarketCap(stock.marketCap),
    pe:        formatPE(stock.pe),
    return5y:  formatReturn(stock.return5y),
  }

  return (
    <li
      role="listitem"
      aria-label={`Guess ${index + 1}: ${stock.name} (${stock.ticker})`}
      className="flex flex-col gap-1.5"
      style={animate ? { animation: 'fadeSlideUp 0.2s ease both' } : undefined}
    >
      <div className="flex items-center gap-2 pl-1">
        <span className="text-[10px] text-zinc-600 w-4 text-right tabular-nums" aria-hidden="true">
          {index + 1}
        </span>
        <span className="font-bold text-white text-sm tracking-wide">{stock.ticker}</span>
        <span className="text-zinc-500 text-xs truncate">{stock.name}</span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pl-0 sm:pl-5">
        {CELLS.map((cell, cellIdx) => (
          <MetricCell
            key={cell.key}
            label={cell.label}
            value={values[cell.key]}
            feedback={feedback[cell.key]}
            cellIndex={cellIdx}
            animate={animate}
          />
        ))}
      </div>
    </li>
  )
}
