"use client"

import { motion } from "framer-motion"
import { Reveal, SectionBadge, ScrollRevealText } from "@/components/shared/decor"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { services } from "@/lib/data/services"

const methodologySteps = [
  { n: "01", title: "Discovery",        desc: "We deeply understand your business model, technical constraints, and success metrics before proposing any solution."          },
  { n: "02", title: "Architecture",     desc: "We design the system before we build it. Architecture decisions are documented, reviewed, and explained — not hidden."        },
  { n: "03", title: "Iterative Build",  desc: "Two-week sprints, weekly demos, open backlog. You see real software, not status reports."                                    },
  { n: "04", title: "Quality Gates",    desc: "Security audits, performance testing, and compliance validation are built into the process — not bolt-on at the end."       },
  { n: "05", title: "Launch & Beyond",  desc: "We don't disappear post-launch. 60-day hyper-care plus ongoing partnership options for every engagement."                   },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Services Built for"
        highlighted="Tomorrow."
        description="End-to-end software engineering — from strategy, design, and automation through to production support. One unified standard of quality."
      />

      {/* ── Services grid ── */}
      <section className="bg-background py-14 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: EASE }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/25 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                >
                  <span aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-[radial-gradient(circle,var(--ember-soft),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-section-alt text-foreground ring-1 ring-border-subtle transition-all duration-500 group-hover:bg-ember group-hover:text-white group-hover:ring-ember">
                      <service.icon className="size-5" />
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full border border-border-subtle text-muted-foreground transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </div>

                  <h3 className="relative mt-7 text-xl font-bold leading-snug">{service.title}</h3>
                  <p className="relative mt-1 text-sm font-medium text-ember">{service.tagline}</p>
                  <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full bg-section-alt px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="rounded-full bg-section-alt px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology timeline ── */}
      <section className="bg-section-alt py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal><SectionBadge>How we work</SectionBadge></Reveal>
            <ScrollRevealText
              text="A process designed for clarity"
              accent="clarity"
              className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl"
            />
          </div>

          <div className="relative mt-10 md:mt-16 grid gap-8 md:grid-cols-5 md:gap-5">
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute left-[10%] right-[10%] top-7 hidden origin-left border-t-2 border-dashed border-ember/30 md:block"
            />
            {methodologySteps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: EASE }}
                className="relative flex gap-5 md:block md:text-center"
              >
                <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white shadow-lift ring-8 ring-section-alt md:mx-auto">
                  {step.n}
                </span>
                <div className="md:mt-6">
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Build Something Exceptional?"
        subtitle="Tell us about your project and we will match you with the right practice area."
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </main>
  )
}
