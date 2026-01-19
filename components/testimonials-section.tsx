import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Nadia Gikundiro",
    location: "Rwanda",
    quote: "Mamba World Kenya Safaris planned a smooth and memorable trip for us. Everything from transport to accommodation was handled professionally, and we appreciated the focus on responsible tourism.",
  },
  {
    name: "Terry Kimani",
    location: "Uganda",
    quote: "The safari was amazing and very well coordinated. I loved the attention to detail and the respect for nature and local communities.",
  },
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
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-stone-950 dark:via-amber-950/10 dark:to-stone-950 relative overflow-hidden scroll-mt-20">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-6">
            <Quote className="w-8 h-8 text-amber-700 dark:text-amber-400 animate-icon-pulse" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-4 font-bold">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 animate-fade-in"></div>
          <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Real stories from real travelers who trusted us with their African adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-amber-500 text-amber-500 animate-icon-pulse" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <blockquote className="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed italic text-base md:text-lg relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-200 dark:text-amber-800/50 opacity-50" />
                <span className="relative z-10">&ldquo;{testimonial.quote}&rdquo;</span>
              </blockquote>
              <div className="pt-4 border-t border-amber-200/30 dark:border-amber-800/20">
                <p className="font-semibold text-stone-900 dark:text-white text-lg group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {testimonial.name}
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
