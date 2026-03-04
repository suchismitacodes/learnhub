import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedCourses } from "@/components/featured-courses"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
