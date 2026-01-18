"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"

  const scrollToInquiry = () => {
    const inquirySection = document.getElementById("inquiry")
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-safari.jpg"
          alt="African elephant walking through the golden Kenyan savannah at sunset"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight text-balance max-w-4xl mx-auto">
          Authentic Eco-Safaris in Kenya — Responsibly Crafted for Unforgettable Wildlife Experiences
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
          Eco-friendly adventures led by local Kenyan experts. Stress-free planning for memories that last a lifetime.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToInquiry}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-md font-semibold"
          >
            Plan My Safari
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 rounded-md font-semibold bg-transparent"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
