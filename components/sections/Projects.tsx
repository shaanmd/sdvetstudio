'use client'

import { motion } from 'framer-motion'
import { StatusBadge } from '@/components/ui/StatusBadge'

const projects = [
  {
    status: 'live' as const,
    name: 'SynAIpseVet',
    description: 'AI education platform for veterinary professionals. Built by and for practising vets.',
    url: 'https://synaipse.vet',
  },
  {
    status: 'beta' as const,
    name: 'CCL Rehab App',
    description: '12-week evidence-based recovery program for dogs post cruciate surgery.',
    url: 'https://ccl.vetalign.com.au',
  },
  {
    status: 'live' as const,
    name: 'Senior Dog Mobility',
    description: 'Lead generation tool with automated email pathways based on mobility score.',
    url: '', // TODO: add URL when live
  },
  {
    status: 'in-progress' as const,
    name: 'JetPackers AI',
    description: 'AI literacy workshops and resources for veterinary practices.',
    url: 'https://jetpackers.ai',
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-vet-bg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-dmsans font-medium text-xs tracking-widest uppercase text-vet-primary mb-3">
          Projects
        </p>
        <h2 className="font-playfair font-bold text-vet-text" style={{ fontSize: '2rem' }}>
          What we&apos;ve shipped
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="bg-vet-surface border border-vet-border rounded-2xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <StatusBadge status={p.status} />
              <p className="font-dmsans font-semibold text-vet-text mt-3">{p.name}</p>
              <p className="font-dmsans text-sm text-vet-muted mt-1 leading-relaxed">{p.description}</p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dmsans font-medium text-sm mt-auto pt-4 text-vet-primary hover:underline"
                >
                  View site →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
