import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Aishwarya K.",
    role: "B.Tech Student, VIT",
    quote:
      "I completed the Python course for ₹129 and landed an internship within two months. The quality is insane for this price.",
    rating: 5,
  },
  {
    name: "Rohan Desai",
    role: "MBA Aspirant",
    quote:
      "The CAT prep course here is better than some ₹10,000 courses I've tried. No joke. Plus I can rewatch everything.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Freelance Designer",
    quote:
      "Learned UI/UX design from scratch. Now I'm earning freelance income while still in college. Best ₹139 I ever spent.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-16 lg:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 id="testimonials-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Real Students, Real Results
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Don't just take our word for it.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
