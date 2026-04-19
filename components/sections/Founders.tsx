'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SocialPill } from '@/components/ui/SocialPill'

const founders = [
  {
    name: 'Dr Shaan Mocke',
    photo: '/shaan.jpg',
    initials: 'SM',
    bio: 'Shaan spent nearly 15 years in tech before becoming a vet: teaching people to code, a decade as a web applications analyst in enterprise and corporate, and building websites along the way. Now she brings all of that to AI.',
    linkedin: 'https://www.linkedin.com/in/shaanmocke/',
  },
  {
    name: 'Dr Deb Prattley',
    photo: '/deb.jpg',
    initials: 'DP',
    bio: 'Deb (also a vet) learned coding basics at the turn of the century and is more tech friendly than tech pro, but she tries out all the tools to find out just how much a normal person can do.',
    linkedin: 'https://www.linkedin.com/in/debbieprattley/',
  },
]

function Avatar({ photo, initials, name }: { photo: string; initials: string; name: string }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div
        className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full flex items-center justify-center flex-shrink-0 border-3 font-dmsans font-semibold text-2xl"
        style={{ backgroundColor: '#C0DDD6', borderColor: '#1A3A5C', color: '#0D2035' }}
      >
        {initials}
      </div>
    )
  }

  return (
    <div
      className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden flex-shrink-0 border-3"
      style={{ borderColor: '#C0DDD6' }}
    >
      <Image
        src={photo}
        alt={name}
        width={180}
        height={180}
        className="object-cover object-[center_20%] w-full h-full"
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export function Founders() {
  return (
    <section id="about" className="bg-vet-bg py-20 px-6">
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
              className="bg-vet-surface border border-vet-border rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex-1">
                <p className="font-playfair font-bold text-vet-text text-lg">{f.name}</p>
                <p className="font-dmsans text-sm text-vet-muted mt-3 leading-7">{f.bio}</p>
                <div className="mt-5">
                  <SocialPill href={f.linkedin} label="LinkedIn" />
                </div>
              </div>
              <Avatar photo={f.photo} initials={f.initials} name={f.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
