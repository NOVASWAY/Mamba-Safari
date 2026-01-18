"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

const packages = [
  {
    title: "Classic Maasai Mara Safari",
    image: "/images/maasai-mara.jpg",
    duration: "4-5 Days",
    idealFor: "First-time visitors, Wildlife enthusiasts",
    highlights: ["Big Five game drives", "Maasai village visit", "Sunrise balloon option"],
  },
  {
    title: "Amboseli & Kilimanjaro Views",
    image: "/images/amboseli.jpg",
    duration: "3-4 Days",
    idealFor: "Photographers, Elephant lovers",
    highlights: ["Elephant herds", "Mt. Kilimanjaro backdrop", "Sundowner experiences"],
  },
  {
    title: "Safari & Beach Combo",
    image: "/images/beach-extension.jpg",
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
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          Popular Safari Packages
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Start with our most-loved itineraries, then customize to make it yours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-3">{pkg.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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
