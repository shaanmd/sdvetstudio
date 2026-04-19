'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  { src: '/images/projects/synaipse.jpg', alt: 'SynAIpseVet: AI education for vets' },
  { src: '/images/projects/jetpackers.jpg', alt: 'Jetpackers AI: AI literacy for Gen X women' },
  { src: '/images/projects/senior-dog.jpg', alt: 'Senior Dog Mobility Programme' },
  { src: '/images/projects/vet-scribe.jpg', alt: 'Vet Scribe' },
  { src: '/images/projects/vet-flow.jpg', alt: 'Vet Flow' },
  { src: '/images/projects/vet-route.jpg', alt: 'Vet Route' },
  { src: '/images/projects/the-bark-run-project.jpg', alt: 'The Bark Run Project' },
  { src: '/images/projects/colour-my-pony.jpg', alt: 'Colour My Pony' },
  { src: '/images/projects/behind-the-bit.jpg', alt: 'Behind the Bit' },
  { src: '/images/projects/sooper-dooper-project-prioritizer.jpg', alt: 'Sooper Dooper Project Prioritizer' },
]

export function WhatWeDo() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-vet-surface py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs tracking-widest uppercase text-vet-primary mb-3">
            What we do
          </p>
          <h2
            className="font-playfair font-bold text-vet-text leading-tight mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          >
            We build things that make life easier.
          </h2>
          <p className="font-dmsans text-vet-muted leading-relaxed">
            SD VetStudio is Shaan and Deb. We build AI tools, web pages, web apps, and educational resources. Some are for the vet world and some aren&apos;t. We enjoy wrangling the latest models to produce intentional, quality digital tools.
          </p>
        </motion.div>

        <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-vet-bg border border-vet-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: i === current ? '#1A3A5C' : 'rgba(255,255,255,0.6)',
                  transform: i === current ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Show slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
