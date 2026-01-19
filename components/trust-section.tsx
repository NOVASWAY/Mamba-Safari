import { Leaf, MapPin, Palette } from "lucide-react"

const trustPillars = [
  {
    icon: Leaf,
    title: "Eco-Friendly & Sustainable",
    description: "Low-impact tourism that protects Kenya's wildlife and ecosystems for future generations.",
  },
  {
    icon: MapPin,
    title: "Local Kenyan Experts",
    description: "Born and raised guides who know every trail, every animal, and every story.",
  },
  {
    icon: Palette,
    title: "Fully Customized Itineraries",
    description: "No cookie-cutter trips. Every safari is tailored to your dreams and preferences.",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-stone-950 dark:via-amber-950/10 dark:to-stone-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-4 font-bold animate-fade-in-up">
          Why Choose Mamba World?
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 animate-fade-in"></div>
        <p className="text-stone-700 dark:text-stone-300 text-center max-w-2xl mx-auto mb-12 text-base md:text-lg animate-fade-in-up delay-200">
          We{"'"}re not just tour operators — we{"'"}re Kenyan conservationists dedicated to sharing our homeland responsibly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trustPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="text-center p-6 md:p-8 rounded-xl bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-8 h-8 text-amber-700 dark:text-amber-400 animate-icon-float" style={{ animationDelay: `${index * 200}ms` }} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-white mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{pillar.title}</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
