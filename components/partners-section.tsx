"use client"

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { caseStudies } from "@/lib/data/case-studies"

const partners = [
  { slug: "hamba-tours", name: "Hamba Ethiopia Tours", logo: "/partners/hamba.png", tint: "oklch(0.95 0.03 80)" },
  { slug: "gonder-simien-tours", name: "Gonder Simien Tours", logo: "/partners/gonder-simien.png", tint: "oklch(0.95 0.03 150)", round: true },
  { slug: "ethioafro-tours", name: "EthioAfro Tours", logo: "/partners/ethioafro.png", tint: "oklch(0.95 0.03 60)" },
  { slug: "afar-horizon-expeditions", name: "Afar Horizon Expeditions", logo: "/partners/afar-horizon.png", tint: "oklch(0.96 0.03 70)" },
  { slug: "simien-ethiopia-tours", name: "Simien Ethiopia Tours", logo: "/partners/simien-ethiopia.png", tint: "oklch(0.96 0.02 90)", round: true },
  { slug: "extraordinary-ethiopia-tours", name: "Extraordinary Ethiopia Tours", logo: "/partners/extraordinary-ethiopia.png", tint: "oklch(0.96 0.03 100)", round: true },
  { slug: "ethio-origins-tour", name: "Ethio Origins Tour", logo: "/partners/ethio-origins.png", tint: "oklch(0.95 0.04 150)" },
]

const stats = [
  { value: caseStudies.length, suffix: "+", label: "Projects delivered" },
  { value: new Set(caseStudies.map(s => s.industry)).size, suffix: "", label: "Industries served" },
  { value: partners.length, suffix: "", label: "Partner brands" },
]

function Counter({ to, suffix, start }: { to: number; suffix: string; start: boolean }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => `${Math.round(v)}${suffix}`)
  useEffect(() => {
    if (!start) return
    const controls = animate(count, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [start, to, count])
  return <motion.span>{rounded}</motion.span>
}

export function PartnersSection() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" })
  const panelRef = useRef(null)
  const panelInView = useInView(panelRef, { once: true, margin: "-80px" })

  return (
    <section id="partners" className="relative overflow-hidden bg-[oklch(0.11_0.004_260)] text-[oklch(0.98_0.003_90)]">
      {/* Ambient ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--ember), transparent)" }}
      />

      {/* ── Stats ── */}
      <div ref={statsRef} className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-40 md:pb-52">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed text-white/60 max-w-sm italic"
          >
            We strategize, design and build digital platforms that turn attention into enquiries.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-balance"
          >
            Intentionally<br />Designed <span className="text-ember italic font-light">Solutions.</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.06 }}
              className={`group relative flex size-36 sm:size-44 md:size-52 flex-col items-center justify-center rounded-full border transition-colors duration-500 ${
                i === 1
                  ? "border-white/15 bg-gradient-to-b from-white/[0.09] to-white/[0.02] shadow-[0_30px_80px_-20px_rgb(0,0,0,0.8),inset_0_1px_0_rgb(255,255,255,0.12)]"
                  : "border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05]"
              }`}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-light italic tracking-tight tabular-nums">
                <Counter to={s.value} suffix={s.suffix} start={statsInView} />
              </span>
              <span className={`mt-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] ${i === 1 ? "text-white/80" : "text-white/45"}`}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Partners panel (rises over the dark band) ── */}
      <motion.div
        ref={panelRef}
        initial={{ y: 80 }}
        animate={panelInView ? { y: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative -mt-24 md:-mt-32 rounded-t-[2rem] md:rounded-t-[3rem] bg-background text-foreground border-t border-border dark:border-white/10"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={panelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">
              Who we build with
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
              Our{" "}
              <span className="relative inline-block text-muted-foreground/40 font-light">
                clients
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={panelInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                  className="absolute left-0 right-0 top-[55%] h-[3px] origin-left bg-muted-foreground/50"
                />
              </span>{" "}
              <span className="italic font-light text-ember">partners</span>
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              We create strong bonds with the people we work with and{" "}
              <span className="text-foreground font-medium">treat every project</span>{" "}
              <span className="italic">as our own.</span>
            </p>
          </motion.div>

          {/* Bubbles: overlapping row on desktop, wrapped grid on mobile */}
          <ul className="mt-16 md:mt-24 grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center lg:flex lg:items-center lg:justify-center lg:gap-0">
            {partners.map((p, i) => (
              <motion.li
                key={p.slug}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={panelInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.35 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative lg:-ml-6 first:ml-0 hover:z-20 focus-within:z-20"
                style={{ zIndex: partners.length - i }}
              >
                <Link
                  href={`/work/${p.slug}`}
                  aria-label={`${p.name} — view case study`}
                  className="group relative flex size-24 sm:size-32 lg:size-40 xl:size-44 items-center justify-center rounded-full border border-black/5 shadow-[0_10px_40px_-12px_rgb(0,0,0,0.25),inset_0_2px_6px_rgb(255,255,255,0.9)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.28] focus-visible:scale-[1.28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                  style={{ background: `radial-gradient(circle at 30% 25%, white, ${p.tint} 70%)` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    loading="lazy"
                    className={`size-[62%] mix-blend-multiply ${p.round ? "rounded-full object-cover" : "object-contain"} transition-transform duration-500 group-hover:-translate-y-2`}
                  />
                  <span className="absolute bottom-[12%] hidden lg:flex items-center gap-1 rounded-full bg-foreground/90 px-2 py-1 text-[7px] font-mono uppercase tracking-[0.14em] text-background opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100">
                    <ArrowUpRight className="size-2.5" />
                    View partner
                  </span>
                </Link>
                <p className="mt-3 text-center text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:hidden">
                  {p.name}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
