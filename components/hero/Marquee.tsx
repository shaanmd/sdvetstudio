const MARQUEE_ITEMS = [
  'WEBSITES',
  '◆',
  'WEB APPS',
  '◆',
  'CONTENT & DESIGN',
  '◆',
  'AI EDUCATION',
  '◆',
  'MAINTENANCE',
  '◆',
  'NO JARGON',
  '◆',
  'BUILT BY VETS',
  '◆',
]

export function Marquee() {
  const content = (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span
          key={i}
          className={
            item === '◆'
              ? 'text-store-coral pl-0 pr-0'
              : 'font-luckiest text-[0.85rem] text-store-yellow tracking-[0.08em] px-8'
          }
        >
          {item}
        </span>
      ))}
    </>
  )
  return (
    <div className="bg-store-dark border-b-[3px] border-t-[3px] border-store-gold overflow-hidden whitespace-nowrap py-1.5">
      <div className="inline-block animate-marquee">
        {content}
        {content}
      </div>
    </div>
  )
}
