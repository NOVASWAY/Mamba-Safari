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
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
          Your Safari. Your Way.
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-pretty">
          Every traveler is different. Tell us your dream — whether it{"'"}s tracking the Great Migration, 
          a romantic getaway, or a multi-generational family adventure — and we{"'"}ll craft the perfect journey.
        </p>
        <Button
          onClick={scrollToInquiry}
          size="lg"
          variant="secondary"
          className="text-lg px-10 py-6 font-semibold bg-white text-primary hover:bg-white/90"
        >
          Customize My Trip
        </Button>
      </div>
    </section>
  )
}
