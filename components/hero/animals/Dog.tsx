'use client'

export function Dog() {
  return (
    <div
      className="absolute bottom-1.5 animate-walk-left"
      style={{ animationDuration: '14s', animationDelay: '-7s' }}
    >
      <svg
        viewBox="0 0 95 72"
        className="block w-[95px] h-[72px] scale-x-[-1]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="10" y="30" width="55" height="28" rx="12" fill="#A0724A" stroke="#2A1208" strokeWidth="2.5" />
        <ellipse cx="73" cy="28" rx="16" ry="14" fill="#A0724A" stroke="#2A1208" strokeWidth="2.5" />
        <ellipse cx="60" cy="28" rx="7" ry="12" fill="#7A5230" stroke="#2A1208" strokeWidth="2" transform="rotate(-10 60 28)" />
        <ellipse cx="82" cy="25" rx="7" ry="11" fill="#7A5230" stroke="#2A1208" strokeWidth="2" transform="rotate(10 82 25)" />
        <ellipse cx="85" cy="32" rx="8" ry="6" fill="#C09070" stroke="#2A1208" strokeWidth="2" />
        <ellipse cx="86" cy="30" rx="3.5" ry="2.5" fill="#2A1208" />
        <circle cx="74" cy="23" r="3.5" fill="#1A1208" />
        <circle cx="75" cy="22" r="1.2" fill="white" />
        <path d="M10,35 Q-5,22 2,10" stroke="#A0724A" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M10,35 Q-5,22 2,10" stroke="#7A5230" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="62" y="36" width="22" height="6" rx="3" fill="#E8504A" stroke="#2A1208" strokeWidth="1.5" />
        <g className="animate-legs-front" style={{ transformOrigin: 'top center' }}>
          <rect x="48" y="54" width="8" height="18" rx="4" fill="#A0724A" stroke="#2A1208" strokeWidth="2" />
          <rect x="58" y="54" width="8" height="16" rx="4" fill="#A0724A" stroke="#2A1208" strokeWidth="2" />
        </g>
        <g className="animate-legs-back" style={{ transformOrigin: 'top center' }}>
          <rect x="12" y="54" width="8" height="18" rx="4" fill="#A0724A" stroke="#2A1208" strokeWidth="2" />
          <rect x="22" y="54" width="8" height="16" rx="4" fill="#A0724A" stroke="#2A1208" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}
