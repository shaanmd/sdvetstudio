const PROJECTS = [
  {
    tag: 'LIVE',
    title: 'SynAIpse',
    desc: 'AI education platform for veterinary professionals. Nine practical themes, free content, built by and for practising vets.',
    tech: ['Next.js', 'Vercel', 'Tailwind'],
    href: 'https://synaipse.vet',
  },
  {
    tag: 'LIVE · BETA',
    title: 'CCL Rehab App',
    desc: '12-week evidence-based recovery program for dogs post cruciate surgery. Built with real patients, used daily in clinic.',
    tech: ['React', 'Supabase', 'Vercel'],
    href: 'https://ccl.vetalign.com.au',
  },
  {
    tag: 'LIVE',
    title: 'Senior Dog Mobility',
    desc: 'Lead generation tool with three automated email pathways based on assessment outcome. Resend integration.',
    tech: ['React', 'Resend', 'Vercel'],
    href: undefined,
  },
]

export function Portfolio() {
  return (
    <div className="max-w-[1100px] mx-auto py-[70px] px-[8%]" id="portfolio">
      <div className="font-luckiest text-[0.7rem] tracking-[0.25em] uppercase text-store-coral mb-3">
        Our work
      </div>
      <h2 className="font-luckiest text-[clamp(1.8rem,4vw,2.8rem)] text-store-dark tracking-wide mb-3">
        WHAT WE&apos;VE <span className="text-store-blue">SHIPPED</span>
      </h2>
      <p className="text-base text-[#3A3020] leading-7 max-w-[540px] mb-10 font-semibold">
        Our own platforms are our first case studies. If we wouldn&apos;t use it ourselves, we won&apos;t build it for you.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-store-dark rounded-md p-6 shadow-[5px_5px_0_var(--tw-shadow-color)] shadow-store-dark transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--tw-shadow-color)] hover:shadow-store-dark"
          >
            <div className="inline-flex items-center gap-1.5 bg-store-mint border-2 border-store-dark rounded-full py-0.5 px-2.5 font-luckiest text-[0.6rem] tracking-widest text-store-dark mb-3">
              <span className="w-1.5 h-1.5 bg-store-dark rounded-full" />
              {p.tag}
            </div>
            <h3 className="font-luckiest text-[1.05rem] tracking-wide text-store-dark mb-1">{p.title}</h3>
            <p className="text-sm text-[#5A5040] leading-relaxed font-semibold mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  className="bg-store-blue text-store-cream font-nunito text-[0.65rem] font-extrabold py-0.5 px-2 rounded tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-luckiest text-xs text-store-blue no-underline tracking-wide inline-flex items-center gap-1 hover:gap-2 transition-[gap]"
              >
                VIEW SITE →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
