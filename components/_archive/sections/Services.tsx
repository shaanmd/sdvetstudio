import { Card } from '@/components/ui/Card'

const SERVICES = [
  {
    icon: '🌐',
    title: 'WEBSITE BUILDS',
    body: 'Built in Lovable. Briefed properly, built precisely, handed over completely. You leave owning every bit of it.',
  },
  {
    icon: '⚙️',
    title: 'WEB APP BUILDS',
    body: 'Custom tools for your practice. From rehab programs to internal knowledge systems. If you can dream it, we can build it.',
  },
  {
    icon: '✏️',
    title: 'CONTENT + DESIGN',
    body: 'Copy, graphics, and brand assets that match who you actually are. No generic templates. No stock photo of a handshake.',
  },
  {
    icon: '🔄',
    title: 'MAINTENANCE RETAINER',
    body: 'Monthly support so your site stays current and working — without you having to think about it.',
  },
]

export function Services() {
  return (
    <div className="max-w-[1100px] mx-auto py-12 px-[8%] pb-[70px] md:py-[50px]" id="services">
      <div className="font-luckiest text-[0.7rem] tracking-[0.25em] uppercase text-store-coral mb-3">
        What we build
      </div>
      <h2 className="font-luckiest text-[clamp(1.8rem,4vw,2.8rem)] text-store-dark tracking-wide mb-3">
        THE FULL <span className="text-store-blue">MENU</span>
      </h2>
      <p className="text-base text-[#3A3020] leading-7 max-w-[540px] mb-10 font-semibold">
        AI-assisted builds. Clean handovers. No tech overwhelm. No agency price tag.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {SERVICES.map((s, i) => (
          <Card key={i}>
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-luckiest text-lg tracking-wide text-store-dark mb-2">
              <span className="text-store-blue">{s.title.split(' ')[0]}</span> {s.title.split(' ').slice(1).join(' ')}
            </h3>
            <p className="text-sm text-[#5A5040] leading-relaxed font-semibold">{s.body}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
