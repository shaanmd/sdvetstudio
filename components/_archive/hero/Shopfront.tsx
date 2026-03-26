'use client'

import { Sky } from './Sky'
import { BrickWall } from './BrickWall'
import { Marquee } from './Marquee'
import { Awning } from './Awning'
import { WindowLeft, WindowRight } from './Windows'
import { Door } from './Door'
import { Pavement } from './Pavement'
import { Cat } from './animals/Cat'
import { Dog } from './animals/Dog'
import { Sheep } from './animals/Sheep'
import { Horse } from './animals/Horse'
import { Cow } from './animals/Cow'

export function Shopfront() {
  return (
    <section
      className="w-full min-h-screen bg-[#B8C8D8] flex flex-col overflow-hidden"
      id="home"
    >
      <Sky />

      <div className="flex w-full flex-1 relative">
        <BrickWall side="left" />

        <div className="w-[clamp(520px,65vw,820px)] flex-shrink-0 flex flex-col bg-store-blue border-l-[6px] border-r-[6px] border-store-gold-dark relative">
          <div
            className="h-3 bg-[repeating-linear-gradient(90deg,#F5C42C_0px,#F5C42C_20px,#D4A010_20px,#D4A010_24px)] border-b-[3px] border-store-dark"
            aria-hidden
          />

          <Marquee />

          <div className="py-3.5 pt-4 px-5 pb-2 text-center bg-store-blue relative">
            <h1 className="font-luckiest text-[clamp(3rem,7vw,5.5rem)] text-store-cream leading-none tracking-[0.06em] [text-shadow:4px_4px_0_#0F3099,-2px_-2px_0_#0F3099,6px_6px_0_rgba(0,0,0,0.3)]">
              SD <span className="text-store-gold">VET</span> STUDIO
            </h1>
            <div
              className="h-1.5 bg-gradient-to-r from-store-blue-dark via-store-gold to-store-blue-dark mx-3 my-1 rounded-sm"
              aria-hidden
            />
            <p className="font-luckiest text-[clamp(0.65rem,1.4vw,0.95rem)] text-store-cream tracking-[0.18em] opacity-85 mt-1">
              WEBSITES & WEB APPS FOR THE BUSY VET
            </p>
          </div>

          <Awning />

          <div className="flex flex-1 gap-0 bg-store-blue-dark border-t-4 border-store-dark min-h-[200px]">
            <WindowLeft />
            <Door />
            <WindowRight />
          </div>

          <div
            className="h-4 bg-[repeating-linear-gradient(90deg,#F5C42C_0px,#F5C42C_20px,#D4A010_20px,#D4A010_24px)] border-t-[3px] border-b-4 border-store-dark"
            aria-hidden
          />
        </div>

        <BrickWall side="right" />
      </div>

      <Pavement>
        <div className="absolute bottom-3 left-0 w-full h-20">
          <Cat />
          <Dog />
          <Sheep />
          <Horse />
          <Cow />
        </div>
      </Pavement>
    </section>
  )
}
