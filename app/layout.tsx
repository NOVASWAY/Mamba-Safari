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
const SITE_URL = 'https://yourdomain.com' // Update with your actual domain
const SITE_NAME = 'Mamba World Kenya Safaris'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mamba World Kenya Safaris | Authentic Eco-Safaris in Kenya',
    template: '%s | Mamba World Kenya Safaris',
  },
  description: 'Experience authentic eco-safaris in Kenya with local experts. Responsibly crafted wildlife adventures in Maasai Mara, Amboseli, and beyond. Book your unforgettable safari today.',
  keywords: ['Kenya safari', 'eco safari', 'Maasai Mara', 'Amboseli', 'wildlife safari', 'Kenya tours', 'African safari', 'safari packages', 'Kenya travel', 'eco-tourism Kenya'],
  authors: [{ name: 'Mamba World Kenya Safaris' }],
  creator: 'Mamba World Kenya Safaris',
  publisher: 'Mamba World Kenya Safaris',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico`, sizes: 'any' },
      { url: `${BASE_PATH}/icon.png`, type: 'image/png', sizes: '32x32' },
      { url: `${BASE_PATH}/apple-icon.png`, type: 'image/png', sizes: '180x180' },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
    shortcut: `${BASE_PATH}/favicon.ico`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Mamba World Kenya Safaris | Authentic Eco-Safaris in Kenya',
    description: 'Experience authentic eco-safaris in Kenya with local experts. Responsibly crafted wildlife adventures in Maasai Mara, Amboseli, and beyond.',
    images: [
      {
        url: `${SITE_URL}${BASE_PATH}/images/hero-safari.jpg`,
        width: 1920,
        height: 1080,
        alt: 'African elephant walking through the golden Kenyan savannah at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mamba World Kenya Safaris | Authentic Eco-Safaris in Kenya',
    description: 'Experience authentic eco-safaris in Kenya with local experts. Responsibly crafted wildlife adventures in Maasai Mara, Amboseli, and beyond.',
    images: [`${SITE_URL}${BASE_PATH}/images/hero-safari.jpg`],
    creator: '@mambasafaris', // Update with your Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
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
  // Structured data for business/organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Mamba World Kenya Safaris',
    description: 'Authentic eco-safaris in Kenya with local experts. Responsibly crafted wildlife adventures.',
    url: SITE_URL,
    logo: `${SITE_URL}${BASE_PATH}/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-115-882-901',
      contactType: 'Customer Service',
      email: 'mambaworldkenyasafaris@gmail.com',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Kenya',
    },
    sameAs: [
      // Add social media links when available
      // 'https://www.facebook.com/...',
      // 'https://www.instagram.com/...',
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
        {/* Chatbase widget loader - trusted third-party service */}
        {/* CSP policy allows scripts from chatbase.co domain */}
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
