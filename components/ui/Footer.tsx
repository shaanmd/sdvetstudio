export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D2035', color: 'rgba(255,255,255,0.4)' }} className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-playfair text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            SD VetStudio
          </span>

          <nav className="flex items-center gap-6">
            <a href="#projects" className="font-dmsans text-sm transition hover:text-white">Projects</a>
            <a href="#about" className="font-dmsans text-sm transition hover:text-white">About</a>
            <a href="#contact" className="font-dmsans text-sm transition hover:text-white">Contact</a>
            <a
              href="https://synaipse.vet"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dmsans text-sm transition hover:text-white"
            >
              ↗ Shaan
            </a>
            <a
              href="https://jetpackersai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dmsans text-sm transition hover:text-white"
            >
              ↗ Deb
            </a>
          </nav>

          <div className="flex items-center gap-4 text-xs font-dmsans">
            <span>© 2026 SD VetStudio</span>
            <a
              href="/cat-herding.html"
              className="transition hover:text-white"
              style={{ color: 'rgba(255,255,255,0.12)' }}
            >
              Tired of herding cats? →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
