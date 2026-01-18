"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

const navLinks = [
  { label: "Safaris", href: "#packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "#sustainability" },
  { label: "Contact", href: "#inquiry" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith("/")) {
      // External route navigation
      window.location.href = href
      return
    }
    // Anchor link navigation
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 md:h-12 w-10 md:w-12 flex-shrink-0">
              <Image 
                src="/images/logo.jpg" 
                alt="Mamba World Kenya Safaris" 
                fill
                className="object-contain rounded"
                priority
                quality={95}
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
            <span
              className={`font-serif text-lg md:text-xl font-semibold transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Mamba World
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:opacity-80 ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors hover:opacity-80 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={`${
                isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick("#inquiry")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Plan My Safari
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-foreground text-left py-3 px-4 rounded-md hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground text-left py-3 px-4 rounded-md hover:bg-secondary transition-colors"
                >
                  {link.label}
                </button>
              )
            })}
            <hr className="my-2 border-border" />
            <Button
              asChild
              variant="outline"
              className="justify-start bg-transparent"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              onClick={() => handleNavClick("#inquiry")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Plan My Safari
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
