"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { Service } from "@/lib/data/services"
import { FaqList } from "@/components/shared/faq-list"

// Optional sections for service pages that define them (audience / included / pricing / faqs).
// Existing services define none of these, so their pages render exactly as before.
export function ServiceExtras({ service }: { service: Service }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const { audience, included, pricing, faqs } = service

  return (
    <>
      {(audience || included) && (
        <section className="py-16 md:py-20 lg:py-24 border-t border-border" style={{ background: "var(--section-alt)" }} ref={ref}>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {audience && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Who It&apos;s For</p>
                  <h2 className="text-3xl font-semibold tracking-tight leading-[0.92] mb-8">Built For</h2>
                  <div className="space-y-4">
                    {audience.map((item, i) => (
                      <div key={i} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="w-[3px] rounded-full bg-ember flex-shrink-0 opacity-70 mt-1" style={{ height: "1.1em" }} />
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {included && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">What&apos;s Included</p>
                  <h2 className="text-3xl font-semibold tracking-tight leading-[0.92] mb-8">In Every Project</h2>
                  <div className="space-y-4">
                    {included.map((item, i) => (
                      <div key={i} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="w-[3px] rounded-full bg-ember flex-shrink-0 opacity-70 mt-1" style={{ height: "1.1em" }} />
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {pricing && (
        <section className="py-16 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Pricing Approach</p>
            <h2 className="text-3xl font-semibold tracking-tight leading-[0.92] mb-6">How Pricing Works</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{pricing}</p>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && <FaqList faqs={faqs} />}
    </>
  )
}
