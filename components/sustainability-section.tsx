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
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          Our Commitment to Kenya
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Tourism should protect, not exploit. Here{"'"}s how we ensure your visit makes a positive impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {commitments.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
