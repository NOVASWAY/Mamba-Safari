"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/hero-safari.jpg",
    alt: "Safari vehicle in the golden savanna at sunset",
    category: "Safari Experience",
  },
  {
    src: "/images/maasai-mara.jpg",
    alt: "Wildlife in Maasai Mara National Reserve",
    category: "Wildlife",
  },
  {
    src: "/images/amboseli.jpg",
    alt: "Elephants with Mount Kilimanjaro in the background",
    category: "Landscape",
  },
  {
    src: "/images/beach-extension.jpg",
    alt: "Beautiful beach extension after safari",
    category: "Beach",
  },
]

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
  }, [])

  const navigateImage = useCallback((direction: "prev" | "next") => {
    setSelectedImage((current) => {
      if (current === null) return null
      
      if (direction === "prev") {
        return current === 0 ? galleryImages.length - 1 : current - 1
      } else {
        return current === galleryImages.length - 1 ? 0 : current + 1
      }
    })
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev")
      } else if (e.key === "ArrowRight") {
        navigateImage("next")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, closeLightbox, navigateImage])

  // Create a masonry-style layout with varying sizes for visual interest
  const getImageSize = (index: number) => {
    // Optimized layout for 4 images
    const sizes = [
      { col: "md:col-span-2", row: "md:row-span-2", height: "h-[300px] md:h-[500px]" }, // Large - hero
      { col: "md:col-span-2", row: "md:row-span-1", height: "h-[250px] md:h-[250px]" }, // Wide - maasai mara
      { col: "md:col-span-1", row: "md:row-span-1", height: "h-[250px] md:h-[250px]" }, // Small - amboseli
      { col: "md:col-span-1", row: "md:row-span-1", height: "h-[250px] md:h-[250px]" }, // Small - beach
    ]
    return sizes[index] || sizes[0]
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
            Safari Moments
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Capture the magic of Kenya through our lens — from golden sunsets to incredible wildlife encounters.
          </p>

          {/* Creative Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => {
              const size = getImageSize(index)
              return (
                <div
                  key={index}
                  className={`relative ${size.col} ${size.row} ${size.height} overflow-hidden rounded-lg cursor-pointer group`}
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage("prev")
            }}
            className="absolute left-4 text-white hover:text-primary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage("next")
            }}
            className="absolute right-4 text-white hover:text-primary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 text-center">
              <p className="text-white text-lg font-medium mb-1">
                {galleryImages[selectedImage].category}
              </p>
              <p className="text-white/80 text-sm">{galleryImages[selectedImage].alt}</p>
              <p className="text-white/60 text-xs mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

