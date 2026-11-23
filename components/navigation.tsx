"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu, X, ChevronDown,
  Code2, Globe, TabletSmartphone,
  Sparkles, PenTool, Workflow, Lightbulb, ShieldCheck, Cloud,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MelbaMark } from "@/components/logo"
import type { LucideIcon } from "lucide-react"

/* ─── Types ────────────────────────────────────────────────────────────── */
interface DropdownItem {
  name: string
  href: string
  description: string
  icon: LucideIcon
  badge?: string
}

interface NavLink {
  name: string
  href: string
  dropdown?: {
    items: DropdownItem[]
    columns?: 1 | 2
    cta?: { label: string; href: string }
  }
}

/* ─── Nav config ────────────────────────────────────────────────────────── */
const navLinks: NavLink[] = [
  {
    name: "Services",
    href: "/services",
    dropdown: {
      columns: 2,
      items: [
        { name: "Custom Software Development", href: "/services/custom-development", description: "Bespoke full-stack software built to your spec", icon: Code2 },
        { name: "Web Development", href: "/services/web-development", description: "High-performance web apps and SaaS platforms", icon: Globe },
        { name: "Mobile Development", href: "/services/mobile-development", description: "iOS and Android apps from a single codebase", icon: TabletSmartphone },
        { name: "AI & Automation", href: "/services/ai-automation-solutions", description: "Intelligent agents and workflow automation", icon: Sparkles },
        { name: "UI/UX Design & Branding", href: "/services/ui-ux-design-branding", description: "Brand identity, product design, and design systems", icon: PenTool },
        { name: "Business Process Automation", href: "/services/business-process-automation", description: "Workflow, CRM, and AI-powered operations", icon: Workflow },
        { name: "Technology Consulting", href: "/services/technology-consulting", description: "Architecture, audits, and product strategy", icon: Lightbulb },
        { name: "Maintenance & Support", href: "/services/maintenance-support", description: "Monitoring, patches, updates, and optimisation", icon: ShieldCheck },
        { name: "Cloud & DevOps", href: "/services/cloud-devops-solutions", description: "Resilient infrastructure and CI/CD pipelines", icon: Cloud },
      ],
      cta: { label: "View all services", href: "/services" },
    },
  },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

/* ─── Dropdown panel ────────────────────────────────────────────────────── */
function DropdownPanel({
  dropdown,
  isActive,
}: {
  dropdown: NonNullable<NavLink["dropdown"]>
  isActive: boolean
}) {
  const isTwoCols = dropdown.columns === 2

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className={`
            absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2
            z-50 origin-top
            bg-white/95 backdrop-blur-2xl
            border border-border-subtle
            rounded-3xl shadow-float
            overflow-hidden
            ${isTwoCols ? "w-[620px]" : "w-[340px]"}
          `}
        >


          <div className={`p-3 ${isTwoCols ? "grid grid-cols-2 gap-1" : "flex flex-col gap-0.5"}`}>
            {dropdown.items.map((item) => (
              <DropdownItem key={item.name} item={item} />
            ))}
          </div>

          {dropdown.cta && (
            <>
              <div className="mx-4 h-px bg-border/60" />
              <div className="p-3">
                <Link
                  href={dropdown.cta.href}
                  className="flex items-center justify-between w-full px-4 py-2.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200 group"
                >
                  <span>{dropdown.cta.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </Link>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DropdownItem({ item }: { item: DropdownItem }) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      className="group flex items-start gap-3.5 px-4 py-3.5 rounded-2xl hover:bg-section-alt transition-colors duration-150"
    >
      <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-ember-soft flex items-center justify-center group-hover:bg-ember transition-all duration-200">
        <Icon className="w-4 h-4 text-ember group-hover:text-white transition-colors duration-200" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground group-hover:text-ember transition-colors duration-200 leading-tight">
            {item.name}
          </span>
          {item.badge && (
            <span className="px-1.5 py-0.5 text-[9px] uppercase tracking-[0.1em] font-semibold bg-ember/15 text-ember rounded-md leading-none">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-[12px] text-muted-foreground mt-0.5 leading-snug">
          {item.description}
        </p>
      </div>
    </Link>
  )
}

/* ─── Mobile accordion item ─────────────────────────────────────────────── */
function MobileNavItem({
  link,
  isActive,
}: {
  link: NavLink
  isActive: (href: string) => boolean
}) {
  const [expanded, setExpanded] = useState(false)

  if (!link.dropdown) {
    return (
      <Link
        href={link.href}
        className={`flex w-full items-center justify-between border-b border-border-subtle py-4 text-2xl font-semibold tracking-tight transition-colors ${isActive(link.href) ? "text-ember" : "text-foreground hover:text-ember"
          }`}
      >
        {link.name}
        <ArrowUpRight className="size-5 opacity-40" />
      </Link>
    )
  }

  return (
    <div className="w-full">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex w-full items-center justify-between border-b border-border-subtle py-4 text-2xl font-semibold tracking-tight transition-colors ${isActive(link.href) ? "text-ember" : "text-foreground hover:text-ember"
          }`}
        aria-expanded={expanded}
      >
        {link.name}
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-1 py-3">
              {link.dropdown.items.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-colors group"
                  >
                    <span className="flex size-8 items-center justify-center rounded-lg bg-ember-soft"><Icon className="w-4 h-4 text-ember" /></span>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Navigation ────────────────────────────────────────────────────────── */
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  const openDropdown = useCallback((name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(name)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "pt-3" : "pt-5"}`}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div
            className={`flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${isScrolled
              ? "glass shadow-lift ring-1 ring-border-subtle"
              : "border border-transparent"
              }`}
          >

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <MelbaMark />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  onMouseEnter={() => link.dropdown ? openDropdown(link.name) : setActiveDropdown(null)}
                  onMouseLeave={scheduleClose}
                >
                  {link.dropdown ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 relative group ${isActive(link.href) || activeDropdown === link.name
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                      aria-expanded={activeDropdown === link.name}
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      </motion.span>
                      {isActive(link.href) && (
                        <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-ember" />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 relative inline-block ${isActive(link.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {link.name}
                      {isActive(link.href) && (
                        <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-ember" />
                      )}
                    </Link>
                  )}

                  {/* Dropdown panel */}
                  {link.dropdown && (
                    <div
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <DropdownPanel
                        dropdown={link.dropdown}
                        isActive={activeDropdown === link.name}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Right side: theme toggle + CTA */}
            <motion.div
              className="hidden lg:flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-5 pr-2 text-sm font-semibold text-cream transition-all duration-300 hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start a Project
                <span className="flex size-7 items-center justify-center rounded-full bg-ember transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </motion.div>

            {/* Mobile: hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                className="flex size-10 items-center justify-center rounded-full bg-ink text-cream"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="sky-backdrop fixed inset-0 z-40 pt-24 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col px-5 pb-10 pt-2 sm:px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <MobileNavItem link={link} isActive={isActive} />
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-ink text-cream shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start a Project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
