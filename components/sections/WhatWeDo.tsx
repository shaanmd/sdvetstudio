'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function WhatWeDo() {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Image
            src="/images/projects_collage.png"
            alt="A collage of SD VetStudio projects"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
