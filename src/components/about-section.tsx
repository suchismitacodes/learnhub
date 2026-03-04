"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Users, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make quality education accessible and affordable for every student in India, regardless of their background.",
  },
  {
    icon: Lightbulb,
    title: "How We Teach",
    description:
      "Bite-sized lessons, real-world projects, and hands-on practice. No fluff, no filler -- just what you actually need to learn.",
  },
  {
    icon: Users,
    title: "Our Community",
    description:
      "Join 10,000+ learners who support each other through discussion forums, study groups, and peer mentoring.",
  },
  {
    icon: Heart,
    title: "Student First",
    description:
      "Every decision we make starts with one question: does this help our students learn better and faster?",
  },
]

function FadeInCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-16 lg:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </p>
          <h2
            id="about-heading"
            className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Built by Students, for Students
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            LearnHub started in a college dorm with a simple idea: great education shouldn't
            cost a fortune. Three years later, we're one of India's fastest-growing learning
            platforms -- and we're just getting started.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeInCard key={v.title} index={i}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            </FadeInCard>
          ))}
        </div>
      </div>
    </section>
  )
}
