import { useEffect, useRef, type ReactNode } from 'react'

interface ModalProps {
  open:     boolean
  onClose:  () => void
  title:    string
  children: ReactNode
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  const firstFocusRef = useRef<HTMLButtonElement>(null)
  const sentinelStart = useRef<HTMLDivElement>(null)
  const sentinelEnd   = useRef<HTMLDivElement>(null)

  // Close on Escape, focus trap
  useEffect(() => {
    if (!open) return

    firstFocusRef.current?.focus()

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return

      const focusable = document.querySelectorAll<HTMLElement>(
        '[data-modal] button, [data-modal] input, [data-modal] a, [data-modal] [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last  = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus() }
      else if (!e.shiftKey && document.activeElement === last)  { e.preventDefault(); first?.focus() }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ animation: 'backdropIn 0.2s ease both' }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        data-modal
        className="relative w-full max-w-md bg-[#161a20] border border-white/10 rounded-2xl shadow-2xl"
        style={{ animation: 'modalIn 0.25s cubic-bezier(0.34, 1.4, 0.64, 1) both' }}
        onClick={e => e.stopPropagation()}
      >
        <div ref={sentinelStart} tabIndex={-1} />

        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
          <h2 id="modal-title" className="text-base font-semibold text-white">{title}</h2>
          <button
            ref={firstFocusRef}
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/8 transition-colors cursor-pointer text-xl leading-none"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <div className="px-5 py-5">{children}</div>

        <div ref={sentinelEnd} tabIndex={-1} />
      </div>
    </div>
  )
}
