"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const pillars = [
  { value: "Custom",     label: "Built Software"   },
  { value: "Web",        label: "& Mobile"         },
  { value: "Clean",      label: "Architecture"     },
  { value: "End-to-End", label: "Delivery"         },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — fine grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.97 0.005 90 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.005 90 / 0.15) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-16 text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3.5rem,10vw,8rem)] font-semibold tracking-[-0.04em] leading-[0.85] mb-8"
        >
          <span className="block text-balance text-foreground">We Build</span>
          <span className="block text-balance text-ember">Digital</span>
          <span className="block text-balance text-foreground">Excellence</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed text-pretty"
        >
        Building world-class software, intelligent automation, and digital experiences for businesses shaping the future.
                </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-ember text-cream hover:bg-ember-light transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-md border border-border hover:border-ember/50 hover:text-ember transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Capability pillars */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-md overflow-hidden bg-border"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="flex flex-col items-center justify-center py-8 px-4 min-h-[64px] bg-card/40 hover:bg-card/60 transition-colors duration-300"
            >
              <span className="text-lg sm:text-xl font-bold text-ember leading-none mb-2 tracking-tight">
                {pillar.value}
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-mono">
                {pillar.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
