"use client"

import { WorkCard } from "@/components/shared/work-card"
import { SectionBadge, Reveal, ScrollRevealText } from "@/components/shared/decor"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { caseStudies } from "@/lib/data/case-studies"

const featured = caseStudies.slice(0, 6)

export function FeaturedWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <SectionBadge>Selected work</SectionBadge>
            </Reveal>
            <ScrollRevealText
              text="Work that defines industries"
              accent="defines"
              className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            />
          </div>
          <Reveal delay={0.1} className="lg:max-w-xs lg:text-right">
            <p className="text-sm leading-relaxed text-muted-foreground">
              From luxury travel to fine dining to real estate — digital platforms built to convert at the highest end of every market.
            </p>
            <Link
              href="/work"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              View all case studies
              <span className="flex size-6 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {featured.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream shadow-lift"
          >
            View all {caseStudies.length} projects
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
