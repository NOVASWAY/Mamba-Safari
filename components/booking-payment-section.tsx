"use client"

import { CheckCircle2, CreditCard, MessageSquare, Mail, FileText, Shield, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const bookingSteps = [
  {
    icon: MessageSquare,
    title: "Make an Inquiry",
    description: "Safari inquiries can be made through our website, WhatsApp, or email.",
  },
  {
    icon: FileText,
    title: "Customized Itinerary",
    description: "Once we receive your request, we create a customized itinerary based on your preferences.",
  },
  {
    icon: CheckCircle2,
    title: "Confirm Your Booking",
    description: "After confirmation, we share official payment instructions.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "A deposit may be required to secure your booking, with the balance payable before the safari begins.",
  },
]

export function BookingPaymentSection() {
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"
  const emailAddress = "mambaworldkenyasafaris@gmail.com"

  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-b from-amber-50/30 via-white to-amber-50/30 dark:from-stone-950 dark:via-amber-950/10 dark:via-stone-950 dark:to-amber-950/10 relative overflow-hidden scroll-mt-20">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-20 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-6">
            <CreditCard className="w-8 h-8 text-amber-700 dark:text-amber-400 animate-icon-wiggle" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-4 font-bold">
            Booking & Payment Information
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 animate-fade-in"></div>
          <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg max-w-3xl mx-auto animate-fade-in-up delay-200">
            Booking a safari with Mamba World Kenya Safaris is simple and flexible. Secure and reliable payment options will be provided during the booking process.
          </p>
        </div>

        {/* Booking Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {bookingSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-amber-700 dark:text-amber-400 animate-icon-float" style={{ animationDelay: `${index * 150}ms` }} />
              </div>
              <h3 className="font-serif text-lg md:text-xl text-stone-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors font-semibold">
                {step.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Information Card */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-500">
          <div className="bg-gradient-to-br from-white/95 to-amber-50/50 dark:from-stone-900/95 dark:to-amber-950/30 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-amber-100 dark:from-green-900/30 dark:to-amber-900/30 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-amber-700 dark:text-amber-400 animate-icon-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-white mb-2 font-semibold">
                  Need Help?
                </h3>
                <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg leading-relaxed mb-6">
                  For any questions about booking or payment, our team is always available to assist you. Contact us through any of the channels below.
                </p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start bg-white/50 dark:bg-stone-800/50 border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-all duration-300 hover:scale-105 h-auto py-4"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-3 h-5 w-5 text-amber-700 dark:text-amber-400 animate-icon-wiggle" />
                  <div className="text-left">
                    <div className="font-semibold text-stone-900 dark:text-white">WhatsApp</div>
                    <div className="text-xs text-stone-600 dark:text-stone-400">Chat with us</div>
                  </div>
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full justify-start bg-white/50 dark:bg-stone-800/50 border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-all duration-300 hover:scale-105 h-auto py-4"
              >
                <a href={`mailto:${emailAddress}`}>
                  <Mail className="mr-3 h-5 w-5 text-amber-700 dark:text-amber-400 animate-icon-float" />
                  <div className="text-left">
                    <div className="font-semibold text-stone-900 dark:text-white">Email</div>
                    <div className="text-xs text-stone-600 dark:text-stone-400">{emailAddress}</div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

