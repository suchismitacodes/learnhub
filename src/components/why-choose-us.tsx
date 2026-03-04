import { IndianRupee, Infinity, Smartphone, Users } from "lucide-react"

const features = [
  {
    icon: IndianRupee,
    title: "Unbeatable Pricing",
    description: "Every course between ₹100-₹150. No hidden fees, no subscriptions. Pay once, learn forever.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description: "Enroll once and revisit anytime. Lectures, resources, updates -- all yours with no expiry date.",
  },
  {
    icon: Smartphone,
    title: "Learn Anywhere",
    description: "Optimised for every device. Study from your phone, tablet, or laptop -- even on slow connections.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Get doubts cleared in discussion forums and connect with fellow learners across India.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-24" aria-labelledby="why-heading">
      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 id="why-heading" className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Why Students Choose LearnHub
          </h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/70">
            Built different from day one. Here's what sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="group flex flex-col items-center rounded-2xl bg-primary-foreground/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/15"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20 text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                <feat.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">{feat.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
