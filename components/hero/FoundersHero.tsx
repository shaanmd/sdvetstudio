export function FoundersHero() {
  return (
    <section className="bg-vet-bg pt-32 pb-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h1
          className="font-playfair font-bold text-vet-text leading-tight"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
        >
          Software, apps, and things for screens.
        </h1>
        <p className="font-playfair italic text-vet-muted mt-4 text-lg max-w-lg mx-auto">
          Herding pixels instead of cats.
        </p>
        <p className="font-dmsans font-light text-vet-muted mt-4 max-w-md mx-auto leading-relaxed text-sm opacity-85">
          Custom AI builds and educational tools. Created by two veterinarians with a focus on functional, no-nonsense design and a fragment of fun.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 mt-7 px-8 py-3.5 rounded-xl font-dmsans font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: '#1A3A5C' }}
        >
          See what we&apos;ve built
        </a>
      </div>
    </section>
  )
}
