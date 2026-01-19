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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 z-0 animate-scale-in">
        <Image
          src="/images/hero-safari.jpg"
          alt="African elephant walking through the golden Kenyan savannah at sunset"
          fill
          className="object-cover scale-105 hover:scale-110 transition-transform duration-[10s] ease-out"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content with staggered animations */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight text-balance max-w-4xl mx-auto animate-fade-in-up drop-shadow-2xl">
          Authentic Eco-Safaris in Kenya — Responsibly Crafted for Unforgettable Wildlife Experiences
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty animate-fade-in-up delay-200 drop-shadow-lg">
          Eco-friendly adventures led by local Kenyan experts. Stress-free planning for memories that last a lifetime.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <Button
            size="lg"
            onClick={scrollToInquiry}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg px-8 py-6 rounded-lg font-semibold shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            Plan My Safari
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto border-2 border-white/80 backdrop-blur-sm bg-white/10 text-white hover:bg-white hover:text-stone-900 text-lg px-8 py-6 rounded-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5 animate-icon-float" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
