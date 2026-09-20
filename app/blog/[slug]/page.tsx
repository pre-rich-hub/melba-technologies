"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { use } from "react"
import { PageCta } from "@/components/shared/page-cta"
import { FaqList } from "@/components/shared/faq-list"
import { getPostBySlug } from "@/lib/data/blog"

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Link href="/blog" className="font-mono inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-ember transition-colors mb-8">
            ← All Articles
          </Link>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">
            By Melba Technology · Published {fmt(post.datePublished)} · Last updated {fmt(post.dateModified)}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-balance max-w-4xl mb-8"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed max-w-2xl"
          >
            {post.answer}
          </motion.p>
          <div className="mt-12 h-px bg-border" />
        </div>
      </section>

      {/* Body */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-14">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-3xl font-semibold tracking-tight leading-[1] mb-6">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">{p}</p>
                ))}
                {section.table && (
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          {section.table.headers.map((h) => (
                            <th key={h} className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium py-3 pr-6">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {section.table.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td key={ci} className={`py-4 pr-6 align-top leading-relaxed ${ci === 0 ? "font-semibold" : "text-muted-foreground"}`}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.list && (
                  <div className="space-y-4">
                    {section.list.map((item, i) => (
                      <div key={i} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="w-[3px] rounded-full bg-ember flex-shrink-0 opacity-70 mt-1" style={{ height: "1.1em" }} />
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqList faqs={post.faqs} />

      {/* Related */}
      <section className="py-12 md:py-14 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/50 mb-6">Related</p>
          <div className="flex flex-wrap gap-3">
            {post.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="font-mono inline-flex items-center gap-2 px-4 py-2.5 text-sm border border-border rounded-md text-muted-foreground hover:border-ember/40 hover:text-ember transition-colors duration-300"
              >
                {r.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </main>
  )
}
