"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import type { CaseStudy } from "@/lib/data/case-studies"

/** Project card used on the homepage and the /work index. */
export function WorkCard({ project, index = 0 }: { project: CaseStudy; index?: number }) {
  const domain = new URL(project.liveUrl).hostname.replace("www.", "")
  const tech = Array.from(new Set(project.technologies))

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col rounded-3xl border border-border-subtle bg-white p-3 shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-section-alt">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail}
          alt={`${project.title} website preview`}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
          {project.industry}
        </span>

        {/* Live site button — always visible (no hover on touch devices) */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Visit ${project.title} live site (opens in a new tab)`}
          className="absolute bottom-3 right-3 z-10 flex min-h-10 items-center gap-2 rounded-full bg-ember px-4 py-2 text-xs font-bold text-white shadow-lg shadow-black/20 transition-all duration-200 hover:bg-ember-light active:scale-95"
        >
          Visit live site
          <ExternalLink className="size-3.5" strokeWidth={2.5} />
        </a>
      </div>

      {/* Content */}
      <Link href={`/work/${project.slug}`} className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold leading-tight tracking-tight transition-colors group-hover:text-ember">
              {project.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              {project.category} · {domain}
            </p>
          </div>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border-subtle transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <p className="mt-4 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:line-clamp-3">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {tech.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-section-alt px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              {t}
            </span>
          ))}
          {tech.length > 3 && (
            <span className="rounded-full bg-section-alt px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              +{tech.length - 3}
            </span>
          )}
        </div>
      </Link>
    </motion.article>
  )
}
