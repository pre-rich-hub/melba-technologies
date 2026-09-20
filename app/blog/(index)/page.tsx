"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { publishedPosts } from "@/lib/data/blog"

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })

export default function BlogPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const posts = publishedPosts()

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Guides for"
        highlighted="tour operators"
        titleAfter="and growing brands."
        description="Practical, plain-language guides on websites, booking platforms, AI visibility and software development from the Melba Technology team in Addis Ababa."
      />
      <section className="pb-16 md:pb-20 lg:pb-24" ref={ref}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            {posts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-md border border-border bg-card/40 hover:bg-card/80 p-8 transition-colors duration-500 relative overflow-hidden"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ember/80 font-medium">
                    Updated {fmt(post.dateModified)}
                  </span>
                  <h2 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-ember transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.description}</p>
                  <div className="flex items-center gap-1.5 mt-5 text-sm font-medium text-ember opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <PageCta />
    </main>
  )
}
