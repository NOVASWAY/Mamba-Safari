"use client"

import { Button } from "@/components/ui/button"

export function CustomSafariCTA() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById("inquiry")
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50/50 to-amber-50 dark:from-stone-900 dark:via-amber-950/30 dark:to-stone-900 text-stone-900 dark:text-white relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200/10 dark:bg-amber-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/10 dark:bg-orange-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 animate-fade-in-up">
          Your Safari. Your Way.
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-8 animate-fade-in"></div>
        <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed animate-fade-in-up delay-200">
          Every traveler is different. Tell us your dream — whether it{"'"}s tracking the Great Migration, 
          a romantic getaway, or a multi-generational family adventure — and we{"'"}ll craft the perfect journey.
        </p>
        <Button
          onClick={scrollToInquiry}
          size="lg"
          className="text-lg px-10 py-6 font-semibold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 animate-fade-in-up delay-400"
        >
          Customize My Trip
        </Button>
      </div>
    </section>
  )
}
