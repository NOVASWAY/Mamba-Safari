import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { DestinationsSection } from "@/components/destinations-section"
import { SafariPackages } from "@/components/safari-packages"
import { CustomSafariCTA } from "@/components/custom-safari-cta"
import { SustainabilitySection } from "@/components/sustainability-section"
import { FAQSection } from "@/components/faq-section"
import { BookingPaymentSection } from "@/components/booking-payment-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InquirySection } from "@/components/inquiry-section"
import { Footer } from "@/components/footer"
import { StickyCTAs } from "@/components/sticky-ctas"
import type { Metadata } from 'next'

const BASE_PATH = '/Mamba-Safari'
const SITE_URL = 'https://yourdomain.com' // Update with your actual domain

export const metadata: Metadata = {
  title: 'Authentic Eco-Safaris in Kenya | Maasai Mara & Amboseli Tours',
  description: 'Experience authentic eco-safaris in Kenya with local experts. Responsibly crafted wildlife adventures in Maasai Mara, Amboseli, and beyond. Book your unforgettable safari today.',
  alternates: {
    canonical: `${SITE_URL}${BASE_PATH}/`,
  },
  openGraph: {
    title: 'Mamba World Kenya Safaris | Authentic Eco-Safaris in Kenya',
    description: 'Experience authentic eco-safaris in Kenya with local experts. Responsibly crafted wildlife adventures in Maasai Mara, Amboseli, and beyond.',
    url: `${SITE_URL}${BASE_PATH}/`,
    images: [
      {
        url: `${SITE_URL}${BASE_PATH}/images/hero-safari.jpg`,
        width: 1920,
        height: 1080,
        alt: 'African elephant walking through the golden Kenyan savannah at sunset',
      },
    ],
  },
}

export default function HomePage() {
  // Breadcrumb structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}${BASE_PATH}/`,
      },
    ],
  }

  // Website structured data
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mamba World Kenya Safaris',
    url: `${SITE_URL}${BASE_PATH}/`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}${BASE_PATH}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // FAQ structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of safaris do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer eco-friendly wildlife safaris, customized private tours, group safaris, cultural experiences, and nature-based adventures across Kenya.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize my safari?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All our safaris can be tailored to your interests, budget, and travel schedule.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your safaris eco-friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We practice responsible tourism by supporting conservation efforts, minimizing environmental impact, and working with local communities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which destinations do you cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maasai Mara, Amboseli, Tsavo East & West, Lake Nakuru, Samburu, and other key destinations in Kenya.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the safari price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Safari prices typically include transport, accommodation, park fees, professional driver-guide services, and meals as outlined in your itinerary.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book a safari?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book by filling in our website inquiry form, contacting us via WhatsApp, or emailing us directly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Kenya safe for tourists?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Kenya is a popular safari destination, and we prioritize guest safety throughout your journey.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TrustSection />
        <DestinationsSection />
        <section id="packages" className="scroll-mt-20">
          <SafariPackages />
        </section>
        <CustomSafariCTA />
        <section id="sustainability" className="scroll-mt-20">
          <SustainabilitySection />
        </section>
        <FAQSection />
        <BookingPaymentSection />
        <TestimonialsSection />
        <section id="inquiry" className="scroll-mt-20">
          <InquirySection />
        </section>
      </main>
      <Footer />
      <StickyCTAs />
    </>
  )
}
