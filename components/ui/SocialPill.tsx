export function SocialPill({ href, label }: { href: string; label: string }) {
  const isDisabled = !href || href === '#'

  if (isDisabled) {
    return (
      <span
        className="inline-block font-dmsans font-medium text-sm rounded-full px-3 py-1 border opacity-40 cursor-not-allowed"
        style={{ backgroundColor: '#E8F4F0', color: '#1A3A5C', borderColor: '#C0DDD6' }}
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
      style={{ backgroundColor: '#E8F4F0', color: '#1A3A5C', borderColor: '#C0DDD6' }}
    >
      {label}
    </a>
  )
}
