import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { SafariPackages } from "@/components/safari-packages"
import { CustomSafariCTA } from "@/components/custom-safari-cta"
import { SustainabilitySection } from "@/components/sustainability-section"
import { FAQSection } from "@/components/faq-section"
import { BookingPaymentSection } from "@/components/booking-payment-section"
import { InquirySection } from "@/components/inquiry-section"
import { Footer } from "@/components/footer"
import { StickyCTAs } from "@/components/sticky-ctas"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TrustSection />
        <section id="packages" className="scroll-mt-20">
          <SafariPackages />
        </section>
        <CustomSafariCTA />
        <section id="sustainability" className="scroll-mt-20">
          <SustainabilitySection />
        </section>
        <FAQSection />
        <BookingPaymentSection />
        <section id="inquiry" className="scroll-mt-20">
          <InquirySection />
        </section>
      </main>
      <Footer />
      <StickyCTAs />
    </>
  )
}
