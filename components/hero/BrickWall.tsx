export function BrickWall({ side }: { side: 'left' | 'right' }) {
  return (
    <div
      className={`
        flex-1 min-h-[400px] relative
        bg-brick-red
        [background-image:repeating-linear-gradient(0deg,transparent,transparent_28px,rgba(0,0,0,0.15)_28px,rgba(0,0,0,0.15)_30px),repeating-linear-gradient(90deg,transparent,transparent_58px,rgba(0,0,0,0.1)_58px,rgba(0,0,0,0.12)_60px)]
        ${side === 'left' ? 'bg-[position:0_0]' : 'bg-[position:29px_0]'}
      `}
    >
      <div
        className="absolute inset-0 brick-mortar"
        aria-hidden
      />
    </div>
  )
}
