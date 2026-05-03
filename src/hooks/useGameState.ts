import { useState, useCallback, useEffect } from 'react'
import type { GameState, GuessResult, Stock } from '../types/stock'
import { stocksData } from '../data/stocks'
import { getDailyStock, getPuzzleDate, getPuzzleNumber } from '../lib/puzzle'
import { compareStocks, isWin } from '../lib/compare'
import { loadGame, saveGame, recordResult } from '../lib/storage'

const MAX_GUESSES = 6

interface UseGameStateReturn {
  gameState:          GameState
  target:             Stock
  guesses:            GuessResult[]
  errorMsg:           string | null
  isRestoredComplete: boolean
  submit:             (query: string) => void
  clearError:         () => void
}

function initFromStorage(): {
  guesses:            GuessResult[]
  gameState:          GameState
  isRestoredComplete: boolean
} {
  const today  = getPuzzleDate()
  const saved  = loadGame()

  if (saved && saved.puzzleDate === today) {
    const isComplete = saved.result === 'won' || saved.result === 'lost'
    return {
      guesses:            saved.guesses,
      gameState:          saved.result as GameState,
      isRestoredComplete: isComplete,
    }
  }

  return { guesses: [], gameState: 'idle', isRestoredComplete: false }
}

export function useGameState(): UseGameStateReturn {
  const today        = getPuzzleDate()
  const puzzleNumber = getPuzzleNumber()

  const [target] = useState<Stock>(getDailyStock)

  const [{ guesses, gameState, isRestoredComplete }] = useState(initFromStorage)
  const [guessesState, setGuesses]     = useState<GuessResult[]>(guesses)
  const [gameStateVal, setGameState]   = useState<GameState>(gameState)
  const [errorMsg, setErrorMsg]        = useState<string | null>(null)

  // Persist game state on every change
  useEffect(() => {
    if (gameStateVal === 'idle') return
    const result = (gameStateVal === 'won' || gameStateVal === 'lost')
      ? gameStateVal
      : 'in_progress'
    saveGame({ puzzleDate: today, puzzleNumber, guesses: guessesState, result })
  }, [guessesState, gameStateVal, today, puzzleNumber])

  const clearError = useCallback(() => setErrorMsg(null), [])

  const submit = useCallback((query: string) => {
    const q = query.trim()
    if (!q) return

    const stock = stocksData.find(
      s =>
        s.ticker.toUpperCase() === q.toUpperCase() ||
        s.name.toLowerCase()   === q.toLowerCase()
    )

    if (!stock) {
      setErrorMsg(`"${q}" not found — try a ticker or full company name`)
      return
    }

    if (guessesState.some(g => g.stock.ticker === stock.ticker)) {
      setErrorMsg(`${stock.ticker} already guessed`)
      return
    }

    const feedback    = compareStocks(stock, target)
    const result: GuessResult = { stock, feedback }
    const nextGuesses = [...guessesState, result]

    setGuesses(nextGuesses)
    setErrorMsg(null)

    if (isWin(feedback)) {
      setGameState('won')
      recordResult(true, nextGuesses.length, today)
    } else if (nextGuesses.length >= MAX_GUESSES) {
      setGameState('lost')
      recordResult(false, nextGuesses.length, today)
    } else {
      setGameState('in_progress')
    }
  }, [guessesState, target, today])

  return {
    gameState:          gameStateVal,
    target,
    guesses:            guessesState,
    errorMsg,
    isRestoredComplete,
    submit,
    clearError,
  }
}
