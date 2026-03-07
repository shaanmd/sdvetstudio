'use client'

export function Cow() {
  return (
    <div
      className="absolute bottom-0 animate-walk-right"
      style={{ animationDuration: '16s', animationDelay: '-9s' }}
    >
      <svg
        viewBox="0 0 120 82"
        className="block w-[120px] h-[82px]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <ellipse cx="52" cy="42" rx="34" ry="22" fill="white" stroke="#2A1208" strokeWidth="2.5" />
        <ellipse cx="42" cy="36" rx="10" ry="8" fill="#1A1208" />
        <ellipse cx="62" cy="48" rx="8" ry="6" fill="#1A1208" />
        <ellipse cx="30" cy="50" rx="6" ry="5" fill="#1A1208" />
        <rect x="74" y="20" width="18" height="28" rx="8" fill="white" stroke="#2A1208" strokeWidth="2.5" />
        <ellipse cx="98" cy="24" rx="16" ry="13" fill="white" stroke="#2A1208" strokeWidth="2.5" />
        <ellipse cx="111" cy="28" rx="8" ry="7" fill="#F4C0C0" stroke="#2A1208" strokeWidth="2" />
        <circle cx="109" cy="29" r="2" fill="#E08080" />
        <circle cx="114" cy="29" r="2" fill="#E08080" />
        <circle cx="95" cy="20" r="3.5" fill="#1A1208" />
        <circle cx="96" cy="19" r="1.2" fill="white" />
        <path d="M88,14 Q84,6 88,4" stroke="#D4A820" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M98,12 Q100,4 106,6" stroke="#D4A820" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="84" cy="20" rx="5" ry="8" fill="#F4C0C0" stroke="#2A1208" strokeWidth="2" transform="rotate(-15 84 20)" />
        <ellipse cx="46" cy="60" rx="10" ry="6" fill="#F4C0C0" stroke="#2A1208" strokeWidth="1.5" />
        <path d="M18,38 Q6,28 8,16" stroke="#C8C8C8" strokeWidth="4" fill="none" strokeLinecap="round" />
        <g className="animate-legs-front" style={{ transformOrigin: 'top center' }}>
          <rect x="68" y="58" width="9" height="22" rx="4.5" fill="white" stroke="#2A1208" strokeWidth="2" />
          <rect x="80" y="58" width="9" height="20" rx="4.5" fill="white" stroke="#2A1208" strokeWidth="2" />
        </g>
        <g className="animate-legs-back" style={{ transformOrigin: 'top center' }}>
          <rect x="24" y="58" width="9" height="22" rx="4.5" fill="white" stroke="#2A1208" strokeWidth="2" />
          <rect x="36" y="58" width="9" height="20" rx="4.5" fill="white" stroke="#2A1208" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}
