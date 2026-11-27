"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, BellRing, CreditCard, Star, Layers, WifiOff, Smartphone, Store } from "lucide-react"
import { AnimatedPhone, FloatingCard } from "@/components/shared/device-mockups"
import { LoopLine, SparkDoodle, ScribbleUnderline, Reveal } from "@/components/shared/decor"

const features = [
  { icon: Layers, title: "One codebase, two platforms", desc: "iOS and Android with Flutter or React Native." },
  { icon: BellRing, title: "Push & real-time", desc: "Notifications, live updates and in-app messaging." },
  { icon: WifiOff, title: "Offline-ready", desc: "Apps that keep working when the network doesn't." },
  { icon: Store, title: "Store launch included", desc: "App Store and Google Play submission, handled." },
]

export function MobileShowcase() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const frontY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const backY = useTransform(scrollYProgress, [0, 1], [140, -40])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-30, 60])
  const innerRingRotate = useTransform(ringRotate, v => -v * 1.4)

  return (
    <section ref={ref} id="mobile" className="relative overflow-hidden bg-section-alt py-16 md:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* ── Phones ── */}
        <div className="relative order-2 mx-auto flex h-[470px] w-full max-w-[520px] items-center justify-center sm:h-[620px] lg:order-1">
          {/* soft backdrop */}
          <div aria-hidden className="absolute size-[420px] rounded-full bg-[radial-gradient(circle,var(--sky)_0%,transparent_70%)] sm:size-[520px]" />
          <div aria-hidden className="absolute size-[260px] translate-x-16 translate-y-20 rounded-full bg-[radial-gradient(circle,var(--ember-soft)_0%,transparent_70%)]" />

          {/* orbit rings */}
          <motion.div aria-hidden style={{ rotate: ringRotate }} className="absolute size-[360px] rounded-full border border-dashed border-foreground/10 sm:size-[460px]">
            <span className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-ember shadow-[0_0_0_6px_var(--ember-soft)]" />
            <span className="absolute bottom-[14%] left-[3%] size-2 rounded-full bg-ink/70" />
          </motion.div>
          <motion.div aria-hidden style={{ rotate: innerRingRotate }} className="absolute size-[250px] rounded-full border border-foreground/[0.07] sm:size-[320px]">
            <span className="absolute -right-1 top-1/2 size-2.5 rounded-full bg-[oklch(0.7_0.12_250)]" />
          </motion.div>

          <LoopLine className="absolute -right-6 top-6 w-64 text-ember/40" />

          {/* back phone */}
          <motion.div
            style={{ y: backY }}
            initial={{ opacity: 0, rotate: 14 }}
            whileInView={{ opacity: 1, rotate: 9 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[50%] top-[8%] w-[135px] opacity-90 sm:left-[54%] sm:top-[10%] sm:w-[200px]"
          >
            <AnimatedPhone startIndex={1} interval={3900} />
          </motion.div>

          {/* front phone */}
          <motion.div
            style={{ y: frontY }}
            initial={{ opacity: 0, rotate: -10, scale: 0.92 }}
            whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 -ml-16 w-[180px] sm:-ml-28 sm:w-[255px]"
          >
            <AnimatedPhone />
          </motion.div>

          <FloatingCard icon={BellRing} title="New booking confirmed" subtitle="just now" className="left-0 top-[2%] sm:-left-6 sm:top-[14%]" delay={0.4} />
          <FloatingCard icon={CreditCard} title="Payment successful" subtitle="Secure checkout" className="bottom-[6%] right-0 sm:bottom-[16%] sm:-right-4" delay={0.6} floatDelay={2} />
          <FloatingCard icon={Star} title="Smooth, native feel" subtitle="Fluid 60 fps UI" className="bottom-[4%] left-[6%] hidden sm:block" delay={0.8} floatDelay={4} />
        </div>

        {/* ── Copy ── */}
        <div className="order-1 lg:order-2">
          <Reveal delay={0.08}>
            <h2 className="relative text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              Mobile apps your customers{" "}
              <span className="relative inline-block whitespace-nowrap">
                love to open
                <ScribbleUnderline className="-bottom-2 h-3.5" delay={0.5} />
              </span>
              <SparkDoodle className="absolute -top-7 right-4 w-9 text-ember" />
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              From first sketch to the app stores — we design and build native-quality mobile
              experiences that feel fast, look polished and keep people coming back.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.2 + i * 0.07}>
                <div className="group h-full rounded-2xl border border-border-subtle bg-white p-4 shadow-soft sm:p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-soft transition-colors duration-300 group-hover:border-ember/40 group-hover:text-ember">
                    <f.icon className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold leading-snug sm:mt-4 sm:text-[15px]">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/services/mobile-development"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                <Smartphone className="size-4" />
                Explore mobile development
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-sm text-muted-foreground">iOS · Android · Flutter · React Native</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
