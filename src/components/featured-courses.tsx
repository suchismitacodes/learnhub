"use client"

import { useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "Python for Absolute Beginners",
    instructor: "Priya Sharma",
    price: 149,
    originalPrice: 999,
    rating: 4.8,
    reviews: 1243,
    hours: 18,
    tag: "Bestseller",
    accent: "bg-primary/10 text-primary",
    stripe: "bg-primary",
  },
  {
    title: "Web Development Bootcamp",
    instructor: "Rahul Mehta",
    price: 129,
    originalPrice: 899,
    rating: 4.7,
    reviews: 982,
    hours: 24,
    tag: "Popular",
    accent: "bg-accent/10 text-accent",
    stripe: "bg-accent",
  },
  {
    title: "Data Science with R",
    instructor: "Ananya Reddy",
    price: 119,
    originalPrice: 799,
    rating: 4.6,
    reviews: 567,
    hours: 14,
    tag: "New",
    accent: "bg-amber-100 text-amber-700",
    stripe: "bg-amber-500",
  },
  {
    title: "UI/UX Design Fundamentals",
    instructor: "Karan Patel",
    price: 139,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 2104,
    hours: 20,
    tag: "Top Rated",
    accent: "bg-rose-100 text-rose-700",
    stripe: "bg-rose-500",
  },
  {
    title: "GATE CS Preparation",
    instructor: "Dr. Suresh Iyer",
    price: 149,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 1876,
    hours: 40,
    tag: "Bestseller",
    accent: "bg-primary/10 text-primary",
    stripe: "bg-primary",
  },
  {
    title: "Digital Marketing A-Z",
    instructor: "Neha Gupta",
    price: 109,
    originalPrice: 699,
    rating: 4.5,
    reviews: 734,
    hours: 12,
    tag: "Popular",
    accent: "bg-accent/10 text-accent",
    stripe: "bg-accent",
  },
]

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
          />
        ))}
      </div>
      <span className="text-xs font-semibold text-foreground">{rating}</span>
      <span className="text-xs text-muted-foreground">({reviews > 1000 ? `${(reviews / 1000).toFixed(1)}k` : reviews})</span>
    </div>
  )
}

export function FeaturedCourses() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <section id="courses" className="bg-background py-16 lg:py-24" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Featured
            </p>
            <h2 id="featured-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Top Courses Under ₹150
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Hand-picked by our team. Trusted by thousands.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4"
          role="list"
        >
          {courses.map((course) => (
            <article
              key={course.title}
              role="listitem"
              className="group flex w-[300px] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Color stripe top */}
              <div className={`h-1.5 ${course.stripe}`} />

              <div className="relative flex h-36 items-center justify-center bg-secondary">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${course.accent}`}>
                  {course.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1.5 line-clamp-2 text-sm font-semibold leading-snug text-foreground">
                  {course.title}
                </h3>
                <p className="mb-3 text-xs text-muted-foreground">{course.instructor}</p>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <StarRating rating={course.rating} reviews={course.reviews} />
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {course.hours} hours
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-foreground">₹{course.price}</span>
                    <span className="text-xs text-muted-foreground line-through">₹{course.originalPrice}</span>
                  </div>
                  <Button size="sm" className="h-8 rounded-full px-4 text-xs shadow-sm">
                    Enroll
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
