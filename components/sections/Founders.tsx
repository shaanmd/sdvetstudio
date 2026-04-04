'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SocialPill } from '@/components/ui/SocialPill'

const founders = [
  {
    name: 'Dr Shaan Mocke',
    photo: '/images/shaan.jpg',
    initials: 'SM',
    bio: 'Shaan was a web designer and teacher of coding in a previous life. Now she\u2019s an avid AI user (as well as a vet!) who can whip up cool apps in a blink.',
    linkedin: '#', // TODO: replace with real URL
  },
  {
    name: 'Dr Deb Prattley',
    photo: '/images/deb.jpg',
    initials: 'DP',
    bio: 'Deb (also a vet) learned coding basics at the turn of the century and is more tech friendly than tech pro, but she tries out all the tools to find out just how much a normal person can do.',
    linkedin: '#', // TODO: replace with real URL
  },
]

function Avatar({ photo, initials, name }: { photo: string; initials: string; name: string }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 border-2 font-dmsans font-semibold text-xl"
        style={{ backgroundColor: '#E8C49A', borderColor: '#2E6B5E', color: '#1C2B28' }}
      >
        {initials}
      </div>
    )
  }

  return (
    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2" style={{ borderColor: '#D8E6E3' }}>
      <Image
        src={photo}
        alt={name}
        width={80}
        height={80}
        className="object-cover w-full h-full"
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export function Founders() {
  return (
    <section id="about" className="bg-vet-surface py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-dmsans font-medium text-xs tracking-widest uppercase text-vet-primary mb-3">
          The founders
        </p>
        <h2 className="font-playfair font-bold text-vet-text" style={{ fontSize: '2rem' }}>
          Who we are
        </h2>
        <p className="font-dmsans text-vet-muted text-sm mt-2 max-w-lg">
          Two vets who have fun creating personalised solutions using the latest tech tools.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              className="bg-vet-bg border border-vet-border rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Avatar photo={f.photo} initials={f.initials} name={f.name} />
              <p className="font-dmsans font-semibold text-vet-text mt-4">{f.name}</p>
              <p className="font-dmsans text-sm text-vet-text mt-3 leading-7">{f.bio}</p>
              <div className="mt-5">
                <SocialPill href={f.linkedin} label="LinkedIn" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
