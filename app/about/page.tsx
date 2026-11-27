"use client"

import { motion } from "framer-motion"
import { Quote, BadgeCheck, Scale, ListChecks, Handshake, Compass, Globe2 } from "lucide-react"
import { Reveal, ScribbleUnderline, SparkDoodle, ScrollRevealText } from "@/components/shared/decor"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const valueStyles = [
  { icon: BadgeCheck },
  { icon: Scale },
  { icon: ListChecks },
  { icon: Handshake },
]

const values = [
  {
    title: "Relentless Quality",
    description: "We would rather miss a deadline than ship something we are not proud of. Every codebase we deliver is one we will stake our reputation on.",
  },
  {
    title: "Engineering Integrity",
    description: "We tell clients what they need to hear, not what they want to hear. Honest technical assessment — even when it complicates the conversation.",
  },
  {
    title: "Transparent Process",
    description: "No black box. Weekly demos, clear milestones, open backlog. You always know the state of your project, your budget, and your timeline.",
  },
  {
    title: "Long-Term Thinking",
    description: "Every architecture decision is made for the system's ten-year life, not the six-month engagement. We build for where your business is going.",
  },
]

const principles = [
  {
    n: "01",
    title: "Systems over features",
    desc: "We spend more time on the architecture than the features — because the architecture is what makes features possible at scale. Features are temporary. Structure is permanent.",
  },
  {
    n: "02",
    title: "AI-native by default",
    desc: "We design for AI from the first whiteboard session. Not retrofitted. Not bolted on. Integrated into the data model, the API contracts, and the infrastructure from the start.",
  },
  {
    n: "03",
    title: "Security as structure",
    desc: "Security is a design constraint, not a post-launch audit. We make it a first-class concern from the initial architecture review through to every deployment.",
  },
  {
    n: "04",
    title: "Code that teaches",
    desc: "Every codebase is documented and structured as if the next engineer is better than us. Because eventually, they will be — and the system should be ready for them.",
  },
  {
    n: "05",
    title: "Performance is product",
    desc: "Load time, throughput, and error rates are product decisions. We measure them like revenue, because the engineering quality users feel directly determines what they do next.",
  },
]

const delivery = [
  {
    title: "Direct accountability",
    desc: "You work directly with the engineers who scoped your project. There are no account managers or delivery layers between you and the people writing the code.",
  },
  {
    title: "Named technical lead",
    desc: "Every engagement has a single named technical lead who owns architectural decisions, attends every client touchpoint, and is reachable without scheduling a meeting.",
  },
  {
    title: "No handoff model",
    desc: "We don't sell and hand off. The team that designs your system builds it. The team that builds it deploys it. Continuity is not optional — it is how quality is maintained.",
  },
]


const EASE = [0.16, 1, 0.3, 1] as const

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Melba Technology"
        title="Software Engineered"
        highlighted="Without Compromise."
        description="Melba Technology is inspired by the timeless wisdom of the Oromo Gadaa System — one of Africa’s oldest indigenous systems of leadership, knowledge, unity, and generational progress."
      />

      {/* ── Heritage & Mission ── */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <Reveal delay={0.08}>
              <h2 className="relative text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl">
                Bridging heritage{" "}
                <span className="relative inline-block whitespace-nowrap">
                  with innovation.
                  <ScribbleUnderline className="-bottom-2 h-3.5" delay={0.4} />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
                For centuries, the Gadaa System shaped communities through responsibility, innovation, collaboration, and visionary thinking. At Melba Technology, we carry that same spirit into the digital age.
              </p>
            </Reveal>

            {/* Quote card */}
            <Reveal delay={0.24}>
              <figure className="sky-backdrop relative mt-10 overflow-hidden rounded-3xl p-8 shadow-soft ring-1 ring-border-subtle">
                <Quote className="size-9 fill-ember/15 text-ember" strokeWidth={1.5} />
                <blockquote className="mt-4 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                  Rooted in heritage. Built for the future.
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">— The Melba promise</figcaption>
                <SparkDoodle className="absolute right-6 top-6 w-9 text-ember" />
              </figure>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p className="text-xl font-medium leading-relaxed text-foreground">
                We believe technology is more than code and design — it is a tool that connects people, empowers businesses, and builds the future.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Rooted in Ethiopian identity and driven by global standards, we create modern digital solutions that help businesses grow, compete, and thrive in a rapidly evolving world.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our mission is to combine the strength of African wisdom with the limitless possibilities of technology. From Ethiopia to the world, Melba Technology exists to build impactful digital experiences that inspire progress, create opportunity, and leave a lasting legacy for the next generation.
              </p>
            </Reveal>

            {/* Name origin */}
            <Reveal delay={0.28}>
              <div className="rounded-3xl border border-border-subtle bg-white p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-ember-soft text-lg font-extrabold text-ember">M</span>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">The name Melba</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The name <span className="font-semibold text-foreground">Melba</span> comes from the{" "}
                  <span className="font-medium text-foreground">Oromo Gadaa System</span> — one of
                  Africa&apos;s most respected indigenous systems of leadership and knowledge transfer.
                  In the Gadaa tradition, Melba symbolizes growth, preparation, responsibility, leadership,
                  and the passing of knowledge from one generation to the next.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: Compass, label: "Philosophy", value: "Responsibility & Visionary Thinking" },
                  { icon: Globe2, label: "Goal", value: "Global Standards, Local Roots" },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3 rounded-2xl bg-section-alt p-5 ring-1 ring-border-subtle">
                    <item.icon className="mt-0.5 size-5 shrink-0 text-ember" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Engineering principles ── */}
      <section className="relative bg-section-alt py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollRevealText
              text="How we think"
              accent="think"
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Five principles that govern every technical decision we make — from the first design session to the last deployment.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {principles.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
                className="group flex gap-5 rounded-3xl border border-border-subtle bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:gap-7 sm:p-8"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-section-alt text-sm font-bold tabular-nums text-ink-soft ring-1 ring-border-subtle transition-all duration-500 group-hover:bg-ember group-hover:text-white group-hover:ring-ember">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative bg-background py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollRevealText
              text="What we stand for"
              accent="stand"
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl"
            />
          </div>

          <div className="mt-10 md:mt-16 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => {
              const style = valueStyles[i % valueStyles.length]
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: EASE }}
                  className="group flex gap-6 rounded-3xl border border-border-subtle bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-8"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-soft transition-colors duration-300 group-hover:border-ember/40 group-hover:text-ember">
                    <style.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How we deliver: connected timeline ── */}
      <section className="relative bg-section-alt py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <ScrollRevealText
              text="How we deliver"
              accent="deliver"
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl"
            />
          </div>

          <div className="relative mt-10 md:mt-16 grid gap-6 md:grid-cols-3">
            {/* connector line */}
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute left-[16%] right-[16%] top-7 hidden h-px origin-left border-t-2 border-dashed border-ember/30 md:block"
            />
            {delivery.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: EASE }}
                className="relative text-center"
              >
                <span className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full bg-ink text-base font-bold text-white shadow-lift ring-8 ring-section-alt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-6 rounded-3xl border border-border-subtle bg-white p-7 text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to modernize your business with digital systems?"
        highlight="digital systems?"
        subtitle="We turn ideas into maintainable production systems."
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </main>
  )
}
