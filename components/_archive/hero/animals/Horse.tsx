'use client'

export function Horse() {
  return (
    <div
      className="absolute bottom-0 animate-walk-left"
      style={{ animationDuration: '11s', animationDelay: '-5s' }}
    >
      <svg
        viewBox="0 0 130 90"
        className="block w-[130px] h-[90px] scale-x-[-1]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="15" y="28" width="70" height="34" rx="14" fill="#8B4513" stroke="#2A1208" strokeWidth="2.5" />
        <rect x="76" y="14" width="22" height="36" rx="10" fill="#8B4513" stroke="#2A1208" strokeWidth="2.5" />
        <ellipse cx="100" cy="18" rx="18" ry="13" fill="#8B4513" stroke="#2A1208" strokeWidth="2.5" />
        <ellipse cx="115" cy="22" rx="9" ry="7" fill="#A0623A" stroke="#2A1208" strokeWidth="2" />
        <ellipse cx="117" cy="23" rx="2.5" ry="2" fill="#6A3818" />
        <circle cx="97" cy="14" r="4" fill="#1A1208" />
        <circle cx="98" cy="13" r="1.5" fill="white" />
        <polygon points="87,6 91,0 96,8" fill="#8B4513" stroke="#2A1208" strokeWidth="2" />
        <path d="M88,8 Q82,16 80,26 Q78,34 80,42" stroke="#5A2A08" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M88,8 Q82,16 80,26 Q78,34 80,42" stroke="#3A1A04" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M15,38 Q2,30 4,16 Q6,8 2,4" stroke="#5A2A08" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M15,38 Q2,30 4,16 Q6,8 2,4" stroke="#3A1A04" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <g className="animate-legs-front" style={{ transformOrigin: 'top center' }}>
          <rect x="72" y="56" width="10" height="32" rx="5" fill="#8B4513" stroke="#2A1208" strokeWidth="2" />
          <rect x="84" y="56" width="10" height="28" rx="5" fill="#8B4513" stroke="#2A1208" strokeWidth="2" />
        </g>
        <g className="animate-legs-back" style={{ transformOrigin: 'top center' }}>
          <rect x="20" y="56" width="10" height="32" rx="5" fill="#8B4513" stroke="#2A1208" strokeWidth="2" />
          <rect x="32" y="56" width="10" height="28" rx="5" fill="#8B4513" stroke="#2A1208" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}
