import { Nav } from '@/components/nav/Nav'
import { FoundersHero } from '@/components/hero/FoundersHero'
import { Problem } from '@/components/sections/Problem'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { Projects } from '@/components/sections/Projects'
import { Updates } from '@/components/sections/Updates'
import { Founders } from '@/components/sections/Founders'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/ui/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SD VetStudio',
  url: 'https://sdvetstudio.com',
  description:
    'Custom AI builds and educational tools. Created by two veterinarians with a focus on functional, no-nonsense design and a fragment of fun.',
  founder: [
    { '@type': 'Person', name: 'Dr Shaan Mocke' },
    { '@type': 'Person', name: 'Dr Deb Prattley' },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <FoundersHero />
        <Problem />
        <WhatWeDo />
        <Projects />
        <Updates />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
