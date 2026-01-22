import { Header } from "@/components/header"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"
import { StickyCTAs } from "@/components/sticky-ctas"
import type { Metadata } from 'next'

const BASE_PATH = '/Mamba-Safari'
const SITE_URL = 'https://yourdomain.com' // Update with your actual domain

export const metadata: Metadata = {
  title: 'Safari Moments Gallery | Mamba World Kenya Safaris',
  description: 'Explore our collection of stunning safari photographs capturing the magic of Kenya — from golden sunsets to incredible wildlife encounters. View hot air balloons, Mount Kilimanjaro, lions, and more.',
  keywords: ['Kenya safari photos', 'safari gallery', 'wildlife photography Kenya', 'Maasai Mara photos', 'Amboseli images'],
  alternates: {
    canonical: `${SITE_URL}${BASE_PATH}/gallery/`,
  },
  openGraph: {
    title: 'Safari Moments Gallery | Mamba World Kenya Safaris',
    description: 'Explore our collection of stunning safari photographs capturing the magic of Kenya — from golden sunsets to incredible wildlife encounters.',
    url: `${SITE_URL}${BASE_PATH}/gallery/`,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}${BASE_PATH}/images/gallery/01-hot-air-balloons-safari.jpg`,
        width: 1200,
        height: 800,
        alt: 'Hot air balloons being prepared and inflated for sunrise flight over Kenyan savanna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safari Moments Gallery | Mamba World Kenya Safaris',
    description: 'Explore our collection of stunning safari photographs capturing the magic of Kenya.',
    images: [`${SITE_URL}${BASE_PATH}/images/gallery/01-hot-air-balloons-safari.jpg`],
  },
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <PhotoGallery />
      </main>
      <Footer />
      <StickyCTAs />
    </>
  )
}

