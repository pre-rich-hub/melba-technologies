"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollRevealText } from "@/components/shared/decor"

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We learn your business, users and constraints, then agree on scope and success metrics before any code is written.",
    outcome: "Clear scope & plan",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes first, then polished UI and a documented architecture — reviewed and approved by you before we build.",
    outcome: "Approved designs",
  },
  {
    n: "03",
    title: "Build",
    desc: "Two-week sprints with weekly demos and a live staging link, so you see real software instead of status reports.",
    outcome: "Working software, weekly",
  },
  {
    n: "04",
    title: "Launch & support",
    desc: "Production deployment, App Store and Google Play release, then 60 days of hands-on support after launch.",
    outcome: "Live, monitored product",
  },
]

/** "How we work" — the delivery process, from first call to post-launch support. */
export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ScrollRevealText
            text="How we take you from idea to launch"
            accent="launch"
            className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl"
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">
            One named technical lead and the same team from first call to launch day — no handoffs,
            no surprises.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6">
          {/* connecting line (desktop) */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-7 right-[12%] top-7 hidden origin-left border-t border-dashed border-border lg:block"
          />
          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
              className="relative"
            >
              <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-border bg-white text-sm font-bold text-foreground shadow-soft ring-8 ring-background">
                {step.n}
              </span>
              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              <p className="mt-4 border-t border-border-subtle pt-4 text-xs font-medium text-foreground">
                <span className="text-muted-foreground">You get: </span>
                {step.outcome}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 md:mt-16">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft"
          >
            Start with a discovery call
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
