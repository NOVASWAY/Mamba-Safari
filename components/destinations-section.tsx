"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    name: "Maasai Mara National Reserve",
    image: "/images/maasai-mara.jpg",
    tagline: "Home of the Great Migration",
    description: "Witness the annual wildebeest migration and spot the Big Five in one of Africa's most famous game reserves.",
  },
  {
    name: "Amboseli National Park",
    image: "/images/amboseli.jpg",
    tagline: "Elephants & Kilimanjaro",
    description: "Experience large elephant herds against the stunning backdrop of Mount Kilimanjaro.",
  },
  {
    name: "Tsavo National Parks",
    image: "/images/hero-safari.jpg",
    tagline: "The Red Elephants",
    description: "Explore Kenya's largest national park, home to red elephants, diverse wildlife, and dramatic landscapes.",
  },
  {
    name: "Lake Nakuru National Park",
    image: "/images/beach-extension.jpg",
    tagline: "Pink Flamingos & Rhinos",
    description: "Marvel at millions of pink flamingos and spot both black and white rhinos in this birdwatcher's paradise.",
  },
  {
    name: "Samburu National Reserve",
    image: "/images/maasai-mara.jpg",
    tagline: "The Special Five",
    description: "Discover unique northern species including Grevy's zebra, reticulated giraffe, and gerenuk antelope.",
  },
  {
    name: "Diani Beach",
    image: "/images/beach-extension.jpg",
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          Explore Kenya{"'"}s Iconic Destinations
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Discover the diverse landscapes and wildlife-rich regions that make Kenya a world-class safari destination.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
              onClick={() => scrollToInquiry(dest.name)}
              onKeyDown={(e) => e.key === 'Enter' && scrollToInquiry(dest.name)}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${dest.name}`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              <div className="p-5">
                <h3 className="font-serif text-xl text-foreground mb-1">{dest.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{dest.tagline}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dest.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
