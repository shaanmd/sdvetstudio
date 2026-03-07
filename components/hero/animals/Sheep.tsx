'use client'

export function Sheep() {
  return (
    <div
      className="absolute bottom-1.5 animate-walk-right"
      style={{ animationDuration: '22s', animationDelay: '-12s' }}
    >
      <svg
        viewBox="0 0 100 68"
        className="block w-[100px] h-[68px]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="22" cy="36" r="14" fill="#F0EEE8" stroke="#2A1208" strokeWidth="2" />
        <circle cx="36" cy="30" r="16" fill="#F0EEE8" stroke="#2A1208" strokeWidth="2" />
        <circle cx="52" cy="30" r="16" fill="#F0EEE8" stroke="#2A1208" strokeWidth="2" />
        <circle cx="65" cy="36" r="13" fill="#F0EEE8" stroke="#2A1208" strokeWidth="2" />
        <circle cx="36" cy="42" r="12" fill="#F0EEE8" stroke="#2A1208" strokeWidth="2" />
        <circle cx="52" cy="42" r="12" fill="#F0EEE8" stroke="#2A1208" strokeWidth="2" />
        <ellipse cx="80" cy="30" rx="13" ry="12" fill="#3A2A1A" stroke="#2A1208" strokeWidth="2" />
        <ellipse cx="88" cy="34" rx="7" ry="5" fill="#5A4030" stroke="#2A1208" strokeWidth="1.5" />
        <ellipse cx="87" cy="34" rx="2" ry="1.5" fill="#2A1208" />
        <ellipse cx="91" cy="34" rx="2" ry="1.5" fill="#2A1208" />
        <circle cx="78" cy="27" r="3" fill="#F5C42C" />
        <circle cx="78" cy="27" r="1.5" fill="#1A1208" />
        <circle cx="78.5" cy="26.5" r="0.7" fill="white" />
        <ellipse cx="70" cy="24" rx="5" ry="8" fill="#3A2A1A" stroke="#2A1208" strokeWidth="1.5" transform="rotate(-20 70 24)" />
        <g className="animate-legs-front" style={{ transformOrigin: 'top center' }}>
          <rect x="58" y="49" width="6" height="18" rx="3" fill="#3A2A1A" stroke="#2A1208" strokeWidth="1.5" />
          <rect x="66" y="49" width="6" height="16" rx="3" fill="#3A2A1A" stroke="#2A1208" strokeWidth="1.5" />
        </g>
        <g className="animate-legs-back" style={{ transformOrigin: 'top center' }}>
          <rect x="24" y="49" width="6" height="18" rx="3" fill="#3A2A1A" stroke="#2A1208" strokeWidth="1.5" />
          <rect x="32" y="49" width="6" height="16" rx="3" fill="#3A2A1A" stroke="#2A1208" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  )
}
