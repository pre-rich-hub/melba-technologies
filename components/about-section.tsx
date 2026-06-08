"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    title: "Innovation-Driven",
    description:
      "We stay ahead of the curve, constantly exploring emerging technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our priority. We work as an extension of your team, deeply understanding your business goals.",
  },
  {
    title: "Quality Obsessed",
    description:
      "Every line of code, every design decision is crafted with precision and uncompromising attention to detail.",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication, honest timelines, no surprises — you are always fully in the loop.",
  },
]

const expertise = [
  "React & Next.js",
  "Node.js & Python",
  "AWS & GCP",
  "Kubernetes",
  "PostgreSQL",
  "Machine Learning",
  "TypeScript",
  "GraphQL",
]

const metrics = [
  { value: "40+", label: "Engineers" },
  { value: "15", label: "Countries" },
  { value: "24/7", label: "Support" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">
            About Nexus
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.92] text-balance">
            Engineering the Future,<br />
            <span className="text-ember">One Solution</span> at a Time
          </h2>
          <div className="mt-12 h-px bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — narrative + values */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-base text-muted-foreground leading-relaxed mb-8 text-pretty">
              Founded by engineers with a passion for excellence, Nexus has grown into a global
              software studio serving startups and Fortune 500 companies alike. We combine deep
              technical expertise with strategic thinking to deliver solutions that drive real,
              measurable business impact.
            </p>

            <div className="mb-12 pl-5 border-l border-border">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium mb-2">
                The Name Behind the Mission
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                The name <span className="text-foreground font-medium">Melba</span> comes from the{" "}
                <span className="text-foreground">Oromo Gadaa System</span>, one of
                Africa&apos;s most respected indigenous systems of leadership and knowledge transfer.
                In the Gadaa tradition, Melba symbolizes{" "}
                <span className="text-foreground/70">growth, preparation, responsibility, leadership</span>,
                and the passing of knowledge from one generation to the next.
              </p>
            </div>

            <div className="space-y-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group flex gap-5 pb-8 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="mt-1 w-[3px] h-5 rounded-full bg-ember flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h3 className="font-semibold mb-1.5 text-sm">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — tech stack card + floating stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <div className="rounded-md border border-border bg-card/40 p-8 overflow-hidden">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
                Our Tech Stack
              </h3>
              <p className="text-2xl font-semibold mb-8">
                Industry-leading technologies.<br />
                <span className="text-ember">Zero compromise.</span>
              </p>

              <div className="flex flex-wrap gap-2.5">
                {expertise.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.4 + i * 0.045 }}
                    className="font-mono px-3.5 py-2 text-xs border border-border rounded-md text-muted-foreground hover:border-ember/50 hover:text-ember transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Metrics row */}
              <div className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-3xl font-semibold text-ember leading-none mb-1">{m.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 px-5 py-4 rounded-md glass"
            >
              <div className="text-xl font-semibold text-ember leading-none">99.9%</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-1">Uptime SLA</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 px-5 py-4 rounded-md glass"
            >
              <div className="text-xl font-semibold text-ember leading-none">ISO</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-1">27001 Certified</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
