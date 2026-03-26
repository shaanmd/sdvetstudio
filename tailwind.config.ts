import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm Vet theme tokens
        'vet-primary':   '#2E6B5E',
        'vet-secondary': '#F5A25D',
        'vet-bg':        '#F9F5EF',
        'vet-surface':   '#FFFFFF',
        'vet-text':      '#1C2B28',
        'vet-muted':     '#7A9490',
        'vet-border':    '#D8E6E3',
        'vet-accent':    '#E8C49A',
        'vet-footer':    '#1C2B28',
        // Legacy store tokens (kept for archive components)
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
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        dmsans:   ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        // Legacy
        luckiest: ['var(--font-luckiest-guy)', 'cursive'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        marker: ['var(--font-permanent-marker)', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
