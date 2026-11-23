"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Check, Code2, Sparkles, PenTool, Cloud } from "lucide-react"
import { BrowserFrame, FloatingCard } from "@/components/shared/device-mockups"
import { SectionBadge } from "@/components/shared/decor"

const domains = [
  { icon: Code2, label: "Custom Software Development", desc: "Web apps, SaaS platforms and internal tools built to spec." },
  { icon: Sparkles, label: "AI & Automation", desc: "Agents, LLM integrations and automated business workflows." },
  { icon: PenTool, label: "UI/UX Design & Branding", desc: "Identity, product design and scalable design systems." },
  { icon: Cloud, label: "Cloud & DevOps", desc: "Resilient infrastructure, CI/CD and automated deployments." },
]

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)")
    const set = () => setDesktop(mq.matches)
    set()
    mq.addEventListener("change", set)
    return () => mq.removeEventListener("change", set)
  }, [])
  return desktop
}

/**
 * "Showcase" — on desktop the section pins while the product window slides to
 * the right and tilts in 3D, and the copy fades in on the left.
 */
export function TrustStrip() {
  const ref = useRef<HTMLElement>(null)
  const desktop = useIsDesktop()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  const x = useTransform(scrollYProgress, [0, 0.55], ["-34%", "0%"])
  const rotateY = useTransform(scrollYProgress, [0, 0.55], [0, -18])
  const rotateX = useTransform(scrollYProgress, [0, 0.55], [0, 6])
  const scale = useTransform(scrollYProgress, [0, 0.55], [1.08, 0.94])
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.6], [0, 1])
  const textX = useTransform(scrollYProgress, [0.25, 0.6], [-40, 0])

  return (
    <section ref={ref} className="relative bg-section-alt lg:h-[220vh]">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      <div className="relative lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 sm:px-6 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-6 lg:px-8 lg:py-0">
          {/* Copy */}
          <motion.div
            style={desktop ? { opacity: textOpacity, x: textX } : undefined}
            initial={desktop ? false : { opacity: 0, y: 24 }}
            whileInView={desktop ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <SectionBadge>What we engineer</SectionBadge>
            <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              Software that works,<br className="hidden sm:block" /> wherever your business is
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              One team across strategy, design and engineering — so what launches is fast, secure and
              ready to grow with you.
            </p>
            <ul className="mt-8 space-y-4">
              {domains.map(d => (
                <li key={d.label} className="flex gap-3.5">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-ember shadow-soft ring-1 ring-border-subtle">
                    <d.icon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{d.label}</span>
                    <span className="block text-sm text-muted-foreground">{d.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product window */}
          <div className="relative [perspective:1600px]">
            <motion.div
              style={desktop ? { x, rotateY, rotateX, scale } : undefined}
              initial={desktop ? false : { opacity: 0, y: 40 }}
              whileInView={desktop ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              className="relative origin-left [transform-style:preserve-3d]"
            >
              <BrowserFrame
                src="/thumbnails/ethioafro-tours-s.jpg"
                alt="EthioAfro Tours platform built by Melba Technology"
                url="ethioafrotours.com"
              />
              <div className="absolute -bottom-6 -left-4 hidden w-[46%] sm:block lg:-left-10">
                <BrowserFrame
                  src="/thumbnails/afar-horizon-s.jpg"
                  alt="Afar Horizon Expeditions website built by Melba Technology"
                  url="afarhorizon.com"
                  className="shadow-lift"
                />
              </div>
            </motion.div>
            <FloatingCard icon={Check} title="Performance-first" subtitle="Fast on every device" className="-right-2 -top-6 sm:right-4" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  )
}
