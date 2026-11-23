"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, BellRing, Rocket } from "lucide-react"
import { Reveal, SectionBadge, ScribbleUnderline, LoopLine } from "@/components/shared/decor"
import { AnimatedPhone, BrowserFrame, FloatingCard } from "@/components/shared/device-mockups"
import { WorkCard } from "@/components/shared/work-card"
import Link from "next/link"
import { PageCta } from "@/components/shared/page-cta"
import { ServiceExtras } from "@/components/shared/service-extras"
import { services, getServiceBySlug } from "@/lib/data/services"
import { caseStudies } from "@/lib/data/case-studies"
import { use } from "react"

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service  = getServiceBySlug(slug)

  if (!service) notFound()

  const relatedCases = caseStudies.filter((c) => service.relatedWork.includes(c.slug))
  const showcase = relatedCases[0] ?? caseStudies[0]
  const isMobile = slug.includes("mobile")
  const Icon = service.icon
  const EASE = [0.16, 1, 0.3, 1] as const

  return (
    <main>
      {/* ── Hero ── */}
      <section className="sky-backdrop relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="cloud left-[-8%] top-[22%] h-40 w-[32rem] opacity-80" />
        <div aria-hidden className="cloud right-[-10%] top-[2%] h-36 w-[26rem] opacity-90" style={{ animationDelay: "-7s" }} />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
          <div className="min-w-0">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-soft ring-1 ring-border-subtle backdrop-blur transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              All services
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-ember text-white shadow-lift">
                <Icon className="size-5" />
              </span>
              <SectionBadge>{service.tagline}</SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="mt-6 text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                Discuss this service
                <span className="flex size-6 items-center justify-center rounded-full bg-ember transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-white/80 px-7 py-4 text-sm font-semibold backdrop-blur transition-all duration-300 hover:border-foreground/40 hover:bg-white"
              >
                See our work
              </Link>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <LoopLine className="absolute -left-12 bottom-0 hidden w-72 text-ember/40 lg:block" delay={1} />
            {isMobile ? (
              <div className="relative flex h-[440px] items-center justify-center sm:h-[520px]">
                <div aria-hidden className="absolute size-[300px] rounded-full border border-dashed border-foreground/10 sm:size-[380px]" />
                <motion.div
                  initial={{ opacity: 0, y: 60, rotate: 12 }}
                  animate={{ opacity: 1, y: 0, rotate: 8 }}
                  transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
                  className="absolute left-[50%] top-[8%] w-[135px] sm:left-[52%] sm:w-[170px]"
                >
                  <AnimatedPhone startIndex={2} interval={3800} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 80, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: -5 }}
                  transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
                  className="relative z-10 -ml-16 w-[175px] sm:-ml-24 sm:w-[220px]"
                >
                  <AnimatedPhone />
                </motion.div>
                <FloatingCard icon={BellRing} title="Push notification" subtitle="Delivered instantly" className="left-0 top-[2%] sm:top-[12%]" delay={0.9} />
                <FloatingCard icon={Rocket} title="Live on both stores" subtitle="iOS · Android" className="bottom-[8%] right-0" delay={1.1} floatDelay={2} />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: 12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
                className="relative [perspective:1200px]"
              >
                <BrowserFrame
                  src={showcase.thumbnail}
                  alt={`${showcase.title} — built by Melba Technology`}
                  url={new URL(showcase.liveUrl).hostname.replace("www.", "")}
                  priority
                />
                <FloatingCard icon={Icon} title={service.tagline} className="-bottom-6 -left-4 max-w-[90%] sm:-left-8" delay={0.9} />
                <FloatingCard icon={Check} title="Production-ready" subtitle="Tested & documented" className="-right-3 -top-6 hidden sm:block" delay={1.1} floatDelay={2} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Process: vertical timeline ── */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal><SectionBadge>Our process</SectionBadge></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                How we{" "}
                <span className="relative inline-block">
                  deliver it
                  <ScribbleUnderline className="-bottom-2 h-3.5" delay={0.4} />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                A clear, step-by-step path from first conversation to a production system you own.
              </p>
            </Reveal>
          </div>

          <ol className="relative">
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute bottom-8 left-7 top-8 w-px origin-top border-l-2 border-dashed border-ember/30"
            />
            {service.process.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                className="relative flex gap-6 pb-6 last:pb-0"
              >
                <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white shadow-lift ring-8 ring-background">
                  {step.step}
                </span>
                <div className="flex-1 rounded-3xl border border-border-subtle bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Technologies + Benefits ── */}
      <section className="bg-section-alt py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8 [&>*]:min-w-0">
          <Reveal className="rounded-[2rem] border border-border-subtle bg-white p-8 shadow-soft sm:p-10">
            <SectionBadge>Technology stack</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight">Industry-leading tools</h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {service.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
                  className="cursor-default rounded-full border border-border-subtle bg-section-alt px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:bg-ember-soft hover:text-ember"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[2rem] border border-border-subtle bg-white p-8 shadow-soft sm:p-10">
            <SectionBadge>Key benefits</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight">What you gain</h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                  className="flex gap-3"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ember-soft text-ember">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{benefit}</p>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ServiceExtras service={service} />

      {/* ── Related case studies ── */}
      {relatedCases.length > 0 && (
        <section className="bg-section-alt py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Reveal><SectionBadge>Related work</SectionBadge></Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">See it in action</h2>
                </Reveal>
              </div>
              <Link href="/work" className="group inline-flex items-center gap-1.5 text-sm font-semibold">
                All case studies
                <span className="flex size-6 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {relatedCases.slice(0, 3).map((cs, i) => (
                <WorkCard key={cs.slug} project={cs} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other services ── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-semibold text-foreground">Explore other services</p>
          <div className="flex flex-wrap gap-2.5">
            {services.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-2.5 text-sm font-medium text-muted-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white"
              >
                <s.icon className="size-4" />
                {s.title}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-45" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        primaryLabel="Discuss This Service"
        primaryHref="/contact"
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </main>
  )
}
