"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone } from "lucide-react"

export function StickyCTAs() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"
  const emailAddress = "mambaworldkenyasafaris@gmail.com"
  const phoneNumber = "tel:+254115882901"

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTAs after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToInquiry = () => {
    const inquirySection = document.getElementById("inquiry")
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-3 flex gap-3">
        <Button
          onClick={scrollToInquiry}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-5"
        >
          Plan My Safari
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 py-5 border-primary text-primary bg-transparent"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5 animate-icon-pulse" />
            WhatsApp
          </a>
        </Button>
      </div>

      {/* Desktop Floating Icons */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-50 flex-col gap-4">
        {/* WhatsApp Floating Icon */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 animate-icon-float" />
        </a>

        {/* Email Floating Icon */}
        <a
          href={`mailto:${emailAddress}`}
          className="group flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Send us an email"
          title="Send us an email"
        >
          <Mail className="w-6 h-6 animate-icon-pulse" />
        </a>

        {/* Phone Floating Icon */}
        <a
          href={phoneNumber}
          className="group flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Call us"
          title="Call us"
        >
          <Phone className="w-6 h-6 animate-icon-wiggle" />
        </a>

        {/* Plan Safari Floating Button */}
        <button
          onClick={scrollToInquiry}
          className="group flex items-center justify-center w-14 h-14 bg-foreground hover:bg-foreground/90 text-background rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl font-semibold text-xs"
          aria-label="Plan My Safari"
          title="Plan My Safari"
        >
          <span className="rotate-[-45deg]">✈</span>
        </button>
      </div>
    </>
  )
}
