"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

// Base path for GitHub Pages
const BASE_PATH = '/Mamba-Safari'

const destinations = [
  {
    name: "Maasai Mara National Reserve",
    image: `${BASE_PATH}/images/maasai-mara.jpg`,
    tagline: "Home of the Great Migration",
    description: "Witness the annual wildebeest migration and spot the Big Five in one of Africa's most famous game reserves.",
  },
  {
    name: "Amboseli National Park",
    image: `${BASE_PATH}/images/amboseli.jpg`,
    tagline: "Elephants & Kilimanjaro",
    description: "Experience large elephant herds against the stunning backdrop of Mount Kilimanjaro.",
  },
  {
    name: "Tsavo National Parks",
    image: `${BASE_PATH}/images/hero-safari.jpg`,
    tagline: "The Red Elephants",
    description: "Explore Kenya's largest national park, home to red elephants, diverse wildlife, and dramatic landscapes.",
  },
  {
    name: "Lake Nakuru National Park",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=800&fit=crop&q=80",
    tagline: "Pink Flamingos & Rhinos",
    description: "Marvel at millions of pink flamingos and spot both black and white rhinos in this birdwatcher's paradise.",
  },
  {
    name: "Samburu National Reserve",
    image: `${BASE_PATH}/images/maasai-mara.jpg`,
    tagline: "The Special Five",
    description: "Discover unique northern species including Grevy's zebra, reticulated giraffe, and gerenuk antelope.",
  },
  {
    name: "Diani Beach",
    image: `${BASE_PATH}/images/beach-extension.jpg`,
    tagline: "Tropical Paradise",
    description: "Relax on pristine white sand beaches and enjoy world-class diving and water sports on the Kenyan coast.",
  },
]

export function DestinationsSection() {
  const scrollToInquiry = (destination: string) => {
    const inquirySection = document.getElementById("inquiry")
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" })
      const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement
      if (messageField) {
        messageField.value = `I'd like to learn more about ${destination}.`
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white dark:from-stone-950 dark:via-amber-950/5 dark:to-stone-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-4 font-bold">
            Explore Kenya{"'"}s Iconic Destinations
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 animate-fade-in"></div>
          <p className="text-stone-700 dark:text-stone-300 text-center max-w-2xl mx-auto text-base md:text-lg animate-fade-in-up delay-200">
            Discover the diverse landscapes and wildlife-rich regions that make Kenya a world-class safari destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-200/50 dark:border-amber-800/30 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 group cursor-pointer hover:-translate-y-2 animate-fade-in-up"
              onClick={() => scrollToInquiry(dest.name)}
              onKeyDown={(e) => e.key === 'Enter' && scrollToInquiry(dest.name)}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${dest.name}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dest.image || `${BASE_PATH}/placeholder.svg`}
                  alt={`${dest.name} - ${dest.tagline}. ${dest.description}`}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-white mb-2 font-bold group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-amber-600 dark:text-amber-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                  {dest.tagline}
                </p>
                <p className="text-stone-700 dark:text-stone-300 text-sm md:text-base mb-5 line-clamp-3 leading-relaxed">
                  {dest.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-2 border-amber-600 dark:border-amber-400 text-amber-700 dark:text-amber-400 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
