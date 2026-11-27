"use client"

import { motion } from "framer-motion"
import { ScrollRevealText, Reveal } from "@/components/shared/decor"
import {
  Code2,
  Globe,
  TabletSmartphone,
  ArrowUpRight,
  Bot,
  PenTool,
  Workflow,
  Lightbulb,
  ShieldCheck,
  Cloud,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke full-stack software built to your exact specifications. No templates, no shortcuts, no handoffs.",
    href: "/services/custom-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance web applications and SaaS platforms — modern stack, clean code, and the performance standards users demand.",
    href: "/services/web-development",
  },
  {
    icon: TabletSmartphone,
    title: "Mobile Development",
    description: "Cross-platform iOS and Android apps built with Flutter and React Native — native performance from a single codebase.",
    href: "/services/mobile-development",
  },
  {
    icon: Bot,
    title: "AI Automation & AI Solutions",
    description: "Custom AI agents, chatbots and LLM features built into your product — trained on your data and wired into your tools.",
    href: "/services/ai-automation-solutions",
  },
  {
    icon: PenTool,
    title: "UI/UX Design & Branding",
    description: "Brand identity, product design, user research, and scalable design systems for premium digital products.",
    href: "/services/ui-ux-design-branding",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Internal tools, CRM workflows and system integrations that replace spreadsheets and manual hand-offs in day-to-day operations.",
    href: "/services/business-process-automation",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Digital transformation, system architecture, technical audits, and product strategy for high-stakes decisions.",
    href: "/services/technology-consulting",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description: "Monitoring, updates, security patches, enhancements, and performance optimisation after launch.",
    href: "/services/maintenance-support",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Cloud infrastructure, CI/CD pipelines, automated deployment, monitoring, and high-availability architecture.",
    href: "/services/cloud-devops-solutions",
  },
]

export function ServicesPreview() {
  return (
    <section id="services" className="relative overflow-hidden bg-section-alt py-16 md:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollRevealText
            text="Services built simple, secure and smart"
            accent="smart"
            className="text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Strategy, design, engineering, automation and support — delivered by one team with one standard of care.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={index >= 4 ? "hidden md:block" : undefined}
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 md:p-7 hover:border-foreground/15 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >

                <div className="relative flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-section-alt text-foreground ring-1 ring-border-subtle transition-all duration-500 group-hover:bg-white group-hover:ring-foreground/20">
                    <service.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-border-subtle text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="size-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                  </span>
                </div>

                <h3 className="relative mt-5 text-lg font-semibold leading-snug md:mt-7">{service.title}</h3>
                <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-8 text-center md:mt-12">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-foreground/40 hover:shadow-soft"
          >
            <span className="md:hidden">View all {services.length} services</span>
            <span className="hidden md:inline">Explore all services</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
