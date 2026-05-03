import { useEffect, useState } from 'react'

export interface ToastData {
  id:      number
  message: string
  type:    'error' | 'success' | 'info'
}

interface ToastProps {
  toast:    ToastData
  onRemove: (id: number) => void
}

export function Toast({ toast, onRemove }: ToastProps) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const fadeTimer  = setTimeout(() => setLeaving(true), 1700)
    const killTimer  = setTimeout(() => onRemove(toast.id), 2000)
    return () => { clearTimeout(fadeTimer); clearTimeout(killTimer) }
  }, [toast.id, onRemove])

  const colorClass =
    toast.type === 'error'   ? 'bg-red-500/90 text-white' :
    toast.type === 'success' ? 'bg-green-600/90 text-white' :
                               'bg-zinc-700/95 text-zinc-100'

  return (
    <div
      role="status"
      aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      style={{
        animation: leaving
          ? 'toastOut 0.25s ease forwards'
          : 'toastIn 0.25s ease forwards',
      }}
      className={`
        fixed top-[70px] left-1/2 z-[100]
        px-4 py-2.5 rounded-xl shadow-2xl
        text-sm font-medium text-center
        pointer-events-none max-w-[280px] w-max
        ${colorClass}
      `}
    >
      {toast.message}
    </div>
  )
}
