"use client"

import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const BASE_PATH = '/Mamba-Safari'

export function Footer() {
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"
  const emailAddress = "mambaworldkenyasafaris@gmail.com"
  const pathname = usePathname()
  const normalizedPathname = pathname?.replace(BASE_PATH, '') || '/'
  const isHomePage = normalizedPathname === '/' || normalizedPathname === ''

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHomePage) {
      e.preventDefault()
      // Navigate to home page with hash
      window.location.href = `${BASE_PATH}/${hash}`
    }
    // If on home page, let the default anchor behavior work
  }

  return (
    <footer className="bg-gradient-to-b from-stone-900 via-stone-950 to-black text-white py-12 md:py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-bold">Mamba World Kenya</h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
              Authentic eco-safaris crafted by local Kenyan experts. Experience wildlife responsibly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-200">
            <h4 className="font-semibold mb-4 text-amber-400 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a 
                  href="#packages" 
                  onClick={(e) => handleAnchorClick(e, '#packages')}
                  className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Safari Packages
                </a>
              </li>
              <li>
                <a 
                  href="#sustainability" 
                  onClick={(e) => handleAnchorClick(e, '#sustainability')}
                  className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Our Commitment
                </a>
              </li>
              <li>
                <a 
                  href="#inquiry" 
                  onClick={(e) => handleAnchorClick(e, '#inquiry')}
                  className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="animate-fade-in-up delay-300">
            <h4 className="font-semibold mb-4 text-amber-400 text-lg">Destinations</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-amber-400 transition-colors duration-300">Maasai Mara</li>
              <li className="hover:text-amber-400 transition-colors duration-300">Amboseli National Park</li>
              <li className="hover:text-amber-400 transition-colors duration-300">Tsavo National Parks</li>
              <li className="hover:text-amber-400 transition-colors duration-300">Diani Beach</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up delay-400">
            <h4 className="font-semibold mb-4 text-amber-400 text-lg">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 animate-icon-float" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a 
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 animate-icon-pulse" />
                  <span className="break-all">{emailAddress}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300">
                <Phone className="w-4 h-4 animate-icon-wiggle" />
                +254 115 882 901
              </li>
              <li className="flex items-start gap-2 hover:text-amber-400 transition-colors duration-300">
                <MapPin className="w-4 h-4 mt-0.5 animate-icon-float" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Mamba World Kenya Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
