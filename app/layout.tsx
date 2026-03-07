import type { Metadata } from 'next'
import { Luckiest_Guy, Nunito, Permanent_Marker } from 'next/font/google'
import './globals.css'

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
})
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
})
const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
})

export const metadata: Metadata = {
  title: 'SD Vet Studio — Websites & Web Apps for the Busy Vet',
  description:
    'AI-assisted builds. Clean handovers. No tech overwhelm. No agency price tag. Built by vets, for vets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${luckiestGuy.variable} ${nunito.variable} ${permanentMarker.variable}`}
    >
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
