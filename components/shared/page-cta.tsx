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
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden border-t border-border"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[0.92] mb-5 text-balance">
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
            <p className="text-muted-foreground text-sm leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-md bg-ember text-cream hover:bg-ember-light transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-medium rounded-md border border-border hover:border-ember/50 hover:text-ember transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
