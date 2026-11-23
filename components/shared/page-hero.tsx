"use client"

import { motion } from "framer-motion"
import { ScribbleUnderline, SparkDoodle, SectionBadge } from "@/components/shared/decor"

interface PageHeroProps {
  eyebrow:     string
  title:       string
  highlighted?: string
  titleAfter?: string
  description: string
  dark?:       boolean
}

// `dark` is kept for API compatibility; the site is light-only now.
export function PageHero({ eyebrow, title, highlighted, titleAfter, description }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20 sky-backdrop`}
    >
      <div aria-hidden className="cloud left-[-8%] top-[20%] h-40 w-[32rem] opacity-80" />
      <div aria-hidden className="cloud right-[-10%] top-[0%] h-36 w-[26rem] opacity-90" style={{ animationDelay: "-7s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge>{eyebrow}</SectionBadge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-7 mb-7 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-balance text-foreground sm:text-5xl lg:text-[4rem]"
        >
          {title}{" "}
          {highlighted && (
            <span className="relative inline-block">
              {highlighted}
              <ScribbleUnderline className="-bottom-1.5 h-3.5 sm:h-4" delay={0.7} />
              <SparkDoodle className="absolute -right-9 -top-6 hidden w-8 text-ember sm:block" delay={1} />
            </span>
          )}
          {titleAfter && ` ${titleAfter}`}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
