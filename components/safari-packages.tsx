"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

// Base path for GitHub Pages
const BASE_PATH = '/Mamba-Safari'

const packages = [
  {
    title: "Classic Maasai Mara Safari",
    image: `${BASE_PATH}/images/maasai-mara.jpg`,
    duration: "4-5 Days",
    idealFor: "First-time visitors, Wildlife enthusiasts",
    highlights: ["Big Five game drives", "Maasai village visit", "Sunrise balloon option"],
  },
  {
    title: "Amboseli & Kilimanjaro Views",
    image: `${BASE_PATH}/images/amboseli.jpg`,
    duration: "3-4 Days",
    idealFor: "Photographers, Elephant lovers",
    highlights: ["Elephant herds", "Mt. Kilimanjaro backdrop", "Sundowner experiences"],
  },
  {
    title: "Safari & Beach Combo",
    image: `${BASE_PATH}/images/beach-extension.jpg`,
    duration: "7-10 Days",
    idealFor: "Honeymooners, Families",
    highlights: ["Maasai Mara game drives", "Diani Beach relaxation", "Water sports"],
  },
]

export function SafariPackages() {
  const scrollToInquiry = (packageTitle: string) => {
    const inquirySection = document.getElementById("inquiry")
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" })
      // Pre-fill the package in the form if possible
      const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement
      if (messageField) {
        messageField.value = `I'm interested in the ${packageTitle} package.`
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/30 via-orange-50/20 to-amber-50/30 dark:from-stone-950 dark:via-amber-950/10 dark:to-stone-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-4 font-bold animate-fade-in-up">
          Popular Safari Packages
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 animate-fade-in"></div>
        <p className="text-stone-700 dark:text-stone-300 text-center max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
          Start with our most-loved itineraries, then customize to make it yours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-200/50 dark:border-amber-800/30 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.title} - ${pkg.duration} safari package ideal for ${pkg.idealFor}`}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl text-stone-900 dark:text-white mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{pkg.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 animate-icon-wiggle" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 animate-icon-float" />
                    <span>{pkg.idealFor}</span>
                  </div>
                </div>

                <ul className="mb-6 space-y-1">
                  {pkg.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollToInquiry(pkg.title)}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Request This Safari
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
