'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'New tools every week',
    text: "The software options are overwhelming and you don\u2019t know what\u2019s worth your time.",
  },
  {
    title: 'A list that never shrinks',
    text: "You have great ideas, but not enough hours. Things don\u2019t get crossed off your list. And there\u2019s more than one list, if only you could find them all.",
  },
  {
    title: "Off-the-shelf doesn\u2019t fit",
    text: 'Generic tools built for everyone often work well for no one. You need something that works just for you.',
  },
  {
    title: 'No one to ask',
    text: "It\u2019s hard to find people who understand both the tech and your world.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

export function Problem() {
  return (
    <section className="py-20 px-6 text-white" style={{ backgroundColor: '#1C2B28' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInUp}>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#F5A25D' }}>
            Sound familiar?
          </p>
          <h2
            className="font-playfair font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
          >
            The tech is moving fast. Your to-do list keeps growing.
          </h2>
          <p className="text-white/70 font-dmsans leading-relaxed mb-3">
            You&apos;re trying hard to keep up. You&apos;ve got forty browser tabs open and worry you&apos;re missing something important.
          </p>
          <p className="text-white/70 font-dmsans leading-relaxed">
            Yeah, nah. There&apos;s a better way.
          </p>
          <div
            className="mt-6 border-l-3 rounded-r-lg px-5 py-4 font-playfair italic text-white/85"
            style={{ backgroundColor: 'rgba(72,201,160,0.15)', borderLeft: '3px solid #48C9A0' }}
          >
            You don&apos;t need more information. You need tools to sort it.
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="rounded-xl p-5"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderLeft: '3px solid #48C9A0',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="font-dmsans font-semibold text-white text-sm mb-1">{c.title}</p>
              <p className="font-dmsans text-white/75 text-sm leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
