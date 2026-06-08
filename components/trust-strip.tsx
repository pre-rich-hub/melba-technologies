"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stack = [
  // Frontend
  "React", "Next.js", "TypeScript", "Vue", "Tailwind CSS", "Framer Motion",
  // Backend
  "Node.js", "Python", "Go", "Django", "FastAPI", "NestJS",
  // Mobile
  "React Native", "Flutter",
  // Database
  "PostgreSQL", "MongoDB", "Redis", "Supabase", "MySQL",
  // Infrastructure & Design
  "Vercel", "Docker", "AWS", "Figma",
]

const domains = [
  { label: "Custom Software Development", desc: "Full-stack software built to spec — web apps, SaaS platforms, internal tools" },
  { label: "AI & Automation", desc: "Intelligent agents, LLM integration, and automated business workflows" },
  { label: "Product Design", desc: "UX/UI design, prototyping, and scalable design systems for complex products" },
  { label: "Cloud & DevOps", desc: "Resilient cloud infrastructure, CI/CD, and automated deployment strategies" },
]

export function TrustStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      className="relative py-14 md:py-16 border-y border-border/60 overflow-hidden"
      style={{ background: "var(--section-alt)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 font-mono mb-10"
        >
          Core Engineering Stack
        </motion.p>

        {/* Technology tokens */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-14"
        >
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.015 }}
              className="px-3.5 py-1.5 text-xs border border-border/70 rounded-md text-muted-foreground/90 hover:border-ember/30 hover:text-ember/80 transition-colors duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="h-px bg-border/40 mb-14 origin-center"
        />

        {/* Domain expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-md overflow-hidden">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
              className="bg-card/30 hover:bg-card/60 transition-colors duration-300 px-6 py-5"
            >
              <div className="w-1 h-1 rounded-full bg-ember mb-3" />
              <h3 className="text-xs font-semibold text-foreground/80 mb-1.5 tracking-tight">{domain.label}</h3>
              <p className="text-[11px] text-muted-foreground/85 leading-relaxed">{domain.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
