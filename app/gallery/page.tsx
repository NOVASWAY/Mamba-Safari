import { Header } from "@/components/header"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Safari Moments Gallery | Mamba World Kenya Safaris',
  description: 'Explore our collection of stunning safari photographs capturing the magic of Kenya — from golden sunsets to incredible wildlife encounters.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <PhotoGallery />
      </main>
      <Footer />
    </>
  )
}

