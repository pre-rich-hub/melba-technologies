"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface PageCtaProps {
  title?: string
  highlight?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function PageCta({
  title = "Ready to Build Something Exceptional?",
  highlight = "Exceptional",
  subtitle = "Tell us about your project and we will schedule a free discovery call within 24 hours.",
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "/work",
}: PageCtaProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="sky-backdrop relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-14 shadow-soft ring-1 ring-border-subtle sm:px-10 md:rounded-[2.5rem] md:py-16 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] mb-5 text-balance">
              {highlight && title.split(highlight).length > 1 ? (
                <>
                  {title.split(highlight)[0]}
                  <span className="text-ember">{highlight}</span>
                  {title.split(highlight)[1]}
                </>
              ) : (
                title
              )}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold rounded-full bg-ink text-cream shadow-lift hover:bg-ink-soft hover:-translate-y-0.5 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold rounded-full border border-foreground/15 bg-white/80 hover:border-foreground/40 hover:bg-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
