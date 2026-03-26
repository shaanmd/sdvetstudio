'use client'

export type SignVariant =
  | 'yellow'
  | 'coral'
  | 'mint'
  | 'pink'
  | 'white'
  | 'dark'
  | 'blue'

export interface ShopSignProps {
  variant: SignVariant
  rotate?: number
  wide?: boolean
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<SignVariant, string> = {
  yellow:
    'bg-store-yellow text-store-dark border-store-dark shadow-[2px_2px_0_rgba(0,0,0,0.2)]',
  coral:
    'bg-store-coral text-white border-store-dark shadow-[2px_2px_0_rgba(0,0,0,0.2)]',
  mint: 'bg-store-mint text-store-dark border-store-dark shadow-[2px_2px_0_rgba(0,0,0,0.2)]',
  pink: 'bg-store-pink text-store-dark border-store-dark shadow-[2px_2px_0_rgba(0,0,0,0.2)]',
  white:
    'bg-white text-store-dark border-store-dark font-marker text-[0.65rem] shadow-[2px_2px_0_rgba(0,0,0,0.2)]',
  dark: 'bg-store-dark text-store-yellow border-store-dark shadow-[2px_2px_0_rgba(0,0,0,0.2)]',
  blue: 'bg-store-blue text-store-cream border-store-dark shadow-[2px_2px_0_rgba(0,0,0,0.2)]',
}

export function ShopSign({
  variant,
  rotate = 0,
  wide = false,
  children,
  className = '',
}: ShopSignProps) {
  const style: React.CSSProperties = rotate !== 0 ? { transform: `rotate(${rotate}deg)` } : {}
  return (
    <div
      style={style}
      className={`
        px-2 py-1.5 font-luckiest text-[0.7rem] tracking-wide leading-tight text-center
        border-[2.5px] rounded-sm
        ${variantStyles[variant]}
        ${wide ? 'w-full text-[0.85rem] py-2 px-2.5' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
