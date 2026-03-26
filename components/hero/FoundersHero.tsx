'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SocialPill } from '@/components/ui/SocialPill'

const founders = [
  {
    name: 'Dr Shaan Mocke',
    role: 'Vet · Builder',
    photo: '/images/shaan.jpg',
    initials: 'SM',
    linkedin: '#', // TODO: replace with real URL
  },
  {
    name: 'Dr Deb Prattley',
    role: 'Vet · Rehab · Co-founder SynAIpse',
    photo: '/images/deb.jpg',
    initials: 'DP',
    linkedin: '#', // TODO: replace with real URL
  },
]

function Avatar({ photo, initials, name }: { photo: string; initials: string; name: string }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-2 font-dmsans font-semibold text-lg"
        style={{ backgroundColor: '#E8C49A', borderColor: '#2E6B5E', color: '#1C2B28' }}
      >
        {initials}
      </div>
    )
  }

  return (
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2" style={{ borderColor: '#D8E6E3' }}>
      <Image
        src={photo}
        alt={name}
        width={64}
        height={64}
        className="object-cover w-full h-full"
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export function FoundersHero() {
  return (
    <section className="bg-vet-bg pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-dmsans font-medium text-xs tracking-widest uppercase text-vet-primary mb-4">
          SD VetStudio
        </p>
        <h1
          className="font-playfair font-bold text-vet-text leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Two veterinarians.<br />Building things.
        </h1>
        <p className="font-dmsans text-vet-muted mt-4 max-w-xl leading-relaxed">
          AI education, clinical tools, and web apps for the veterinary world.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {founders.map((f) => (
            <div
              key={f.name}
              className="bg-vet-surface border border-vet-border rounded-2xl p-6 flex items-start gap-4"
            >
              <Avatar photo={f.photo} initials={f.initials} name={f.name} />
              <div>
                <p className="font-dmsans font-semibold text-vet-text">{f.name}</p>
                <p className="font-dmsans text-sm text-vet-muted mt-0.5">{f.role}</p>
                <div className="mt-3">
                  <SocialPill href={f.linkedin} label="LinkedIn" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
