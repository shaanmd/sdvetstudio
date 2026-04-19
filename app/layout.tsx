import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, DM_Sans, Outfit } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sdvetstudio.com'),
  title: 'SD VetStudio: Software, apps, and things for screens.',
  description:
    'Custom AI builds and educational tools. Created by two veterinarians with a focus on functional, no-nonsense design and a fragment of fun.',
  openGraph: {
    title: 'SD VetStudio: Software, apps, and things for screens.',
    description:
      'Custom AI builds and educational tools. Created by two veterinarians with a focus on functional, no-nonsense design and a fragment of fun.',
    url: 'https://sdvetstudio.com',
    siteName: 'SD VetStudio',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SD VetStudio: Software, apps, and things for screens.',
    description:
      'Custom AI builds and educational tools. Created by two veterinarians with a focus on functional, no-nonsense design and a fragment of fun.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sdvetstudio.com',
  },
}

const GA_ID = 'G-75JFHKHXWP'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${outfit.variable}`}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
