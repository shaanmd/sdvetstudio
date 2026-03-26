export function Pavement({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-pavement border-t-[5px] border-store-dark relative h-[110px] overflow-hidden flex-shrink-0">
      <div className="absolute top-0 left-0 right-0 h-2 bg-pavement-dark" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent 0px, transparent 119px, rgba(0,0,0,0.08) 119px, rgba(0,0,0,0.08) 122px)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
