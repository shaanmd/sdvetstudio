import { Shopfront } from '@/components/hero/Shopfront'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Portfolio } from '@/components/sections/Portfolio'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Shopfront />

      <div className="bg-store-cream relative">
        <div
          className="h-8 bg-store-cream relative overflow-hidden"
          aria-hidden
        >
          <div
            className="absolute -top-8 -left-2 -right-2 h-16"
            style={{
              background: 'radial-gradient(circle at 50% 100%, transparent 14px, #FFF8E8 15px)',
              backgroundSize: '40px 30px',
              backgroundRepeat: 'repeat-x',
            }}
          />
        </div>

        <Services />
      </div>

      <div className="bg-[#F0E8D4]">
        <HowItWorks />
      </div>

      <div className="bg-store-cream">
        <Portfolio />
      </div>

      <div className="bg-[#F0E8D4]">
        <About />
      </div>

      <div className="bg-store-cream">
        <Contact />
      </div>

      <Footer />
    </>
  )
}
