"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1600
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  )
}

const stats = [
  { value: 10000, suffix: "+", label: "Active Students" },
  { value: 200, suffix: "+", label: "Courses" },
  { value: 50, suffix: "+", label: "Expert Instructors" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle decorative dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Courses starting at just ₹100
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Learn Without{" "}
            <span className="relative inline-block text-primary">
              Limits
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6c40-4 80-4 120-2s56 2 76-1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent" />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Expert-led courses from ₹100 with lifetime access. Master new skills,
            advance your career, and join a community of thousands of learners across India.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <Button size="lg" className="gap-2 rounded-full px-8 text-base shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30">
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="gap-2 text-base text-muted-foreground hover:text-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                <Play className="h-3.5 w-3.5 fill-foreground text-foreground" />
              </div>
              Watch Demo
            </Button>
          </div>

          {/* Animated stats */}
          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-illustration.jpg"
              alt="Students studying together with laptops"
              fill
              className="object-cover"
              priority
            />
            {/* Floating accent card */}
            <div className="absolute -bottom-2 -left-2 rounded-xl border border-border bg-card p-3 shadow-lg sm:bottom-4 sm:left-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">4.8 Avg Rating</p>
                  <p className="text-[10px] text-muted-foreground">From 5,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
