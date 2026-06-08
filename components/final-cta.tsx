"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-28 lg:py-32 overflow-hidden border-t border-border"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-[0.90] mb-8"
        >
          <span className="block text-balance text-foreground">Ready to modernize your business</span>
          <span className="block text-balance text-ember">with digital systems?</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="text-base text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed"
        >
          We turn ideas into maintainable production systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-sm font-semibold rounded-md bg-ember text-cream hover:bg-ember-light transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-sm font-medium rounded-md border border-border text-foreground hover:border-ember/50 hover:text-ember transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-14 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/75 font-mono"
        >
          Every system engineered to production standard &nbsp;&middot;&nbsp; No exceptions
        </motion.p>
      </div>
    </section>
  )
}
