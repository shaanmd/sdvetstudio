export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`
        bg-white border-[3px] border-store-dark rounded-md p-6
        shadow-[5px_5px_0_var(--tw-shadow-color)] shadow-store-dark
        transition-all duration-150
        hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--tw-shadow-color)] hover:shadow-store-dark
        ${className}
      `}
    >
      {children}
    </div>
  )
}
