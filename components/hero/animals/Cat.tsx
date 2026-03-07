'use client'

export function Cat() {
  return (
    <div
      className="absolute bottom-2 animate-walk-right"
      style={{ animationDuration: '18s', animationDelay: '-3s' }}
    >
      <svg
        viewBox="0 0 85 70"
        className="block w-[85px] h-[70px]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <ellipse cx="36" cy="44" rx="22" ry="13" fill="#E8864A" stroke="#2A1208" strokeWidth="2.5" />
        <circle cx="62" cy="32" r="14" fill="#E8864A" stroke="#2A1208" strokeWidth="2.5" />
        <polygon points="51,22 56,12 63,22" fill="#E8864A" stroke="#2A1208" strokeWidth="2" />
        <polygon points="63,22 70,12 75,22" fill="#E8864A" stroke="#2A1208" strokeWidth="2" />
        <polygon points="53,21 57,14 62,21" fill="#F4A8A8" />
        <polygon points="64,21 70,14 73,21" fill="#F4A8A8" />
        <path d="M14,42 Q2,26 10,15" stroke="#C06030" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M14,42 Q2,26 10,15" stroke="#C06030" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <circle cx="65" cy="30" r="3" fill="#1A1208" />
        <circle cx="66" cy="29" r="1" fill="white" />
        <ellipse cx="68" cy="35" rx="2" ry="1.5" fill="#F08080" />
        <line x1="28" y1="38" x2="26" y2="50" stroke="#C06030" strokeWidth="2" />
        <line x1="36" y1="36" x2="35" y2="50" stroke="#C06030" strokeWidth="2" />
        <g className="animate-legs-front" style={{ transformOrigin: 'top center' }}>
          <rect x="50" y="53" width="7" height="16" rx="3.5" fill="#E8864A" stroke="#2A1208" strokeWidth="2" />
          <rect x="60" y="53" width="7" height="14" rx="3.5" fill="#E8864A" stroke="#2A1208" strokeWidth="2" />
        </g>
        <g className="animate-legs-back" style={{ transformOrigin: 'top center' }}>
          <rect x="22" y="53" width="7" height="16" rx="3.5" fill="#E8864A" stroke="#2A1208" strokeWidth="2" />
          <rect x="32" y="53" width="7" height="14" rx="3.5" fill="#E8864A" stroke="#2A1208" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}
