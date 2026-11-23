"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import type { Faq } from "@/lib/data/faqs"

// Same markup and classes as the FAQ block on /contact so new pages look native.
// Answers stay in the HTML (hidden attribute) so crawlers and AI assistants can read them.
export function FaqList({ faqs, eyebrow = "FAQ", heading = "Common Questions" }: { faqs: Faq[]; eyebrow?: string; heading?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 lg:py-32" ref={ref}>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft shadow-soft before:size-1.5 before:shrink-0 before:rounded-full before:bg-ember before:content-['']">{eyebrow}</p>
          <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{heading}</h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
            Maybe your question has been answered already — check these out.
          </p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openFaq === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`rounded-2xl border bg-white transition-all duration-300 ${open ? "border-ember/30 shadow-lift" : "border-border-subtle shadow-soft hover:shadow-lift"}`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="text-[15px] font-semibold">{faq.q}</span>
                  <span className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open ? "rotate-90 bg-ember text-white" : "bg-section-alt text-foreground"}`}>
                    <ArrowRight className="size-4" />
                  </span>
                </button>
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground" hidden={!open}>
                  {faq.a}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
