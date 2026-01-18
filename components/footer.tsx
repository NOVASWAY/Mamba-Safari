import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"
  const emailAddress = "mambaworldkenyasafaris@gmail.com"

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Mamba World Kenya</h3>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Authentic eco-safaris crafted by local Kenyan experts. Experience wildlife responsibly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#packages" className="hover:text-background transition-colors">Safari Packages</a></li>
              <li><a href="#sustainability" className="hover:text-background transition-colors">Our Commitment</a></li>
              <li><a href="#inquiry" className="hover:text-background transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Maasai Mara</li>
              <li>Amboseli National Park</li>
              <li>Tsavo National Parks</li>
              <li>Diani Beach</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a 
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {emailAddress}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +254 115 882 901
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Mamba World Kenya Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
