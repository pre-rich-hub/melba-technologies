"use client"

import { motion } from "framer-motion"

interface PageHeroProps {
  eyebrow:     string
  title:       string
  highlighted?: string
  titleAfter?: string
  description: string
  dark?:       boolean
}

export function PageHero({ eyebrow, title, highlighted, titleAfter, description, dark = false }: PageHeroProps) {
  return (
    <section
      className={`relative pt-32 pb-10 md:pt-36 md:pb-14 overflow-hidden ${dark ? "bg-card/40" : "bg-background"}`}
    >
      {dark && (
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-7"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.92] mb-8 text-balance max-w-4xl text-foreground"
        >
          {title}{" "}
          {highlighted && <span className="text-ember">{highlighted}</span>}
          {titleAfter && ` ${titleAfter}`}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="text-base leading-relaxed max-w-2xl text-muted-foreground"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 h-px origin-left bg-border"
        />
      </div>
    </section>
  )
}
