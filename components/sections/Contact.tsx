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
    <section id="contact" className="py-20 px-6" style={{ backgroundColor: '#2E6B5E' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#48C9A0' }}>
          Work with us
        </p>
        <h2
          className="font-playfair font-bold text-white"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}
        >
          Got something brewing?
        </h2>
        <p className="font-dmsans text-white/80 mt-2 max-w-md mx-auto leading-relaxed">
          We take on a small number of commissions and collaborations each year. Tell us what you&apos;re cooking up.
        </p>

        <div className="mt-10 bg-vet-surface rounded-2xl p-8 text-left">
          {!sent ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="contact-name" className="font-dmsans font-medium text-sm text-vet-text mb-1 block">
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="e.g. Jane Smith"
                required
                className="w-full px-4 py-3 border border-vet-border rounded-xl bg-vet-bg text-vet-text outline-none focus:border-[#2E6B5E] text-sm mb-4 font-dmsans"
              />

              <label htmlFor="contact-email" className="font-dmsans font-medium text-sm text-vet-text mb-1 block">
                Email address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="jane@yourpractice.com"
                required
                className="w-full px-4 py-3 border border-vet-border rounded-xl bg-vet-bg text-vet-text outline-none focus:border-[#2E6B5E] text-sm mb-4 font-dmsans"
              />

              <label htmlFor="contact-message" className="font-dmsans font-medium text-sm text-vet-text mb-1 block">
                What are you thinking?
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What are you thinking?"
                required
                rows={5}
                className="w-full px-4 py-3 border border-vet-border rounded-xl bg-vet-bg text-vet-text outline-none focus:border-[#2E6B5E] text-sm mb-4 font-dmsans resize-y"
              />

              {error && (
                <p className="font-dmsans text-sm text-red-600 mb-3">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full font-dmsans font-semibold rounded-full py-3.5 mt-2 transition hover:brightness-105 disabled:opacity-70"
                style={{ backgroundColor: '#F5A25D', color: '#1C2B28' }}
              >
                {loading ? 'Sending…' : 'Send it →'}
              </button>
            </form>
          ) : (
            <div className="text-center py-10 px-4">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-dmsans font-medium text-vet-text">Got it — we&apos;ll be in touch.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
