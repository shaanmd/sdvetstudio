import { Nav } from '@/components/nav/Nav'
import { FoundersHero } from '@/components/hero/FoundersHero'
import { Updates } from '@/components/sections/Updates'
import { Projects } from '@/components/sections/Projects'
import { Founders } from '@/components/sections/Founders'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <FoundersHero />
        <Updates />
        <Projects />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
