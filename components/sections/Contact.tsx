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
      business: formData.get('business'),
      service: formData.get('service'),
      project: formData.get('project'),
      referral: formData.get('referral'),
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
    <div className="max-w-[1100px] mx-auto py-[70px] px-[8%]" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16 items-start">
        <div>
          <div className="font-luckiest text-[0.7rem] tracking-[0.25em] uppercase text-store-coral mb-3">
            Start a project
          </div>
          <h2 className="font-luckiest text-[clamp(1.8rem,4vw,2.8rem)] text-store-dark tracking-wide mb-3">
            READY TO <span className="text-store-blue">BUILD?</span>
          </h2>
          <p className="text-base text-[#3A3020] leading-7 max-w-[540px] mb-10 font-semibold">
            Tell us what you need. Back to you within 2 business days.
          </p>
          <div className="mt-6 space-y-2">
            <div className="flex items-start gap-3 text-sm text-[#3A3020] font-bold">
              <div className="w-[22px] h-[22px] bg-store-coral border-2 border-store-dark rounded-full flex-shrink-0 mt-0.5" />
              Australia & New Zealand
            </div>
            <div className="flex items-start gap-3 text-sm text-[#3A3020] font-bold">
              <div className="w-[22px] h-[22px] bg-store-coral border-2 border-store-dark rounded-full flex-shrink-0 mt-0.5" />
              <a href="mailto:hello@sdvetstudio.com" className="text-inherit hover:underline">hello@sdvetstudio.com</a>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#3A3020] font-bold">
              <div className="w-[22px] h-[22px] bg-store-coral border-2 border-store-dark rounded-full flex-shrink-0 mt-0.5" />
              Reply within 2 business days
            </div>
            <div className="flex items-start gap-3 text-sm text-[#3A3020] font-bold">
              <div className="w-[22px] h-[22px] bg-store-coral border-2 border-store-dark rounded-full flex-shrink-0 mt-0.5" />
              50% deposit to start · 50% on handover
            </div>
          </div>
        </div>

        <div className="bg-white border-[3px] border-store-dark rounded-lg p-8 shadow-[6px_6px_0_#1A1208]">
          {!sent ? (
            <form onSubmit={handleSubmit} id="formContent">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="form-group">
                  <label className="block font-luckiest text-[0.65rem] tracking-[0.15em] text-store-dark mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Dr Jane Smith"
                    className="w-full py-2.5 px-3.5 bg-store-cream border-[2.5px] border-store-dark rounded font-nunito text-sm font-bold text-store-dark outline-none focus:border-store-blue focus:shadow-[3px_3px_0_#1B50D4]"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block font-luckiest text-[0.65rem] tracking-[0.15em] text-store-dark mb-1">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Smith Vet Clinic"
                    className="w-full py-2.5 px-3.5 bg-store-cream border-[2.5px] border-store-dark rounded font-nunito text-sm font-bold text-store-dark outline-none focus:border-store-blue focus:shadow-[3px_3px_0_#1B50D4]"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block font-luckiest text-[0.65rem] tracking-[0.15em] text-store-dark mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@smithvet.com.au"
                  className="w-full py-2.5 px-3.5 bg-store-cream border-[2.5px] border-store-dark rounded font-nunito text-sm font-bold text-store-dark outline-none focus:border-store-blue focus:shadow-[3px_3px_0_#1B50D4]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-luckiest text-[0.65rem] tracking-[0.15em] text-store-dark mb-1">
                  What do you need?
                </label>
                <select
                  name="service"
                  className="w-full py-2.5 px-3.5 bg-store-cream border-[2.5px] border-store-dark rounded font-nunito text-sm font-bold text-store-dark outline-none focus:border-store-blue focus:shadow-[3px_3px_0_#1B50D4] appearance-none"
                  required
                >
                  <option value="" disabled>
                    SELECT A SERVICE
                  </option>
                  <option value="Website build">Website build</option>
                  <option value="Web app build">Web app build</option>
                  <option value="Content + design">Content + design</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-luckiest text-[0.65rem] tracking-[0.15em] text-store-dark mb-1">
                  Tell us about your project
                </label>
                <textarea
                  name="project"
                  placeholder="What does it need to do? Who is it for?"
                  className="w-full py-2.5 px-3.5 bg-store-cream border-[2.5px] border-store-dark rounded font-nunito text-sm font-bold text-store-dark outline-none focus:border-store-blue focus:shadow-[3px_3px_0_#1B50D4] min-h-[100px] resize-y"
                />
              </div>
              <div className="mb-4">
                <label className="block font-luckiest text-[0.65rem] tracking-[0.15em] text-store-dark mb-1">
                  How did you find us? (optional)
                </label>
                <input
                  type="text"
                  name="referral"
                  placeholder="SynAIpse, word of mouth…"
                  className="w-full py-2.5 px-3.5 bg-store-cream border-[2.5px] border-store-dark rounded font-nunito text-sm font-bold text-store-dark outline-none focus:border-store-blue focus:shadow-[3px_3px_0_#1B50D4]"
                />
              </div>
              {error && <p className="text-store-coral text-sm font-semibold mb-2">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-store-gold text-store-dark border-[3px] border-store-dark rounded py-3.5 font-luckiest text-base tracking-widest cursor-pointer shadow-[4px_4px_0_#1A1208] transition-all mt-2 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#1A1208] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-70"
              >
                {loading ? 'SENDING…' : 'SEND YOUR BRIEF 🐾'}
              </button>
            </form>
          ) : (
            <div className="text-center py-10 px-4">
              <div className="text-5xl mb-3">🐾</div>
              <h3 className="font-luckiest text-xl text-store-dark tracking-wide mb-2">BRIEF RECEIVED!</h3>
              <p className="text-sm text-[#5A5040] font-semibold">
                We&apos;ll be in touch within 2 business days. Thanks for reaching out!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
