"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionBadge, SparkDoodle, ScribbleUnderline, Reveal } from "@/components/shared/decor"
import { Shield, Zap, Eye, Users, BarChart3, Globe } from "lucide-react"

/* soft "illustrated" tile tints, one per card */
const tints = [
  "from-[oklch(0.95_0.05_55)] to-[oklch(0.90_0.09_45)] text-[oklch(0.52_0.17_40)]",
  "from-[oklch(0.95_0.03_250)] to-[oklch(0.88_0.07_255)] text-[oklch(0.45_0.14_260)]",
  "from-[oklch(0.95_0.04_160)] to-[oklch(0.88_0.08_160)] text-[oklch(0.45_0.11_160)]",
  "from-[oklch(0.95_0.04_300)] to-[oklch(0.89_0.07_300)] text-[oklch(0.47_0.14_300)]",
  "from-[oklch(0.96_0.05_90)] to-[oklch(0.90_0.10_85)] text-[oklch(0.50_0.12_75)]",
  "from-[oklch(0.95_0.03_210)] to-[oklch(0.88_0.07_210)] text-[oklch(0.45_0.10_220)]",
]

const advantages = [
  {
    icon: Zap,
    title: "Strategic Engineering",
    description: "Every system we design starts with your business model. Technology follows strategy, not the other way around.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "Weekly demos, clear milestones, honest timelines. You always know exactly where your project stands.",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description: "Security is a design constraint, not a post-launch audit. We embed it from the first whiteboard session.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description: "We don't disappear post-launch. Every engagement includes a 60-day support window and ongoing options.",
  },
  {
    icon: BarChart3,
    title: "Performance by Default",
    description: "We obsess over load times, Core Web Vitals, and error rates — because performance is a feature, not a phase.",
  },
  {
    icon: Globe,
    title: "Built to Scale",
    description: "Architecture that grows with your business — from first launch to whatever comes next, without rewrites.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-section-alt py-16 md:py-24 lg:py-32">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16 lg:px-8">
        {/* Heading column */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionBadge>Why Melba</SectionBadge>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="relative mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              <SparkDoodle className="absolute -left-8 -top-6 w-8 -scale-x-100 text-ember" />
              Built for the{" "}
              <span className="relative inline-block">
                demanding few
                <ScribbleUnderline className="-bottom-2 h-3.5" delay={0.4} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
              We work with clients who refuse to compromise — on quality, on scale, or on the long-term health of their systems.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              How we work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Advantages */}
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-12 xl:grid-cols-3">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex gap-5 sm:block"
            >
              <div className={`relative flex size-14 shrink-0 items-center justify-center rounded-[1.1rem] sm:size-16 sm:rounded-[1.25rem] bg-gradient-to-br shadow-[inset_0_-6px_12px_rgb(0_0_0/0.06),inset_0_2px_4px_rgb(255_255_255/0.9),0_14px_28px_-14px_rgb(0_0_0/0.25)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] ${tints[i % tints.length]}`}>
                <item.icon className="size-7" strokeWidth={1.8} />
                <span className="absolute -right-1 -top-1 size-3 rounded-full bg-white shadow-soft" />
              </div>
              <div><h3 className="text-lg font-semibold sm:mt-6">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">{item.description}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
