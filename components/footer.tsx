"use client"

import { Facebook, Instagram, Linkedin, Send, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { MelbaMark } from "@/components/logo"

const footerLinks = {
  Services: [
    { name: "Custom Software Development", href: "/services/custom-development" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Development", href: "/services/mobile-development" },
    { name: "AI Automation & Solutions", href: "/services/ai-automation-solutions" },
    { name: "UI/UX Design & Branding", href: "/services/ui-ux-design-branding" },
    { name: "Business Process Automation", href: "/services/business-process-automation" },
    { name: "Technology Consulting", href: "/services/technology-consulting" },
    { name: "Maintenance & Support", href: "/services/maintenance-support" },
    { name: "Cloud & DevOps Solutions", href: "/services/cloud-devops-solutions" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ],
}

const socials = [
  { name: "X", icon: null, href: "https://x.com/melbatechX" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590083957934" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/melbatechI" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/123224009/" },
  { name: "Telegram", icon: Send, href: "https://t.me/melbatechT" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-section-alt">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-10 sm:gap-x-8 sm:gap-y-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <MelbaMark size={40} />
              <div className="leading-none">
                <div className="text-2xl font-bold tracking-tight group-hover:text-ember transition-colors duration-300">
                  Melba
                </div>
                <div className="text-sm font-normal tracking-wide text-muted-foreground group-hover:text-ember/70 transition-colors duration-300">
                  Technology
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-7 leading-relaxed">
              A software studio building custom web and mobile products for ambitious businesses.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-white shadow-soft ring-1 ring-border-subtle flex items-center justify-center text-muted-foreground hover:bg-ink hover:text-white hover:ring-ink hover:-translate-y-0.5 transition-all duration-300"
                >
                  {s.icon ? (
                    <s.icon className="w-3.5 h-3.5" />
                  ) : (
                    <span className="text-[13px] font-bold leading-none" aria-hidden>𝕏</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(footerLinks) as [string, { name: string; href: string }[]][]).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-foreground mb-5">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hellomelbatechnology@gmail.com" className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-ember transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-white shadow-soft ring-1 ring-border-subtle flex items-center justify-center text-ember group-hover:bg-ember group-hover:text-white transition-colors">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="truncate">hellomelbatechnology@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+251941318298" className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-ember transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-white shadow-soft ring-1 ring-border-subtle flex items-center justify-center text-ember group-hover:bg-ember group-hover:text-white transition-colors">
                    <Phone className="w-3 h-3" />
                  </div>
                  <span>+251 941 318 298</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-white shadow-soft ring-1 ring-border-subtle flex items-center justify-center text-ember">
                  <MapPin className="w-3 h-3" />
                </div>
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Melba Technology. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with precision.
          </p>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none select-none text-center text-[22vw] font-extrabold leading-[0.75] tracking-[-0.06em] text-foreground/[0.035] lg:text-[16rem]">
        Melba
      </div>
    </footer>
  )
}
