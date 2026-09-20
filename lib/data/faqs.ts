export interface Faq {
  q: string
  a: string
}

export const contactFaqs: Faq[] = [
  { q: "What is your typical project timeline?", a: "Typical projects range from 10 weeks (focused MVP) to 32 weeks (complex enterprise system). After a discovery call we provide a detailed timeline with milestones before any engagement begins." },
  { q: "How do you price your services?", a: "We work on a fixed-scope or time-and-materials basis depending on project clarity. We provide a detailed proposal with line-item breakdown after the discovery call — no surprises." },
  { q: "Do you work with early-stage startups?", a: "Yes, selectively. We reserve capacity for startups with strong product-market evidence and technical ambition. Seed-stage companies often work with us on a focused MVP engagement." },
  { q: "Who will I work with day-to-day?", a: "You work directly with the engineers who scoped your project. There are no account managers between you and the team. Every engagement has a named technical lead who is reachable without scheduling a meeting." },
  { q: "Do you offer post-launch support?", a: "Yes. Every engagement includes a 60-day hyper-care period. After that, we offer retainer-based support, SLA-backed maintenance, and ongoing product partnership arrangements." },
  { q: "Can you work with our existing team?", a: "Absolutely. We embed alongside in-house teams regularly. We can lead, collaborate, or complement — we adapt to your team's structure and workflow." },
]
