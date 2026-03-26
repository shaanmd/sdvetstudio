export function SocialPill({ href, label }: { href: string; label: string }) {
  const isDisabled = !href || href === '#'

  if (isDisabled) {
    return (
      <span
        className="inline-block font-dmsans font-medium text-sm rounded-full px-3 py-1 border opacity-40 cursor-not-allowed"
        style={{ backgroundColor: '#EAF5F2', color: '#2E6B5E', borderColor: '#D8E6E3' }}
      >
        {label}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-dmsans font-medium text-sm rounded-full px-3 py-1 border transition-colors hover:bg-vet-border"
      style={{ backgroundColor: '#EAF5F2', color: '#2E6B5E', borderColor: '#D8E6E3' }}
    >
      {label}
    </a>
  )
}
