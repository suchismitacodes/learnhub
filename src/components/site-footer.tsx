import { Button } from "@/components/ui/button"

const footerLinks = {
  Platform: ["Browse Courses", "Become an Instructor", "Pricing", "Blog"],
  Support: ["Help Center", "Contact Us", "FAQs", "Accessibility"],
  Legal: ["Terms of Service", "Privacy Policy", "Refund Policy"],
}

const socials = [
  { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.83 1.08A4.48 4.48 0 0016.11 0c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.11 1.03C7.73 5.33 4.1 3.47 1.67.9A4.5 4.5 0 003 6.54a4.46 4.46 0 01-2.04-.56v.05a4.5 4.5 0 003.6 4.41 4.5 4.5 0 01-2.03.08 4.5 4.5 0 004.2 3.13A9.02 9.02 0 010 19.54a12.72 12.72 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19 0-.39-.01-.58A9.14 9.14 0 0023 3z" },
  { label: "Instagram", path: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a.88.88 0 110 1.76.88.88 0 010-1.76z" },
  { label: "YouTube", path: "M19.61 3.18A2.73 2.73 0 0121.5 5.1C22 6.72 22 12 22 12s0 5.28-.5 6.9a2.73 2.73 0 01-1.89 1.92C18.12 21.5 12 21.5 12 21.5s-6.12 0-7.61-.68a2.73 2.73 0 01-1.89-1.92C2 17.28 2 12 2 12s0-5.28.5-6.9A2.73 2.73 0 014.39 3.18C5.88 2.5 12 2.5 12 2.5s6.12 0 7.61.68zM10 15.5l5.5-3.5L10 8.5v7z" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative -mt-px overflow-hidden rounded-b-2xl bg-primary px-6 py-10 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
          <div className="relative">
            <h3 className="text-balance text-2xl font-bold text-primary-foreground md:text-3xl">
              Ready to start learning?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-primary-foreground/70">
              Join 10,000+ students already learning on LearnHub. Your first course is just ₹100 away.
            </p>
            <Button size="lg" variant="secondary" className="mt-6 rounded-full px-8 font-semibold">
              Get Started for Free
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="mb-4 flex items-center gap-2.5" aria-label="LearnHub Home">
              <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" aria-hidden="true">
                <rect width="32" height="32" rx="8" className="fill-primary" />
                <path d="M8 22V10h2.4v10.2h5.4V22H8Z" className="fill-primary-foreground" />
                <path d="M17 16h7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="stroke-accent" />
                <path d="M17 12h5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="stroke-primary-foreground" />
                <path d="M17 20h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="stroke-primary-foreground" />
              </svg>
              <span className="text-xl font-bold text-foreground">
                Learn<span className="text-primary">Hub</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Making quality education accessible for every student in India.
              Learn anything, anytime -- from just ₹100.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={s.label}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">{heading}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} LearnHub. All rights reserved. Made with care in India.
        </div>
      </div>
    </footer>
  )
}
