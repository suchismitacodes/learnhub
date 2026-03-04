"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How are courses so affordable?",
    answer:
      "We cut out the middlemen and keep our platform lean. Our instructors partner directly with us, and we pass the savings on to students. No investors demanding crazy margins here.",
  },
  {
    question: "Do I get lifetime access to a course after purchasing?",
    answer:
      "Yes, absolutely. Once you enroll, the course is yours forever. Re-watch lectures, re-download resources, and access future updates to that course at no extra cost.",
  },
  {
    question: "Can I get a refund if a course isn't right for me?",
    answer:
      "We offer a 7-day refund policy on all courses. If you're not satisfied within the first week after purchase, just reach out and we'll process your refund -- no questions asked.",
  },
  {
    question: "Are certificates provided after course completion?",
    answer:
      "Yes. Every course comes with a completion certificate that you can download, share on LinkedIn, or add to your resume. Employers across India recognise LearnHub certificates.",
  },
  {
    question: "How do I become an instructor on LearnHub?",
    answer:
      "We're always looking for passionate educators. Apply through our 'Teach on LearnHub' page with a sample lesson and your credentials. Our team reviews applications within 5 business days.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, debit/credit cards, net banking, and popular wallets like Paytm and PhonePe. All payments are processed securely through Razorpay.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-card py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            FAQs
          </p>
          <h2 id="faq-heading" className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Got Questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Here are answers to the ones we hear most.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
