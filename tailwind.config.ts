import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'store-blue': '#1B50D4',
        'store-blue-dark': '#0F3099',
        'store-blue-light': '#3A6AE8',
        'store-gold': '#F5C42C',
        'store-gold-dark': '#D4A010',
        'store-coral': '#E8504A',
        'store-coral-light': '#F47C76',
        'store-cream': '#FFF8E8',
        'store-dark': '#1A1208',
        'brick-red': '#C0522A',
        'brick-light': '#D4694A',
        'mortar': '#B8956A',
        'pavement': '#C8C4B4',
        'pavement-dark': '#A8A498',
        'window-bg': '#A8C8E8',
        'door-bg': '#0A0E1A',
        'store-mint': '#4ECBA8',
        'store-yellow': '#FFE44A',
        'store-pink': '#F4A0C0',
      },
      fontFamily: {
        luckiest: ['var(--font-luckiest-guy)', 'cursive'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        marker: ['var(--font-permanent-marker)', 'cursive'],
      },
      keyframes: {
        marqueeScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        walkRight: {
          from: { left: '-160px' },
          to: { left: 'calc(100% + 160px)' },
        },
        walkLeft: {
          from: { left: 'calc(100% + 160px)' },
          to: { left: '-160px' },
        },
        legsFront: {
          '0%, 100%': { transform: 'rotate(12deg)' },
          '50%': { transform: 'rotate(-12deg)' },
        },
        legsBack: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
        neonFlicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.7' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.5' },
          '99%': { opacity: '1' },
        },
        cloudDrift: {
          from: { transform: 'translateX(-200px)' },
          to: { transform: 'translateX(110vw)' },
        },
      },
      animation: {
        'marquee': 'marqueeScroll 20s linear infinite',
        'walk-right': 'walkRight linear infinite',
        'walk-left': 'walkLeft linear infinite',
        'legs-front': 'legsFront 0.5s ease-in-out infinite',
        'legs-back': 'legsBack 0.5s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 4s ease-in-out infinite',
        'cloud-drift': 'cloudDrift linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
