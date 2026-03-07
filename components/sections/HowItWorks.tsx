const STEPS = [
  { num: '01', title: 'BRIEF', body: 'Fill out our intake form. We scope the project together and agree in writing before anything starts.' },
  { num: '02', title: 'BUILD', body: 'We build it. Updates at each milestone. Revision rounds defined upfront. No scope creep. No nasty surprises.' },
  { num: '03', title: 'HANDOVER', body: 'You own it outright. We walk you through it. You leave with everything you need to manage it yourself.' },
]

export function HowItWorks() {
  return (
    <div className="max-w-[1100px] mx-auto py-[70px] px-[8%]" id="how">
      <div className="font-luckiest text-[0.7rem] tracking-[0.25em] uppercase text-store-coral mb-3">
        Process
      </div>
      <h2 className="font-luckiest text-[clamp(1.8rem,4vw,2.8rem)] text-store-dark tracking-wide mb-3">
        THREE STEPS. <span className="text-store-blue">NO SURPRISES.</span>
      </h2>
      <p className="text-base text-[#3A3020] leading-7 max-w-[540px] mb-10 font-semibold">
        Scope agreed upfront. Revisions structured. Ownership yours on final payment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div
          className="hidden md:block absolute top-9 left-[17%] right-[17%] text-2xl text-store-gold tracking-widest text-center pointer-events-none"
          aria-hidden
        >
          ···············································
        </div>
        {STEPS.map((s, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-store-dark rounded-md p-6 text-center shadow-[5px_5px_0_var(--tw-shadow-color)] shadow-store-dark"
          >
            <div className="w-14 h-14 bg-store-blue border-[3px] border-store-dark rounded-full flex items-center justify-center mx-auto mb-4 font-luckiest text-2xl text-store-cream shadow-[3px_3px_0_#1A1208]">
              {s.num}
            </div>
            <h3 className="font-luckiest text-lg text-store-dark tracking-wide mb-2">{s.title}</h3>
            <p className="text-sm text-[#5A5040] leading-relaxed font-semibold">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
