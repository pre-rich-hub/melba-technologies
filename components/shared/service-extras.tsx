"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { Service } from "@/lib/data/services"
import { FaqList } from "@/components/shared/faq-list"
import { Check } from "lucide-react"

// Optional sections for service pages that define them (audience / included / pricing / faqs).
// Existing services define none of these, so their pages render exactly as before.
export function ServiceExtras({ service }: { service: Service }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const { audience, included, pricing, faqs } = service

  return (
    <>
      {(audience || included) && (
        <section className="bg-background py-16 md:py-24 lg:py-28" ref={ref}>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 [&>*]:min-w-0 [&>*]:rounded-[2rem] [&>*]:border [&>*]:border-border-subtle [&>*]:bg-white [&>*]:p-8 [&>*]:shadow-soft sm:[&>*]:p-10">
              {audience && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft shadow-soft before:size-1.5 before:shrink-0 before:rounded-full before:bg-ember before:content-[''] mb-5">Who It&apos;s For</p>
                  <h2 className="text-3xl font-bold tracking-tight leading-[1.08] mb-8">Built For</h2>
                  <div className="space-y-4">
                    {audience.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ember-soft text-ember"><Check className="size-3.5" strokeWidth={3} /></span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {included && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}>
                  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft shadow-soft before:size-1.5 before:shrink-0 before:rounded-full before:bg-ember before:content-[''] mb-5">What&apos;s Included</p>
                  <h2 className="text-3xl font-bold tracking-tight leading-[1.08] mb-8">In Every Project</h2>
                  <div className="space-y-4">
                    {included.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ember-soft text-ember"><Check className="size-3.5" strokeWidth={3} /></span>
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
        <section className="bg-background px-4 pb-24 sm:px-6 lg:px-8">
          <div className="sky-backdrop mx-auto max-w-7xl rounded-[2rem] px-8 py-12 shadow-soft ring-1 ring-border-subtle sm:px-12">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft shadow-soft before:size-1.5 before:shrink-0 before:rounded-full before:bg-ember before:content-[''] mb-5">Pricing Approach</p>
            <h2 className="text-3xl font-bold tracking-tight leading-[1.08] mb-6">How Pricing Works</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{pricing}</p>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && <FaqList faqs={faqs} />}
    </>
  )
}
