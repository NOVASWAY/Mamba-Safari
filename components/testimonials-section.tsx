import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & David Mitchell",
    location: "United Kingdom",
    quote: "From the moment we inquired, everything was handled flawlessly. The guides were incredible — their knowledge and passion made every game drive magical. This was the trip of a lifetime.",
  },
  {
    name: "Hans Bergmann",
    location: "Germany",
    quote: "I was nervous about planning a solo safari, but Mamba World made me feel safe and supported throughout. The accommodations were beyond expectations, and I saw all the Big Five!",
  },
  {
    name: "The Chen Family",
    location: "United States",
    quote: "Traveling with kids can be stressful, but our guide made it fun for the whole family. The children still talk about watching the lion cubs play. Highly recommend for families!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          What Our Guests Say
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Real stories from real travelers who trusted us with their African adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
