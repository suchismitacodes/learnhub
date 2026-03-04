"use client"

import { useState, useEffect } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path
        d="M8 22V10h2.4v10.2h5.4V22H8Z"
        className="fill-primary-foreground"
      />
      <path
        d="M17 16h7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="stroke-accent"
      />
      <path
        d="M17 12h5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="stroke-primary-foreground"
      />
      <path
        d="M17 20h6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="stroke-primary-foreground"
      />
    </svg>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-card/90 shadow-sm backdrop-blur-xl"
          : "bg-card/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="LearnHub Home">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Learn<span className="text-primary">Hub</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          <a href="#courses" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Courses
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Reviews
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQs
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Log In
          </Button>
          <Button size="sm" className="rounded-full px-5">Get Started</Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-card transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-4 pt-3" aria-label="Mobile navigation">
          <a href="#courses" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
            Courses
          </a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
            About
          </a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
            Reviews
          </a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
            FAQs
          </a>
          <div className="mt-2 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">Log In</Button>
            <Button size="sm" className="flex-1 rounded-full">Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
