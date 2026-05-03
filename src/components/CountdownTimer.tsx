import { useState, useEffect } from 'react'

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getSecondsUntilMidnightUTC())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getSecondsUntilMidnightUTC())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const h = Math.floor(timeLeft / 3600)
  const m = Math.floor((timeLeft % 3600) / 60)
  const s = timeLeft % 60

  return (
    <div className="flex items-center gap-1 font-mono text-sm text-zinc-300">
      <span>{String(h).padStart(2, '0')}</span>
      <span className="text-zinc-600">:</span>
      <span>{String(m).padStart(2, '0')}</span>
      <span className="text-zinc-600">:</span>
      <span>{String(s).padStart(2, '0')}</span>
    </div>
  )
}

function getSecondsUntilMidnightUTC(): number {
  const now = new Date()
  const midnight = new Date()
  midnight.setUTCHours(24, 0, 0, 0)
  return Math.floor((midnight.getTime() - now.getTime()) / 1000)
}
