"use client"

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { caseStudies } from "@/lib/data/case-studies"
import { ScrollRevealText, Reveal } from "@/components/shared/decor"

const partners = [
  { slug: "hamba-tours", name: "Hamba Ethiopia Tours", logo: "/partners/hamba.png" },
  { slug: "gonder-simien-tours", name: "Gonder Simien Tours", logo: "/partners/gonder-simien.png", round: true },
  { slug: "ethioafro-tours", name: "EthioAfro Tours", logo: "/partners/ethioafro.png" },
  { slug: "afar-horizon-expeditions", name: "Afar Horizon Expeditions", logo: "/partners/afar-horizon.png" },
  { slug: "simien-ethiopia-tours", name: "Simien Ethiopia Tours", logo: "/partners/simien-ethiopia.png", round: true },
  { slug: "extraordinary-ethiopia-tours", name: "Extraordinary Ethiopia Tours", logo: "/partners/extraordinary-ethiopia.png", round: true },
  { slug: "ethio-origins-tour", name: "Ethio Origins Tour", logo: "/partners/ethio-origins.png" },
]

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "Flutter", "React Native",
  "PostgreSQL", "MongoDB", "Redis", "Supabase", "Docker", "AWS", "Vercel", "Figma",
]

const stats = [
  { value: caseStudies.length, suffix: "+", label: ["Projects", "Delivered"] },
  { value: new Set(caseStudies.map(s => s.industry)).size, suffix: "", label: ["Industries", "Served"] },
  { value: partners.length, suffix: "", label: ["Partner", "Brands"] },
  { value: 100, suffix: "%", label: ["Custom", "Built Code"] },
]

function Counter({ to, start }: { to: number; start: boolean }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => `${Math.round(v)}`)
  useEffect(() => {
    if (!start) return
    const controls = animate(count, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [start, to, count])
  return <motion.span>{rounded}</motion.span>
}

/* ═══ Full-bleed stats band ══════════════════════════════════════════════ */
export function StatsBand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} aria-label="Melba in numbers" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent)",
        }}
      />
      {/* soft ember glow + hairline highlight */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember opacity-[0.12] blur-[90px]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-6 md:py-12 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label.join(" ")}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-center justify-center gap-3 ${i > 0 ? "lg:border-l lg:border-white/10" : ""} ${i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""}`}
          >
            <span className="text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
              <Counter to={s.value} start={inView} />
              {s.suffix && <span className="text-ember">{s.suffix}</span>}
            </span>
            <span className="text-[11px] leading-tight text-white/60 sm:text-xs">
              {s.label[0]}<br />{s.label[1]}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ═══ Partner logo marquee ══════════════════════════════════════════════ */
function LogoChip({ p }: { p: (typeof partners)[number] }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      aria-label={`${p.name} — view case study`}
      className="group mx-3 flex shrink-0 items-center gap-3 rounded-full border border-border bg-white py-2 pl-2 pr-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-ember/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.logo}
        alt=""
        loading="lazy"
        className={`size-11 bg-white object-contain grayscale transition-all duration-500 group-hover:grayscale-0 ${p.round ? "rounded-full object-cover" : "rounded-lg"}`}
      />
      <span className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {p.name}
      </span>
    </Link>
  )
}

export function PartnersSection() {
  const loop = [...partners, ...partners]

  return (
    <section id="partners" className="relative overflow-hidden bg-background py-14 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
        <ScrollRevealText
          text="Brands that trust us to build what matters"
          accent="trust"
          className="mx-auto max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl"
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            We build lasting relationships with the people we work with — and treat every project as our own.
          </p>
        </Reveal>
      </div>

      {/* Row 1 — partner logos, left */}
      <div className="marquee-mask relative mt-14 overflow-hidden py-3">
        <div className="marquee-track flex w-max animate-marquee">
          {loop.map((p, i) => <LogoChip key={`${p.slug}-${i}`} p={p} />)}
          {loop.map((p, i) => <LogoChip key={`${p.slug}-b-${i}`} p={p} />)}
        </div>
      </div>

      {/* Row 2 — engineering stack, right */}
      <div className="marquee-mask relative mt-4 overflow-hidden py-2" aria-label="Technologies we use">
        <div className="flex w-max" style={{ animation: "marquee-rtl 50s linear infinite" }}>
          {[...stack, ...stack, ...stack, ...stack].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="mx-2 shrink-0 rounded-full border border-dashed border-border px-4 py-1.5 text-xs font-medium text-muted-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
