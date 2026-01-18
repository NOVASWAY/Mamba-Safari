import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { SafariPackages } from "@/components/safari-packages"
import { CustomSafariCTA } from "@/components/custom-safari-cta"
import { SustainabilitySection } from "@/components/sustainability-section"
import { InquirySection } from "@/components/inquiry-section"
import { Footer } from "@/components/footer"
import { StickyCTAs } from "@/components/sticky-ctas"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <section id="packages">
          <SafariPackages />
        </section>
        <CustomSafariCTA />
        <section id="sustainability">
          <SustainabilitySection />
        </section>
        <InquirySection />
      </main>
      <Footer />
      <StickyCTAs />
    </>
  )
}
