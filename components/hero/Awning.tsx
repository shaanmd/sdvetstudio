export function Awning() {
  return (
    <div className="relative h-[50px] bg-store-coral flex items-end border-t-4 border-[#B83028] overflow-visible">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: `repeating-linear-gradient(90deg, transparent 0px, transparent 28px, rgba(255,255,255,0.18) 28px, rgba(255,255,255,0.18) 36px)`,
        }}
      />
      <div className="absolute bottom-[-22px] left-0 right-0 flex z-[5]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-[22px] bg-store-coral rounded-b-[50%] border-b-[3px] border-[#B83028] min-w-0"
          />
        ))}
      </div>
    </div>
  )
}
