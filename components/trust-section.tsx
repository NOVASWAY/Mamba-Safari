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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          Why Choose Mamba World?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We{"'"}re not just tour operators — we{"'"}re Kenyan conservationists dedicated to sharing our homeland responsibly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
