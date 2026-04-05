type Status = 'live' | 'beta' | 'in-progress'

const styles: Record<Status, { bg: string; color: string; label: string }> = {
  live: { bg: '#d4f0ee', color: '#1A3A5C', label: 'LIVE' },
  beta: { bg: '#FEF3E2', color: '#B06000', label: 'BETA' },
  'in-progress': { bg: '#F3F0FF', color: '#6B4DFF', label: 'IN PROGRESS' },
}

export function StatusBadge({ status }: { status: Status }) {
  const s = styles[status]
  return (
    <span
      style={{ backgroundColor: s.bg, color: s.color }}
      className="inline-block font-dmsans font-medium text-xs tracking-widest uppercase rounded-full px-3 py-1"
    >
      {s.label}
    </span>
  )
}
