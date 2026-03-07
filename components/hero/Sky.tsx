export function Sky() {
  return (
    <div className="w-full h-[60px] bg-gradient-to-b from-[#C8DCF0] to-[#D8E8F4] relative flex-shrink-0">
      <div
        className="absolute w-20 h-[22px] top-3 left-[10%] bg-white rounded-[50px] opacity-85 animate-cloud-drift"
        style={{ animationDuration: '40s', animationDelay: '-10s' }}
      >
        <div className="absolute w-[34px] h-[34px] -top-4 left-3 bg-white rounded-full" />
        <div className="absolute w-[26px] h-[26px] -top-3 left-9 bg-white rounded-full" />
      </div>
      <div
        className="absolute w-[60px] h-[18px] top-5 left-[40%] bg-white rounded-[50px] opacity-85 animate-cloud-drift"
        style={{ animationDuration: '55s', animationDelay: '-25s' }}
      >
        <div className="absolute w-[26px] h-[26px] -top-3 left-2.5 bg-white rounded-full" />
        <div className="absolute w-5 h-5 -top-2 left-[30px] bg-white rounded-full" />
      </div>
      <div
        className="absolute w-[100px] h-[26px] top-2 left-[70%] bg-white rounded-[50px] opacity-85 animate-cloud-drift"
        style={{ animationDuration: '70s', animationDelay: '-40s' }}
      >
        <div className="absolute w-[42px] h-[42px] -top-5 left-4 bg-white rounded-full" />
        <div className="absolute w-[30px] h-[30px] -top-3.5 left-[52px] bg-white rounded-full" />
      </div>
    </div>
  )
}
