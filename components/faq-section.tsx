"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqData = [
  {
    question: "What types of safaris do you offer?",
    answer: "We offer eco-friendly wildlife safaris, customized private tours, group safaris, cultural experiences, and nature-based adventures across Kenya.",
  },
  {
    question: "Can I customize my safari?",
    answer: "Yes. All our safaris can be tailored to your interests, budget, and travel schedule.",
  },
  {
    question: "Are your safaris eco-friendly?",
    answer: "Yes. We practice responsible tourism by supporting conservation efforts, minimizing environmental impact, and working with local communities.",
  },
  {
    question: "Which destinations do you cover?",
    answer: "Maasai Mara, Amboseli, Tsavo East & West, Lake Nakuru, Samburu, and other key destinations in Kenya.",
  },
  {
    question: "What is included in the safari price?",
    answer: "Safari prices typically include transport, accommodation, park fees, professional driver-guide services, and meals as outlined in your itinerary.",
  },
  {
    question: "How do I book a safari?",
    answer: "You can book by filling in our website inquiry form, contacting us via WhatsApp, or emailing us directly.",
  },
  {
    question: "Is Kenya safe for tourists?",
    answer: "Yes. Kenya is a popular safari destination, and we prioritize guest safety throughout your journey.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-stone-950 dark:via-amber-950/10 dark:to-stone-950 relative overflow-hidden scroll-mt-20">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-6">
            <HelpCircle className="w-8 h-8 text-amber-700 dark:text-amber-400 animate-icon-pulse" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-4 font-bold">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 animate-fade-in"></div>
          <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Everything you need to know about planning your perfect Kenyan safari adventure.
          </p>
        </div>

        <div className="animate-fade-in-up delay-300">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 rounded-xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-stone-900 dark:text-white font-semibold text-base md:text-lg py-4 hover:no-underline hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

