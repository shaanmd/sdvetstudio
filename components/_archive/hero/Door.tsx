'use client'

import Link from 'next/link'

export function Door() {
  return (
    <div className="w-[clamp(120px,22%,180px)] flex-shrink-0 bg-door-bg border-l-4 border-r-4 border-store-dark flex flex-col items-center justify-center gap-3 py-4 px-2.5 relative">
      <div
        className="absolute inset-3 border border-white/10 rounded-sm pointer-events-none"
        aria-hidden
      />
      <div className="font-luckiest text-xs tracking-[0.15em] text-white/40 uppercase">
        EST. 2025
      </div>
      <div className="bg-[#1A1A1A] text-store-mint font-luckiest text-[1.1rem] py-2 px-3.5 border-[3px] border-store-mint rounded shadow-[0_0_12px_rgba(78,203,168,0.3)] animate-neon-flicker tracking-[0.1em] [transform:rotate(-2deg)]">
        OPEN!
      </div>
      <Link
        href="#services"
        className="block bg-store-gold text-store-dark font-luckiest text-[clamp(0.9rem,1.8vw,1.2rem)] tracking-wide no-underline py-3 px-4 border-[3px] border-store-dark rounded text-center shadow-[4px_4px_0_#1A1208] transition-all cursor-pointer leading-tight hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#1A1208] active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        PUSH TO
        <br />
        ENTER ▶
      </Link>
      <div className="font-luckiest text-[1.4rem] text-white/15 tracking-wide">
        11
      </div>
      <div
        className="absolute right-3.5 top-1/2 -translate-y-1/2 w-2 h-7 bg-store-gold rounded border border-store-gold-dark shadow-[0_0_6px_rgba(245,196,44,0.4)]"
        aria-hidden
      />
    </div>
  )
}
