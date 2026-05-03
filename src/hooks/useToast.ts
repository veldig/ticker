import { useState, useCallback } from 'react'
import type { ToastData } from '../components/Toast'

let nextId = 0

export function useToast() {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const show = useCallback((message: string, type: ToastData['type'] = 'info') => {
    const id = ++nextId
    setToasts(prev => [...prev.slice(-2), { id, message, type }])
  }, [])

  const remove = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return { toasts, show, remove }
}
