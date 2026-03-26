'use client'

import { motion } from 'framer-motion'

const updates = [
  {
    icon: '🏆',
    title: 'RadinCon Buildathon',
    description: 'Competed at the NZ radiology hackathon.',
    date: 'March 2026',
  },
  {
    icon: '🚀',
    title: 'JetPackers AI workshops',
    description: 'AI literacy for vet practices — first cohort live.',
    date: 'February 2026',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

export function Updates() {
  return (
    <section id="updates" className="bg-vet-surface py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-dmsans font-medium text-xs tracking-widest uppercase text-vet-primary mb-3">
          Latest
        </p>
        <h2 className="font-playfair font-bold text-vet-text" style={{ fontSize: '2rem' }}>
          What we&apos;ve been up to
        </h2>

        <motion.div className="mt-8 flex flex-col gap-4" {...fadeInUp}>
          {updates.map((u) => (
            <div
              key={u.title}
              className="bg-vet-bg border border-vet-border border-l-4 rounded-xl p-5 flex items-start gap-4"
              style={{ borderLeftColor: '#F5A25D' }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{u.icon}</span>
              <div className="flex-1">
                <p className="font-dmsans font-semibold text-vet-text">{u.title}</p>
                <p className="font-dmsans text-sm text-vet-muted mt-0.5">{u.description}</p>
                <p className="font-dmsans text-xs text-vet-muted mt-1 opacity-60">{u.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
