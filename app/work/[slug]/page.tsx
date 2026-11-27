"use client"

import { notFound } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { use, useRef } from "react"
import { ArrowLeft, ArrowUpRight, ExternalLink, Target, Lightbulb, Building2, Layers, Clock, Globe } from "lucide-react"
import Link from "next/link"
import { PageCta } from "@/components/shared/page-cta"
import { BrowserFrame } from "@/components/shared/device-mockups"
import { Reveal, ScribbleUnderline } from "@/components/shared/decor"
import { WorkCard } from "@/components/shared/work-card"
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies"

const EASE = [0.16, 1, 0.3, 1] as const

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const caseStudy = getCaseStudyBySlug(slug)

  const shotRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: shotRef, offset: ["start end", "center center"] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [22, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])

  if (!caseStudy) notFound()

  const domain = new URL(caseStudy.liveUrl).hostname.replace("www.", "")
  const otherCases = caseStudies.filter((c) => c.slug !== slug).slice(0, 3)
  const meta = [
    { icon: Building2, label: "Client", value: caseStudy.title },
    { icon: Layers, label: "Industry", value: caseStudy.industry },
    { icon: Clock, label: "Timeline", value: caseStudy.timeline },
    { icon: Globe, label: "Live site", value: domain, href: caseStudy.liveUrl },
  ]

  return (
    <main>
      {/* ── Hero ── */}
      <section className="sky-backdrop relative overflow-hidden pt-32 pb-40 md:pt-40 md:pb-56">
        <div aria-hidden className="cloud left-[-8%] top-[24%] h-40 w-[32rem] opacity-80" />
        <div aria-hidden className="cloud right-[-10%] top-[4%] h-36 w-[26rem] opacity-90" style={{ animationDelay: "-7s" }} />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-soft ring-1 ring-border-subtle backdrop-blur transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="relative inline-block">
              {caseStudy.title}
              <ScribbleUnderline className="-bottom-2 h-4" delay={0.8} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            {caseStudy.overview}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              Visit live site
              <span className="flex size-6 items-center justify-center rounded-full bg-ember">
                <ExternalLink className="size-3.5" />
              </span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-foreground/15 bg-white/80 px-7 py-4 text-sm font-semibold backdrop-blur transition-all duration-300 hover:border-foreground/40 hover:bg-white"
            >
              Start a similar project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Screenshot rising out of the hero ── */}
      <section className="relative z-10 -mt-28 px-4 sm:px-6 md:-mt-40 lg:px-8">
        <div ref={shotRef} className="mx-auto max-w-6xl [perspective:1600px]">
          <motion.div style={{ rotateX, scale }} className="origin-top">
            <BrowserFrame src={caseStudy.thumbnail} alt={`${caseStudy.title} live platform`} url={domain} priority />
          </motion.div>
        </div>

        {/* Meta cards */}
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {meta.map((m, i) => {
            const body = (
              <>
                <span className="hidden size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-soft sm:flex">
                  <m.icon className="size-[18px]" strokeWidth={1.75} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{m.label}</span>
                  <span className="block text-[13px] font-semibold leading-snug text-foreground [overflow-wrap:anywhere] sm:text-sm">{m.value}</span>
                </span>
              </>
            )
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                {m.href ? (
                  <a href={m.href} target="_blank" rel="noopener noreferrer" className="flex h-full items-center gap-3 rounded-2xl border border-border-subtle bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift">
                    {body}
                  </a>
                ) : (
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-border-subtle bg-white p-4 shadow-soft">{body}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Challenge / Solution ── */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          {[
            { icon: Target, badge: "The challenge", text: caseStudy.challenge, tone: "bg-white" },
            { icon: Lightbulb, badge: "Our solution", text: caseStudy.solution, tone: "sky-backdrop" },
          ].map((b, i) => (
            <Reveal key={b.badge} delay={i * 0.1} className={`rounded-[2rem] p-8 shadow-soft ring-1 ring-border-subtle sm:p-10 ${b.tone}`}>
              <div className="flex items-center gap-3">
                <span className={`flex size-11 items-center justify-center rounded-2xl ${i === 0 ? "bg-section-alt text-foreground" : "bg-ember text-white"}`}>
                  <b.icon className="size-5" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight">{b.badge}</h2>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Deliverables */}
        <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-5 text-sm font-semibold text-foreground">What we delivered</p>
            <div className="flex flex-wrap gap-2.5">
              {caseStudy.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                  className="cursor-default rounded-full border border-border-subtle bg-white px-4 py-2 text-sm font-medium shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:bg-ember-soft hover:text-ember"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── More work ── */}
      <section className="bg-section-alt py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <Reveal delay={0.08}>
                <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">Keep exploring</h2>
              </Reveal>
            </div>
            <Link href="/work" className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold">
              View all
              <span className="flex size-6 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {otherCases.map((cs, i) => (
              <WorkCard key={cs.slug} project={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Build Something Exceptional?"
        subtitle="Let's create your next case study together."
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </main>
  )
}
