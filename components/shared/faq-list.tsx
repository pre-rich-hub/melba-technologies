"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Faq } from "@/lib/data/faqs"

// Same markup and classes as the FAQ block on /contact so new pages look native.
// Answers stay in the HTML (hidden attribute) so crawlers and AI assistants can read them.
export function FaqList({ faqs, eyebrow = "FAQ", heading = "Common Questions" }: { faqs: Faq[]; eyebrow?: string; heading?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-20 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">{eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[0.92]">{heading}</h2>
        </motion.div>
        <div className="max-w-3xl divide-y divide-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="py-5"
            >
              <button
                className="w-full flex items-center justify-between gap-4 text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="text-sm font-semibold">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed" hidden={openFaq !== i}>
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
