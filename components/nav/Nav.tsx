'use client'

import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 ${
        scrolled
          ? 'bg-vet-surface border-b border-vet-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-full">
        <a
          href="#"
          className="font-dmsans font-semibold text-vet-text tracking-tight"
        >
          SD VetStudio
        </a>
        <a
          href="#contact"
          className="font-dmsans font-medium text-sm px-4 py-2 rounded-full border border-vet-primary text-vet-primary transition-colors hover:bg-vet-primary hover:text-white"
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}
