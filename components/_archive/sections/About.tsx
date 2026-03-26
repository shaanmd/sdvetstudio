export function About() {
  return (
    <div className="max-w-[1100px] mx-auto py-[70px] px-[8%]" id="about">
      <div className="font-luckiest text-[0.7rem] tracking-[0.25em] uppercase text-store-coral mb-3">
        Who we are
      </div>
      <h2 className="font-luckiest text-[clamp(1.8rem,4vw,2.8rem)] text-store-dark tracking-wide mb-3">
        TWO VETS. <span className="text-store-blue">TWO SKILL SETS.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-start">
        <div className="about-text">
          <p className="text-base text-[#3A3020] leading-8 font-semibold mb-4">
            SD Vet Studio is run by <strong className="text-store-blue">Dr Shaan Mocke</strong> and{' '}
            <strong className="text-store-blue">Dr Deb Prattley</strong> — both practising veterinarians who also happen to build things.
          </p>
          <p className="text-base text-[#3A3020] leading-8 font-semibold mb-4">
            Shaan brings fifteen years of web building and a background in knowledge management at a top commercial law firm. Deb brings deep rehabilitation expertise and a full practice of real clients to test on.
          </p>
          <p className="text-base text-[#3A3020] leading-8 font-semibold mb-4">
            Between us, we have the clinical depth and the technical range to build things that actually work in a veterinary context — and hold up beyond the handover.
          </p>
        </div>
        <div>
          <div className="bg-white border-[3px] border-store-dark rounded-md py-5 px-6 shadow-[4px_4px_0_#1A1208] mb-4">
            <div className="font-luckiest text-base tracking-wide text-store-dark mb-1">Dr Shaan Mocke</div>
            <div className="text-sm text-[#6A6050] leading-6 font-semibold">
              Veterinarian · Web builder · 15yr build history · Knowledge management · Vet Align · Pet Align
            </div>
          </div>
          <div className="bg-white border-[3px] border-store-dark rounded-md py-5 px-6 shadow-[4px_4px_0_#1A1208] mb-4">
            <div className="font-luckiest text-base tracking-wide text-store-dark mb-1">Dr Deb Prattley</div>
            <div className="text-sm text-[#6A6050] leading-6 font-semibold">
              Veterinarian · Rehabilitation specialist · SynAIpse co-founder · NZVA AI committee
            </div>
          </div>
          <div className="bg-white border-[3px] border-store-dark rounded-md py-5 px-6 shadow-[4px_4px_0_#1A1208] mb-4">
            <div className="font-luckiest text-base tracking-wide text-store-dark mb-1">Also behind SynAIpse</div>
            <div className="text-sm text-[#6A6050] leading-6 font-semibold">
              AI education for veterinary professionals — synaipse.vet
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
