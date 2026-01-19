import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: 'swap',
  preload: true,
});
const sourceSans = Source_Sans_3({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Mamba World Kenya Safaris | Authentic Eco-Safaris in Kenya',
  description: 'Experience authentic eco-safaris in Kenya with local experts. Responsibly crafted wildlife adventures in Maasai Mara, Amboseli, and beyond. Book your unforgettable safari today.',
  keywords: ['Kenya safari', 'eco safari', 'Maasai Mara', 'Amboseli', 'wildlife safari', 'Kenya tours', 'African safari'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  generator: 'v0.app',
  other: {
    'dns-prefetch': 'https://fonts.googleapis.com https://fonts.gstatic.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#f59e0b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
