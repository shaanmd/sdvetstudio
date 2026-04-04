export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C2B28', color: '#7A9490' }} className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-dmsans text-sm">© 2026 SD VetStudio</p>

          <nav className="flex items-center gap-6">
            <a href="#projects" className="font-dmsans text-sm transition hover:text-white">Projects</a>
            <a href="#about" className="font-dmsans text-sm transition hover:text-white">About</a>
            <a href="#contact" className="font-dmsans text-sm transition hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://synaipseVet.com"
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
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center text-xs font-dmsans flex items-center justify-center gap-4"
          style={{ borderTop: '1px solid #2E3D3A' }}
        >
          <span>© 2026 SD VetStudio</span>
          <a
            href="/cat-herding.html"
            className="transition hover:text-white opacity-30 hover:opacity-100"
            title=""
          >
            Tired of herding cats? →
          </a>
        </div>
      </div>
    </footer>
  )
}
