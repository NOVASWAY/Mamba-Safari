"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

// Base path for GitHub Pages
const BASE_PATH = '/Mamba-Safari'

const navLinks = [
  { label: "Safaris", href: "#packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "#sustainability" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#inquiry" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"
  // Normalize pathname for home page check (remove basePath and trailing slash)
  const normalizedPathname = pathname.replace(BASE_PATH, '') || '/'
  const isHomePage = normalizedPathname === '/' || normalizedPathname === ''

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section for smooth navigation indicator
      const sections = navLinks.map(link => link.href.replace('#', '')).filter(href => !href.startsWith('/'))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Handle hash navigation when arriving from another page
    if (typeof window !== 'undefined' && window.location.hash) {
      setTimeout(() => {
        const hash = window.location.hash
        const element = document.querySelector(hash)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      }, 100)
    }

    handleScroll() // Call on mount
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    setIsMobileMenuOpen(false)

    if (href.startsWith("/")) {
      // For page navigation, ensure proper navigation
      // Don't prevent default - let Link handle it
      return
    }

    // Anchor link navigation
    e?.preventDefault()

    // If not on home page, navigate to home first, then scroll
    if (normalizedPathname !== '/' && normalizedPathname !== '') {
      // Navigate to home page with hash
      const fullPath = `${BASE_PATH}/${href}`
      window.location.href = fullPath
      return
    }

    // Already on home page, just scroll
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Header height offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const isLinkActive = (href: string) => {
    if (href.startsWith('/')) {
      // Normalize pathname for comparison (remove basePath and trailing slash)
      const normalizedPathname = pathname.replace(BASE_PATH, '') || '/'
      const normalizedHref = href === '/' ? '/' : href.replace(/\/$/, '')
      return normalizedPathname === normalizedHref || normalizedPathname === `${normalizedHref}/`
    }
    return activeSection === href.replace('#', '')
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/98 dark:bg-stone-950/98 backdrop-blur-lg shadow-lg border-b border-amber-200/20 dark:border-amber-900/20"
          : "bg-white/95 dark:bg-stone-950/95 backdrop-blur-md shadow-md border-b border-amber-200/10 dark:border-amber-900/10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with smooth animation */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
            onClick={(e) => {
              if (pathname === '/' || pathname === '/Mamba-Safari' || pathname === '/Mamba-Safari/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <div className="relative h-10 md:h-12 w-10 md:w-12 flex-shrink-0 transition-all duration-300 group-hover:rotate-6">
              <Image
                src={`${BASE_PATH}/images/logo.jpg`}
                alt="Mamba World Kenya Safaris"
                fill
                className="object-contain rounded"
                priority
                quality={80}
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
            <span
              className={cn(
                "font-serif text-lg md:text-xl font-semibold transition-colors duration-300",
                "text-amber-700 dark:text-amber-400"
              )}
            >
              Mamba World
            </span>
          </Link>

          {/* Desktop Navigation with smooth indicators */}
          <nav className="hidden md:flex items-center gap-2">
            {/* Always show Home link */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === '/' || pathname === '/Mamba-Safari' || pathname === '/Mamba-Safari/') {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out group cursor-pointer",
                isScrolled
                  ? "text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  : "text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30",
                isHomePage && "text-amber-700 dark:text-amber-400"
              )}
            >
              Home
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent transition-all duration-300 ease-in-out rounded-full",
                  isHomePage ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                )}
              />
            </Link>

            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href)

              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out group cursor-pointer",
                      isScrolled
                        ? "text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                        : "text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30",
                      isActive && "text-amber-700 dark:text-amber-400"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent transition-all duration-300 ease-in-out rounded-full",
                        isActive ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                      )}
                    />
                  </Link>
                )
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out group cursor-pointer",
                    isScrolled
                      ? "text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                      : "text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30",
                    isActive && "text-amber-700 dark:text-amber-400"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent transition-all duration-300 ease-in-out rounded-full",
                      isActive ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                    )}
                  />
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA with smooth animations */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "transition-all duration-300 hover:scale-105",
                isScrolled
                  ? "text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                  : "text-white hover:bg-white/10"
              )}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick("#inquiry")}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Plan My Safari
            </Button>
          </div>

          {/* Mobile Menu Button with smooth icon transition */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-all duration-300",
              isScrolled
                ? "text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 w-6 h-6 transition-all duration-300",
                isMobileMenuOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
              )} />
              <X className={cn(
                "absolute inset-0 w-6 h-6 transition-all duration-300",
                isMobileMenuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-0"
              )} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth slide animation and scrolling */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="bg-white/98 dark:bg-stone-950/98 backdrop-blur-xl border-t border-amber-200/20 dark:border-amber-900/20 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-2">
              {/* Always show Home link in mobile menu */}
              <Link
                href="/"
                onClick={(e) => {
                  setIsMobileMenuOpen(false)
                  if (pathname === '/' || pathname === '/Mamba-Safari' || pathname === '/Mamba-Safari/') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out transform hover:translate-x-2 cursor-pointer",
                  isHomePage
                    ? "bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/50 dark:to-orange-950/50 text-amber-700 dark:text-amber-400 shadow-md"
                    : "text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                )}
                style={{ animationDelay: '0ms' }}
              >
                Home
              </Link>

              {navLinks.map((link, index) => {
                const isActive = isLinkActive(link.href)

                if (link.href.startsWith("/")) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out transform hover:translate-x-2 cursor-pointer",
                        isActive
                          ? "bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/50 dark:to-orange-950/50 text-amber-700 dark:text-amber-400 shadow-md"
                          : "text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                      )}
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                    >
                      {link.label}
                    </Link>
                  )
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium text-left transition-all duration-300 ease-in-out transform hover:translate-x-2 cursor-pointer",
                      isActive
                        ? "bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/50 dark:to-orange-950/50 text-amber-700 dark:text-amber-400 shadow-md"
                        : "text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                    )}
                    style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            {/* Mobile Quick Actions */}
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-amber-200/30 dark:border-amber-900/30 pb-6">
              <Button
                asChild
                variant="outline"
                className="justify-center bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                onClick={() => handleNavClick("#inquiry")}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-base hover:scale-105"
              >
                Plan My Safari Adventure
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
