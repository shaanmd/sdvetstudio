'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { StatusBadge } from '@/components/ui/StatusBadge'

const projects = [
  {
    status: 'live' as const,
    name: 'SynAIpseVet',
    image: '/images/projects/synaipse.jpg',
    description: 'AI education for practising vets. We can show you the ropes so you can make your own stuff, or we can build things for you. We still see furry patients too, so we\u2019ll easily understand what you need.',
    url: 'https://synaipse.vet',
  },
  {
    status: 'live' as const,
    name: 'Jetpackers AI',
    image: '/images/projects/jetpackers.jpg',
    description: 'AI literacy for Gen X women who want to make their lives easier and keep up with the latest tech, in non-techie terms. (Why Jetpackers? Because when we were kids they promised the 2000s would bring jetpacks. Can\u2019t see any of those flying about, but we\u2019ve got AI and we\u2019ll make the most of it.)',
    url: 'https://jetpackersai.com',
  },
  {
    status: 'beta' as const,
    name: 'CCL Rehab App',
    image: '',
    description: '12-week post-cruciate recovery for optimal client support.',
    url: '',
  },
  {
    status: 'beta' as const,
    name: '6-Week Senior Dog Mobility Programme',
    image: '/images/projects/senior-dog.jpg',
    description: 'Empowering clinics and clients to create a better life for our golden oldies.',
    url: '',
  },
  {
    status: 'in-progress' as const,
    name: 'Vet Scribe',
    image: '/images/projects/vet-scribe.jpg',
    description: 'AI-assisted consultation notes so clinicians can focus on the animal in front of them, not the keyboard.',
    url: '',
  },
  {
    status: 'in-progress' as const,
    name: 'Vet Flow',
    image: '/images/projects/vet-flow.jpg',
    description: 'Streamlined AI powered workflow and knowledge management for vet practices, less admin.',
    url: '',
  },
  {
    status: 'in-progress' as const,
    name: 'Vet Route',
    image: '/images/projects/vet-route.jpg',
    description: 'Smart scheduling and route planning for mobile and farm vets.',
    url: '',
  },
  {
    status: 'live' as const,
    name: 'The Bark Run Project',
    image: '/images/projects/the-bark-run-project.jpg',
    description: 'Dog friendly trails, cafes and services in South East Queensland, Australia.',
    url: 'https://thebarkrun.com',
  },
  {
    status: 'in-progress' as const,
    name: 'Colour My Pony',
    image: '/images/projects/colour-my-pony.jpg',
    description: 'An interactive colouring tool for horse lovers of all ages. Part fun, part educational.',
    url: '',
  },
  {
    status: 'in-progress' as const,
    name: 'Behind the Bit',
    image: '/images/projects/behind-the-bit.jpg',
    description: 'Equine bitting resources and tools for riders, vets, and coaches.',
    url: '',
  },
  {
    status: 'in-progress' as const,
    name: 'Sooper Dooper Project Prioritizer',
    image: '/images/projects/sooper-dooper-project-prioritizer.jpg',
    description: 'Cut through the noise and work out what to actually do first. Built at an international AI hackathon, March 2026.',
    url: '',
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-vet-bg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-dmsans font-medium text-xs tracking-widest uppercase text-vet-primary mb-3">
          What we&apos;ve created
        </p>
        <h2 className="font-playfair font-bold text-vet-text" style={{ fontSize: '2rem' }}>
          Projects
        </h2>
        <p className="font-dmsans text-vet-muted text-sm mt-2">
          A mix of vet tools, AI education, and things that we needed to exist.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="bg-vet-surface border border-vet-border rounded-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {p.image && (
                <div className="relative w-full h-64">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <StatusBadge status={p.status} />
                <p className="font-dmsans font-semibold text-vet-text mt-3">{p.name}</p>
                {p.description && (
                  <p className="font-dmsans text-sm text-vet-muted mt-1 leading-relaxed">{p.description}</p>
                )}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
