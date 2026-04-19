'use client'

import { useState } from 'react'

interface Props {
  project: string
  onClose: () => void
}

export function InterestModal({ project, onClose }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, project }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(13,32,53,0.6)' }}
      onClick={onClose}
    >
      <div
        className="bg-vet-surface rounded-2xl p-8 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {status === 'done' ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-3">✅</div>
            <p className="font-dmsans font-semibold text-vet-text text-lg">You&apos;re on the list!</p>
            <p className="font-dmsans text-sm text-vet-muted mt-2">We&apos;ll let you know when {project} is ready.</p>
            <button
              onClick={onClose}
              className="mt-6 font-dmsans text-sm text-vet-primary hover:underline"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="font-dmsans font-medium text-xs tracking-widest uppercase text-vet-primary mb-1">
              Interested?
            </p>
            <h3 className="font-playfair font-bold text-vet-text text-xl mb-1">{project}</h3>
            <p className="font-dmsans text-sm text-vet-muted mb-6">
              Leave your details and we&apos;ll be in touch when it&apos;s ready.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-vet-border rounded-xl px-4 py-3 font-dmsans text-sm text-vet-text bg-vet-bg outline-none focus:border-vet-primary transition"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-vet-border rounded-xl px-4 py-3 font-dmsans text-sm text-vet-text bg-vet-bg outline-none focus:border-vet-primary transition"
              />
              {status === 'error' && (
                <p className="font-dmsans text-xs text-red-500">Something went wrong. Please try again.</p>
              )}
              <div className="flex gap-3 mt-1">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex-1 py-3 rounded-xl font-dmsans font-semibold text-sm text-white transition hover:-translate-y-0.5 disabled:opacity-60"
                  style={{ backgroundColor: '#1A3A5C' }}
                >
                  {status === 'loading' ? 'Sending...' : 'Keep me posted'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl font-dmsans text-sm text-vet-muted border border-vet-border hover:border-vet-primary transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
