'use client'

import { ShopSign } from '@/components/ui/ShopSign'

const LEFT_SIGNS = [
  { variant: 'yellow' as const, wide: true, children: <>WE BUILD<br />WEBSITES 🌐</> },
  { variant: 'coral' as const, children: <>WEB APPS<br />TOO! ⚙️</> },
  { variant: 'mint' as const, children: <>AI-ASSISTED<br />BUILDS</> },
  { variant: 'white' as const, children: <>No agency<br />price tag :)</> },
  { variant: 'pink' as const, children: <>CONTENT<br />+ DESIGN ✏️</> },
]

const RIGHT_SIGNS = [
  { variant: 'dark' as const, wide: true, children: <>BUILT BY<br />VETS 🩺</> },
  { variant: 'blue' as const, children: <>OWNED BY<br />YOU ✓</> },
  { variant: 'yellow' as const, children: <>50% DEPOSIT<br />TO START</> },
  { variant: 'white' as const, children: <>No jargon.<br />No drama.</> },
  { variant: 'coral' as const, children: <>RETAINERS<br />AVAIL. 🔄</> },
]

export function WindowLeft() {
  return (
    <div className="flex-1 bg-window-bg border-4 border-store-dark border-t-0 p-2.5 flex flex-wrap gap-1.5 content-start relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[30%] h-[60%] bg-gradient-to-br from-white/25 to-transparent pointer-events-none"
        aria-hidden
      />
      {LEFT_SIGNS.map((s, i) => (
        <ShopSign
          key={i}
          variant={s.variant}
          wide={s.wide}
          rotate={[-2, 1.5, -1, 2, -1.5][i]}
        >
          {s.children}
        </ShopSign>
      ))}
    </div>
  )
}

export function WindowRight() {
  return (
    <div className="flex-1 bg-window-bg border-4 border-store-dark border-t-0 border-l-0 p-2.5 flex flex-wrap gap-1.5 content-start relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[30%] h-[60%] bg-gradient-to-br from-white/25 to-transparent pointer-events-none"
        aria-hidden
      />
      {RIGHT_SIGNS.map((s, i) => (
        <ShopSign
          key={i}
          variant={s.variant}
          wide={s.wide}
          rotate={[1, -0.5, 0, 0, 0][i]}
        >
          {s.children}
        </ShopSign>
      ))}
    </div>
  )
}

export function Windows() {
  return (
    <>
      <WindowLeft />
      <WindowRight />
    </>
  )
}
