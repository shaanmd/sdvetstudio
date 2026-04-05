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
          className="font-playfair font-semibold text-vet-primary tracking-tight"
        >
          SD Vet<span className="text-vet-secondary">Studio</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#projects" className="hidden md:inline font-dmsans text-sm text-vet-muted hover:text-vet-primary transition-colors">Projects</a>
          <a href="#about" className="hidden md:inline font-dmsans text-sm text-vet-muted hover:text-vet-primary transition-colors">About</a>
          <a
            href="#contact"
            className="font-dmsans font-semibold text-sm px-5 py-2 rounded-full bg-vet-secondary text-vet-primary transition-colors hover:bg-vet-primary hover:text-white"
          >
            Work with us
          </a>
        </div>
      </div>
    </nav>
  )
}
