import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { GuessRow } from '../components/GuessRow'
import { Button } from '../components/Button'
import { CountdownTimer } from '../components/CountdownTimer'
import { Toast } from '../components/Toast'
import { stocksData } from '../data/stocks'
import type { Stock } from '../types/stock'
import { useGameState } from '../hooks/useGameState'
import { useToast } from '../hooks/useToast'
import { getPuzzleNumber } from '../lib/puzzle'

const MAX_GUESSES = 6

export function GameScreen() {
  const navigate = useNavigate()
  const { gameState, target, guesses, errorMsg, submit, clearError, isRestoredComplete } = useGameState()
  const { toasts, show: showToast, remove: removeToast } = useToast()

  const [query, setQuery]                   = useState('')
  const [suggestions, setSuggestions]       = useState<Stock[]>([])
  const [highlightedIndex, setHighlighted]  = useState(-1)
  const [shake, setShake]                   = useState(false)
  const inputRef                            = useRef<HTMLInputElement>(null)
  const debounceRef                         = useRef<ReturnType<typeof setTimeout> | null>(null)
  const listRef                             = useRef<HTMLUListElement>(null)

  // Number of guesses present at mount — these don't animate (restored from localStorage)
  const [animatedFrom] = useState(() => guesses.length)

  // Navigate to result screen
  useEffect(() => {
    if (gameState !== 'won' && gameState !== 'lost') return
    const delay = isRestoredComplete ? 0 : 950
    const t = setTimeout(() => {
      navigate(gameState === 'won' ? '/win' : '/lose', {
        state: { target, guesses, puzzleNumber: getPuzzleNumber() },
        replace: isRestoredComplete,
      })
    }, delay)
    return () => clearTimeout(t)
  }, [gameState, navigate, target, guesses, isRestoredComplete])

  // Shake + toast on error
  useEffect(() => {
    if (!errorMsg) return
    setShake(true)
    showToast(errorMsg, 'error')
    const t = setTimeout(() => { setShake(false); clearError() }, 600)
    return () => clearTimeout(t)
  }, [errorMsg, clearError, showToast])

  // Scroll latest guess into view
  useEffect(() => {
    if (guesses.length === 0) return
    const items = listRef.current?.querySelectorAll('li')
    items?.[items.length - 1]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [guesses.length])

  function handleInput(value: string) {
    setQuery(value)
    setHighlighted(-1)
    clearError()
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (!value.trim()) { setSuggestions([]); return }

    debounceRef.current = setTimeout(() => {
      const q = value.toLowerCase()
      const matches = stocksData
        .filter(s => s.ticker.toLowerCase().startsWith(q) || s.name.toLowerCase().includes(q))
        .sort((a, b) => {
          const aT = a.ticker.toLowerCase().startsWith(q)
          const bT = b.ticker.toLowerCase().startsWith(q)
          return aT === bT ? 0 : aT ? -1 : 1
        })
        .slice(0, 7)
      setSuggestions(matches)
    }, 150)
  }

  function handleSelect(stock: Stock) {
    setQuery(stock.ticker)
    setSuggestions([])
    setHighlighted(-1)
    inputRef.current?.focus()
  }

  function handleSubmit() {
    const finalQuery = highlightedIndex >= 0 ? suggestions[highlightedIndex].ticker : query
    if (!finalQuery.trim()) return
    setSuggestions([])
    setHighlighted(-1)
    submit(finalQuery)
    setQuery('')
  }

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (suggestions.length === 0) {
      if (e.key === 'Enter') handleSubmit()
      return
    }
    if (e.key === 'ArrowDown')  { e.preventDefault(); setHighlighted(i => Math.min(i + 1, suggestions.length - 1)) }
    else if (e.key === 'ArrowUp')    { e.preventDefault(); setHighlighted(i => Math.max(i - 1, -1)) }
    else if (e.key === 'Enter')  { e.preventDefault(); highlightedIndex >= 0 ? handleSelect(suggestions[highlightedIndex]) : handleSubmit() }
    else if (e.key === 'Escape') { setSuggestions([]); setHighlighted(-1) }
  }, [suggestions, highlightedIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  const attemptsLeft = MAX_GUESSES - guesses.length
  const isFinished   = gameState === 'won' || gameState === 'lost'
  const puzzleNum    = getPuzzleNumber()
  const listId       = 'autocomplete-list'

  if (isRestoredComplete) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-56px)]" aria-label="Loading">
        <div
          className="w-5 h-5 border-2 border-white/15 border-t-blue-500 rounded-full"
          style={{ animation: 'spin 0.7s linear infinite' }}
          aria-hidden="true"
        />
      </div>
    )
  }

  return (
    <>
      {/* Toast layer */}
      {toasts.map(t => (
        <Toast key={t.id} toast={t} onRemove={removeToast} />
      ))}

      <main className="flex flex-col min-h-[calc(100vh-56px)]">
        <div className="max-w-2xl mx-auto w-full px-4 py-5 space-y-4">

          {/* Puzzle header */}
          <section aria-label="Today's puzzle">
            <div className="bg-[#161a20] border border-white/8 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Ticker #{puzzleNum}
                </span>
                <span className="text-xs text-zinc-600" aria-live="polite" aria-atomic="true">
                  {guesses.length} / {MAX_GUESSES} guesses
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2" role="presentation">
                {(['Sector', 'Mkt Cap', 'P/E Ratio', '5Y Return'] as const).map(label => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center bg-white/4 border border-white/6 rounded-xl p-2.5 sm:p-3 min-h-[58px] sm:min-h-[62px] gap-1"
                    aria-hidden="true"
                  >
                    <span className="text-[9px] sm:text-[10px] font-semibold text-zinc-600 uppercase tracking-wider leading-tight text-center">
                      {label}
                    </span>
                    <span className="text-sm font-bold text-zinc-700">???</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Guess history */}
          {guesses.length > 0 ? (
            <section aria-label="Guess history">
              <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Your Guesses
              </p>
              <ul ref={listRef} role="list" className="space-y-4 list-none p-0 m-0">
                {guesses.map((result, i) => (
                  <GuessRow
                    key={result.stock.ticker}
                    result={result}
                    index={i}
                    animate={i >= animatedFrom}
                  />
                ))}
              </ul>
            </section>
          ) : (
            /* Empty state */
            <div
              className="flex flex-col items-center justify-center py-10 gap-3"
              aria-label="No guesses yet"
            >
              <div className="grid grid-cols-4 gap-1.5 w-full max-w-xs opacity-20">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="min-h-[60px] rounded-xl border border-white/10 bg-white/3" />
                ))}
              </div>
              <p className="text-xs text-zinc-600 mt-1">Start guessing to see feedback</p>
            </div>
          )}

          {/* Remaining empty slots (after at least one guess) */}
          {guesses.length > 0 && !isFinished && (
            <div aria-hidden="true" className="space-y-4">
              {Array.from({ length: attemptsLeft }).map((_, i) => (
                <div key={i} className="grid grid-cols-4 gap-1.5 sm:gap-2 pl-5">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="min-h-[68px] sm:min-h-[72px] rounded-xl border border-white/4 bg-white/[0.015]" />
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Win/lose animation beat */}
          {isFinished && (
            <div className="flex justify-center py-4" aria-hidden="true">
              <span className="text-3xl animate-bounce">
                {gameState === 'won' ? '🎉' : '📉'}
              </span>
            </div>
          )}

          {/* Guess input */}
          {!isFinished && (
            <div
              className="sticky bottom-0 pb-[env(safe-area-inset-bottom)]"
              style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 16px)' }}
            >
              <div className={`
                bg-[#161a20] border rounded-2xl p-4 shadow-xl shadow-black/60
                transition-colors duration-200
                ${shake ? 'border-red-500/40' : 'border-white/10'}
              `}>
                <div className="relative">
                  <label htmlFor="stock-search" className="sr-only">
                    Search for a stock by ticker or company name
                  </label>
                  <input
                    id="stock-search"
                    ref={inputRef}
                    type="search"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={suggestions.length > 0}
                    aria-controls={listId}
                    aria-activedescendant={highlightedIndex >= 0 ? `suggestion-${highlightedIndex}` : undefined}
                    value={query}
                    onChange={e => handleInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ticker or company name…"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="characters"
                    spellCheck={false}
                    className={`
                      w-full bg-white/6 border rounded-xl px-4 py-3 text-sm text-white
                      placeholder-zinc-600 outline-none transition-all duration-150
                      ${shake ? 'animate-[shake_0.3s_ease-in-out]' : ''}
                      ${shake
                        ? 'border-red-500/40 focus:border-red-500/60'
                        : 'border-white/10 focus:border-blue-500/50 focus:bg-white/8'}
                    `}
                  />

                  {/* Autocomplete dropdown */}
                  {suggestions.length > 0 && (
                    <ul
                      id={listId}
                      role="listbox"
                      aria-label="Stock suggestions"
                      className="absolute bottom-full left-0 right-0 mb-2 bg-[#1e232b] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 list-none p-0 m-0"
                      style={{ animation: 'fadeSlideUp 0.15s ease both' }}
                    >
                      {suggestions.map((stock, idx) => (
                        <li
                          key={stock.ticker}
                          id={`suggestion-${idx}`}
                          role="option"
                          aria-selected={idx === highlightedIndex}
                        >
                          <button
                            onMouseDown={e => { e.preventDefault(); handleSelect(stock) }}
                            className={`
                              w-full flex items-center gap-3 px-4 py-2.5 text-left cursor-pointer transition-colors
                              ${idx === highlightedIndex ? 'bg-white/10' : 'hover:bg-white/6'}
                            `}
                            tabIndex={-1}
                          >
                            <span className="font-bold text-white text-sm w-16 shrink-0">{stock.ticker}</span>
                            <span className="text-zinc-400 text-sm truncate">{stock.name}</span>
                            <span className="text-xs text-zinc-600 ml-auto shrink-0">{stock.exchange}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-zinc-600" aria-live="polite">
                    {attemptsLeft} attempt{attemptsLeft !== 1 ? 's' : ''} left
                  </span>
                  <Button
                    size="sm"
                    onClick={handleSubmit}
                    disabled={!query.trim()}
                    aria-label={query.trim() ? `Submit guess: ${query}` : 'Enter a stock ticker or name'}
                  >
                    Submit Guess
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Locked — puzzle complete */}
          {isFinished && !isRestoredComplete && (
            <div className="bg-[#161a20] border border-white/8 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Next Puzzle</p>
                <CountdownTimer />
              </div>
              <p className="text-xs text-zinc-600">See you tomorrow</p>
            </div>
          )}

        </div>
      </main>
    </>
  )
}
