"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Gallery images with accurate labels matching actual content
const galleryImages = [
  {
    src: "/images/gallery/01-hot-air-balloons-safari.jpg",
    alt: "Hot air balloons being prepared and inflated for sunrise flight, with striped green and tan balloons including registration 5Y-ZJR, and safari vehicles parked in foreground on dry savanna terrain",
    category: "Adventure",
    label: "Hot Air Balloons at Sunrise",
  },
  {
    src: "/images/gallery/02-kilimanjaro-starry-night.jpg",
    alt: "Mount Kilimanjaro snow-capped peak under starry night sky with moonlit clouds drifting across, dark savanna vegetation and acacia trees in foreground, distant settlement lights visible at base",
    category: "Landscape",
    label: "Kilimanjaro Under Stars",
  },
  {
    src: "/images/gallery/03-lions-safari-vehicle.jpg",
    alt: "Male lion with magnificent mane and lioness standing on dirt road directly in front of beige Toyota Land Cruiser safari vehicle with tourists observing from open pop-up roof",
    category: "Wildlife",
    label: "Lions & Safari Encounter",
  },
  {
    src: "/images/gallery/04-rhinoceros-bridge.jpg",
    alt: "White rhinoceros grazing peacefully in lush green grassland with white egret bird nearby, modern elevated railway or highway bridge visible in distant background",
    category: "Wildlife",
    label: "Rhinoceros Grazing",
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

  // Balanced layout - mobile responsive
  const getImageSize = (index: number) => {
    return { height: "h-auto aspect-[4/3] min-h-[250px] md:min-h-[300px]" }
  }

  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden min-h-screen">
        {/* Balanced Background Layers - lighter for better header visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-rose-50/60 dark:from-stone-950 dark:via-amber-950/20 dark:to-stone-950"></div>
        
        {/* Balanced gradient orbs - symmetrical placement */}
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-gradient-radial from-amber-200/20 via-orange-200/10 to-transparent dark:from-amber-600/15 dark:via-orange-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-radial from-rose-200/20 via-amber-200/10 to-transparent dark:from-rose-600/15 dark:via-amber-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Subtle pattern overlay with reduced opacity */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Balanced heading - mobile optimized */}
          <div className="text-center mb-12 md:mb-16 px-4 md:px-0">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-3 font-bold tracking-wide">
              Safari Moments
            </h2>
            <div className="w-20 md:w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-5 md:mb-6"></div>
            <p className="text-stone-700 dark:text-stone-300 text-center max-w-2xl mx-auto text-sm md:text-base lg:text-lg font-light leading-relaxed">
              Capture the magic of Kenya through our lens — from golden sunsets to incredible wildlife encounters.
            </p>
          </div>

          {/* Balanced grid layout - mobile optimized */}
          {galleryImages.length === 0 ? (
            <div className="text-center py-12 md:py-16 backdrop-blur-sm bg-white/50 dark:bg-black/30 rounded-xl md:rounded-2xl border border-amber-200/40 dark:border-amber-800/40 mx-4 md:mx-0">
              <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg px-4">Gallery is currently empty.</p>
              <p className="text-stone-600 dark:text-stone-400 text-sm mt-2 px-4">Images will appear here once added.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto px-4 md:px-0">
              {galleryImages.map((image, index) => {
                const size = getImageSize(index)
                return (
                  <div
                    key={index}
                    className={`relative ${size.height} overflow-hidden rounded-lg md:rounded-xl cursor-pointer group transition-all duration-500 bg-gradient-to-br from-white/90 via-amber-50/60 to-orange-50/50 dark:from-stone-900/90 dark:via-amber-950/40 dark:to-stone-900/90 p-3 md:p-4 lg:p-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-amber-200/50 dark:border-amber-800/30 backdrop-blur-sm`}
                    onClick={() => openLightbox(index)}
                    onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${image.alt}`}
                  >
                  <div className="relative w-full h-full rounded-md md:rounded-lg overflow-hidden shadow-md bg-white dark:from-stone-950 dark:to-stone-900">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-1 md:p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                      quality={90}
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md md:rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 lg:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                      <p className="text-white text-xs md:text-sm font-semibold mb-0.5 md:mb-1 drop-shadow-lg line-clamp-1">{image.label || image.category}</p>
                      <p className="text-white/90 text-[10px] md:text-xs line-clamp-2 drop-shadow-md">{image.alt}</p>
                    </div>
                  </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-gradient-to-br from-black via-stone-900/95 to-black flex items-center justify-center p-4"
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
            className="relative w-full h-full max-w-7xl max-h-[90vh] bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 dark:from-stone-800 dark:via-stone-700 dark:to-stone-800 p-4 md:p-8 rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-white dark:bg-stone-950 shadow-inner">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain p-4"
                priority
                sizes="100vw"
                quality={95}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 text-center rounded-b-lg">
                <p className="text-white text-lg font-medium mb-1 drop-shadow-lg">
                  {galleryImages[selectedImage].label || galleryImages[selectedImage].category}
                </p>
                <p className="text-white/90 text-sm drop-shadow-md">{galleryImages[selectedImage].alt}</p>
                <p className="text-white/70 text-xs mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

