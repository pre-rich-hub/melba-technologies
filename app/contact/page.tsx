"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone, Clock } from "lucide-react"
import { FaqList } from "@/components/shared/faq-list"
import { toast } from "sonner"
import { PageHero } from "@/components/shared/page-hero"
import { contactFaqs as faqs } from "@/lib/data/faqs"
import { getAttribution } from "@/lib/attribution"
import { trackEvent } from "@/components/analytics/tracking"


export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", source: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...getAttribution() }),
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        })
        trackEvent("generate_lead", { source: form.source || "not_specified" })
        setForm({ name: "", email: "", company: "", source: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or email us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = "w-full rounded-xl border border-border-subtle bg-section-alt px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all duration-300 focus:border-ember focus:bg-white focus:outline-none focus:ring-4 focus:ring-ember/10"
  const labelClass = "mb-2 block text-sm font-semibold text-foreground"
  const EASE = [0.16, 1, 0.3, 1] as const

  const channels = [
    { icon: Mail, label: "Email us", value: "hellomelbatechnology@gmail.com", href: "mailto:hellomelbatechnology@gmail.com" },
    { icon: Phone, label: "Call us", value: "+251 941 318 298", href: "tel:+251941318298" },
    { icon: MapPin, label: "Visit us", value: "Addis Ababa, Ethiopia", href: null },
  ]

  const steps = [
    { n: "01", title: "Submit your brief", desc: "Use this form or email us directly." },
    { n: "02", title: "Discovery call", desc: "45-minute call to understand your goals." },
    { n: "03", title: "Scope & proposal", desc: "Detailed scope, timeline, and fixed quote." },
  ]

  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Build your next"
        highlighted="digital product"
        titleAfter="with us."
        description="Tell us about your project. We’ll review your requirements and respond within 24 hours with clear next steps, including scope discussion and timeline estimation."
      />

      {/* ── Form + info ── */}
      <section className="relative z-10 -mt-6 bg-transparent pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8 [&>*]:min-w-0">
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="rounded-[2rem] border border-border-subtle bg-white p-6 shadow-float sm:p-10"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Start the conversation</h2>
            <p className="mt-2 text-sm text-muted-foreground">A few details help us come back with something useful.</p>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Your name</label>
                  <input id="name" type="text" required placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email address</label>
                  <input id="email" type="email" required placeholder="john@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className={labelClass}>Company</label>
                  <input id="company" type="text" placeholder="Your company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="source" className={labelClass}>How did you find us?</label>
                  <select id="source" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className={inputClass}>
                    <option value="">Select an option</option>
                    <option value="ChatGPT / AI assistant">ChatGPT / AI assistant</option>
                    <option value="Google">Google</option>
                    <option value="Perplexity">Perplexity</option>
                    <option value="Referral">Referral</option>
                    <option value="Social media">Social media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Tell us about your project</label>
                <textarea id="message" rows={6} placeholder="Describe your project goals, timeline, and key requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && (
                  <span className="flex size-6 items-center justify-center rounded-full bg-ember transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="size-3.5" />
                  </span>
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We typically respond within 24 hours. No spam, ever.
              </p>
            </form>
          </motion.div>

          {/* Info column */}
          <div className="space-y-5">
            {channels.map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-soft transition-colors duration-300 group-hover:border-ember/40 group-hover:text-ember">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</span>
                    <span className="mt-0.5 block text-[15px] font-semibold text-foreground [overflow-wrap:anywhere]">{value}</span>
                  </span>
                  {href && <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-foreground" />}
                </>
              )
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: EASE }}
                >
                  {href ? (
                    <a href={href} className="group flex items-center gap-4 rounded-2xl border border-border-subtle bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">{inner}</a>
                  ) : (
                    <div className="group flex items-center gap-4 rounded-2xl border border-border-subtle bg-white p-5 shadow-soft">{inner}</div>
                  )}
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className="rounded-2xl bg-ink p-6 text-white shadow-lift"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15"><Clock className="size-4" strokeWidth={1.75} /></span>
                <span className="text-sm font-semibold">Quick response</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                We respond to every inquiry within 24 hours. No automated replies — a real engineer reads every message.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
              className="rounded-2xl border border-border-subtle bg-white p-6 shadow-soft"
            >
              <p className="text-sm font-semibold">What happens next</p>
              <ol className="relative mt-5 space-y-5">
                <span aria-hidden className="absolute bottom-3 left-[15px] top-3 border-l-2 border-dashed border-ember/25" />
                {steps.map((st) => (
                  <li key={st.n} className="relative flex gap-4">
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-section-alt text-[11px] font-bold text-ink-soft ring-4 ring-white">{st.n}</span>
                    <div>
                      <p className="text-sm font-semibold">{st.title}</p>
                      <p className="text-xs text-muted-foreground">{st.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-section-alt">
        <FaqList faqs={faqs} heading="Common questions" />
      </div>
    </main>
  )
}
