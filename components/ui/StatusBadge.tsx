type Status = 'live' | 'beta' | 'in-progress'

const styles: Record<Status, { bg: string; color: string; label: string }> = {
  live: { bg: '#EAF5F2', color: '#2E6B5E', label: 'LIVE' },
  beta: { bg: '#FEF3E2', color: '#B06000', label: 'BETA' },
  'in-progress': { bg: '#FEF3E2', color: '#B06000', label: 'IN PROGRESS' },
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
