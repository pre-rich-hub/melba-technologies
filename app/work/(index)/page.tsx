"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { WorkCard } from "@/components/shared/work-card"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { caseStudies } from "@/lib/data/case-studies"

const allTags = ["All", "Luxury", "Tourism", "E-Commerce", "SaaS", "AI", "Real Estate", "Hospitality", "Fashion", "Construction"]

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState("All")

  const filtered = activeTag === "All"
    ? caseStudies
    : caseStudies.filter((c) => c.tags.includes(activeTag))

  return (
    <main>
      <PageHero
        eyebrow="Our Work"
        title="Work That"
        highlighted="Defines"
        titleAfter="Industries."
        description="From luxury travel platforms to fine dining experiences to real estate powerhouses — digital products that perform at the highest end of every industry."
      />

      {/* Filter pills */}
      <section className="relative z-30 -mt-6 pb-2 md:sticky md:top-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-full flex-wrap justify-center gap-1.5 rounded-3xl bg-white/90 p-1.5 shadow-lift ring-1 ring-border-subtle backdrop-blur md:glass md:w-fit md:flex-nowrap md:rounded-full md:gap-1">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
                className={`relative shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium md:px-4 md:text-sm transition-colors duration-300 ${
                  activeTag === tag ? "text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTag === tag && (
                  <motion.span
                    layoutId="work-filter"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">{tag}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="mb-8 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {activeTag !== "All" && <> in <span className="font-semibold text-foreground">{activeTag}</span></>}
          </p>
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <WorkCard key={project.slug} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm text-muted-foreground">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <PageCta
        title="Ready to Build Something Exceptional?"
        subtitle="Your project could be our next case study."
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </main>
  )
}
