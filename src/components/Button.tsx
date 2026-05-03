import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-500 text-white border-transparent',
  ghost:   'bg-transparent hover:bg-white/8 text-zinc-300 border-white/10',
  danger:  'bg-red-600/20 hover:bg-red-600/30 text-red-300 border-red-500/30',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center gap-2
        font-medium rounded-lg border
        transition-all duration-150 cursor-pointer
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
