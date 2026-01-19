import { TreePine, Heart, Shield } from "lucide-react"

const commitments = [
  {
    icon: TreePine,
    title: "Wildlife Conservation",
    description: "A portion of every booking supports anti-poaching efforts and habitat restoration across Kenya.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "We partner with local Maasai communities, ensuring tourism benefits those who call this land home.",
  },
  {
    icon: Shield,
    title: "Responsible Tourism",
    description: "Small group sizes, eco-lodges, and strict wildlife viewing ethics minimize our environmental footprint.",
  },
]

export function SustainabilitySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/40 via-orange-50/20 to-amber-50/40 dark:from-stone-950 dark:via-amber-950/20 dark:to-stone-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-4 font-bold animate-fade-in-up">
          Our Commitment to Kenya
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 animate-fade-in"></div>
        <p className="text-stone-700 dark:text-stone-300 text-center max-w-2xl mx-auto mb-12 text-base md:text-lg animate-fade-in-up delay-200">
          Tourism should protect, not exploit. Here{"'"}s how we ensure your visit makes a positive impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {commitments.map((item, index) => (
            <div 
              key={item.title} 
              className="flex flex-col items-center text-center p-6 md:p-8 rounded-xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-amber-200/40 dark:border-amber-800/20 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-amber-100 dark:from-green-900/30 dark:to-amber-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-10 h-10 text-amber-700 dark:text-amber-400 animate-icon-pulse" style={{ animationDelay: `${index * 300}ms` }} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-white mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{item.title}</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
