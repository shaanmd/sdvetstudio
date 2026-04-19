'use client'

import { useState } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Something went wrong')
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6" style={{ backgroundColor: '#1A3A5C' }}>
      <div className="max-w-xl mx-auto text-center">
        <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#48C9A0' }}>
          Work with us
        </p>
        <h2
          className="font-playfair font-bold"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', color: '#48C9A0' }}
        >
          Got something brewing?
        </h2>
        <p className="font-dmsans mt-3 max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
          We take on a small number of commissions and collaborations each year. Tell us what you&apos;re cooking up.
        </p>

        <div className="mt-10 text-left">
          {!sent ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="contact-name" className="font-dmsans font-medium text-sm mb-1 block" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="e.g. Jane Smith"
                required
                className="w-full px-4 py-3.5 rounded-xl text-sm mb-5 font-dmsans text-white outline-none placeholder:text-white/30"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.2)' }}
              />

              <label htmlFor="contact-email" className="font-dmsans font-medium text-sm mb-1 block" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Email address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="jane@yourpractice.com"
                required
                className="w-full px-4 py-3.5 rounded-xl text-sm mb-5 font-dmsans text-white outline-none placeholder:text-white/30"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.2)' }}
              />

              <label htmlFor="contact-message" className="font-dmsans font-medium text-sm mb-1 block" style={{ color: 'rgba(255,255,255,0.6)' }}>
                What are you thinking?
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your idea, problem, or project..."
                required
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl text-sm mb-5 font-dmsans text-white outline-none resize-y placeholder:text-white/30"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.2)' }}
              />

              {error && (
                <p className="font-dmsans text-sm text-red-400 mb-3">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="font-dmsans font-bold rounded-xl py-3.5 px-8 mt-2 transition hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-70"
                style={{ backgroundColor: '#48C9A0', color: '#1A3A5C' }}
              >
                {loading ? 'Sending\u2026' : 'Send it \u2192'}
              </button>
            </form>
          ) : (
            <div className="text-center py-10 px-4">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-dmsans font-medium text-white">Got it. We&apos;ll be in touch.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
