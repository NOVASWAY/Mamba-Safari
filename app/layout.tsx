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

// Base path for GitHub Pages
const BASE_PATH = '/Mamba-Safari'

export const metadata: Metadata = {
  title: 'Mamba World Kenya Safaris | Authentic Eco-Safaris in Kenya',
  description: 'Experience authentic eco-safaris in Kenya with local experts. Responsibly crafted wildlife adventures in Maasai Mara, Amboseli, and beyond. Book your unforgettable safari today.',
  keywords: ['Kenya safari', 'eco safari', 'Maasai Mara', 'Amboseli', 'wildlife safari', 'Kenya tours', 'African safari'],
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico`, sizes: 'any' },
      { url: `${BASE_PATH}/icon.png`, type: 'image/png', sizes: '32x32' },
      { url: `${BASE_PATH}/apple-icon.png`, type: 'image/png', sizes: '180x180' },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
    shortcut: `${BASE_PATH}/favicon.ico`,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="INxjUuvpUwX9LXlcu8Jxx";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
            `,
          }}
        />
      </body>
    </html>
  )
}
