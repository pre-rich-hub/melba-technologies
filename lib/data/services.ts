import {
  LucideIcon,
  Code2,
  Globe,
  TabletSmartphone,
  Sparkles,
  PenTool,
  Workflow,
  Lightbulb,
  ShieldCheck,
  Cloud,
} from "lucide-react"

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  process: { step: string; title: string; description: string }[]
  technologies: string[]
  benefits: string[]
  relatedWork: string[]
}

export const services: Service[] = [
  {
    slug: "custom-development",
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Your vision. Zero compromise.",
    description:
      "Bespoke full-stack software built to your exact specifications — from greenfield products to legacy modernisation. No templates, no shortcuts, no handoffs.",
    process: [
      { step: "01", title: "Product Discovery", description: "Two-week discovery sprint: user research, technical constraints, competitor analysis, and a detailed product brief." },
      { step: "02", title: "Technical Design", description: "System design document, API contracts, data models, and a working prototype reviewed before full build begins." },
      { step: "03", title: "Agile Build", description: "Weekly releases to staging. Continuous integration, automated test suites, and code review on every PR." },
      { step: "04", title: "QA & Performance Testing", description: "End-to-end testing, load testing at 10× expected peak, accessibility audit, and cross-browser validation." },
      { step: "05", title: "Launch & Handover", description: "Production deployment, observability configuration, full documentation, and a 60-day post-launch support window." },
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    benefits: [
      "Codebase you own entirely — no vendor lock-in",
      "Documented architecture and clean code your internal team can extend",
      "Performance optimised from the ground up — not patched in later",
      "Accessibility-first (WCAG 2.1 AA) and internationalisation-ready",
      "Source code escrow and knowledge transfer included in every engagement",
    ],
    relatedWork: ["shemzu-store", "aurum-restaurant"],
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    tagline: "Full-stack. Production-ready. Fast.",
    description:
      "High-performance web applications and SaaS platforms — from architecture through deployment. Modern stack, clean code, and the performance standards that users and search engines demand.",
    process: [
      { step: "01", title: "Architecture & Stack Selection", description: "Right-size the stack for your use case: rendering strategy, data layer, auth, and deployment model defined before build." },
      { step: "02", title: "Frontend Engineering", description: "Pixel-precise UI implementation with component systems, animation, and accessibility baked in from the first sprint." },
      { step: "03", title: "Backend & API Layer", description: "RESTful or GraphQL APIs, database design, authentication, and third-party integrations — built for reliability and extensibility." },
      { step: "04", title: "Performance Optimisation", description: "Core Web Vitals tuning, image optimisation, edge caching, and bundle analysis until the numbers are where they need to be." },
      { step: "05", title: "Deployment & CI/CD", description: "Production infrastructure, automated deployment pipelines, monitoring, and a 60-day post-launch support window." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    benefits: [
      "Sub-2s load times on mobile — Core Web Vitals optimised from day one",
      "SEO-ready architecture: server rendering, structured data, and performance that ranks",
      "Design system that scales with your product without accruing visual debt",
      "Accessible by default — WCAG 2.1 AA compliance built in, not bolted on",
      "Clean, documented codebase your team can maintain and extend independently",
    ],
    relatedWork: ["hamba-tours", "hora-tours"],
  },
  {
    slug: "mobile-development",
    icon: TabletSmartphone,
    title: "Mobile Development",
    tagline: "Native quality. One codebase.",
    description:
      "Cross-platform iOS and Android apps built with Flutter and React Native — native performance, polished UI, and full platform parity without the cost of two separate codebases.",
    process: [
      { step: "01", title: "Platform Strategy", description: "Define the right cross-platform approach — Flutter for pixel-perfect parity, React Native for JS ecosystem leverage — with clear trade-off rationale." },
      { step: "02", title: "UX & Design System", description: "Mobile-first design system with platform-adaptive components that feel native on iOS and Android while maintaining brand consistency." },
      { step: "03", title: "Core Build", description: "Feature development in two-week cycles with TestFlight and Play Store internal track releases. Real device testing throughout." },
      { step: "04", title: "Performance & Polish", description: "60fps rendering validation, memory profiling, offline-first architecture, and accessibility compliance for both platforms." },
      { step: "05", title: "App Store Launch & CI", description: "Fastlane-automated submission, staged rollouts, crash monitoring, and OTA update strategy for post-launch agility." },
    ],
    technologies: ["Flutter", "Dart", "React Native", "TypeScript", "Firebase", "Fastlane"],
    benefits: [
      "Single codebase ships to iOS and Android simultaneously — halving time-to-market",
      "Near-native performance with Flutter's Impeller renderer or React Native's new architecture",
      "Shared business logic with your web or backend — one model across stacks",
      "App Store and Play Store optimised: ASO, screenshots, and metadata strategy included",
      "OTA updates via CodePush or Shorebird — ship fixes without waiting on app review",
    ],
    relatedWork: [],
  },
  {
    slug: "ai-automation-solutions",
    icon: Sparkles,
    title: "AI Automation & AI Solutions",
    tagline: "Intelligent systems. Effortless scale.",
    description:
      "AI agents, workflow automation, chatbots, and intelligent business systems that transform how businesses operate, compete, and grow in the digital age.",
    process: [
      { step: "01", title: "AI Readiness Assessment", description: "Evaluating your data infrastructure and identifying high-impact AI opportunities within your current workflows." },
      { step: "02", title: "Data Strategy & Prep", description: "Structured and unstructured data processing, vector database setup, and RAG (Retrieval-Augmented Generation) design." },
      { step: "03", title: "Agentic Build", description: "Developing custom AI agents, fine-tuning LLMs, and building intelligent connectors to your existing software ecosystem." },
      { step: "04", title: "Safety & Reliability", description: "Prompt engineering, hallucination mitigation, guardrail implementation, and edge-case testing for production stability." },
      { step: "05", title: "Scalable Deployment", description: "Auto-scaling infrastructure for AI workloads, monitoring for drift, and continuous feedback loop integration." },
    ],
    technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "TensorFlow", "PyTorch"],
    benefits: [
      "Automate 70% of repetitive workflows with agentic AI",
      "Deploy custom-trained models that process your unique business logic",
      "Reduce operational costs while increasing response speed and accuracy",
      "Future-proof your architecture for the next wave of AI capabilities",
      "Private and secure LLM implementations — your data never leaves your control",
    ],
    relatedWork: [],
  },
  {
    slug: "ui-ux-design-branding",
    icon: PenTool,
    title: "UI/UX Design & Branding",
    tagline: "Distinctive. Usable. Scalable.",
    description:
      "Brand identity, product design, user research, and scalable design systems that make complex software feel intuitive, trusted, and unmistakably premium.",
    process: [
      { step: "01", title: "User Research", description: "Stakeholder interviews, audience analysis, user journeys, and product goals mapped into a clear design brief." },
      { step: "02", title: "Brand Identity", description: "Visual language, typography, color, voice, and interaction principles shaped around a premium market position." },
      { step: "03", title: "Product Design", description: "Information architecture, wireframes, interface design, and prototypes that clarify the product before build." },
      { step: "04", title: "Design System", description: "Reusable components, tokens, states, and documentation that keep every screen consistent as the product grows." },
      { step: "05", title: "Developer Handoff", description: "Production-ready specs, assets, interaction notes, and QA review so the final build preserves the design intent." },
    ],
    technologies: ["Brand Identity", "Design Systems", "Product Design", "User Research", "Figma", "Storybook"],
    benefits: [
      "A product experience that feels premium before a single feature is explained",
      "Clear brand identity across web, mobile, pitch decks, and customer touchpoints",
      "Design systems that reduce build time while protecting visual consistency",
      "User research that de-risks product decisions before engineering investment",
      "Developer-ready handoff with fewer interpretation gaps and less rework",
    ],
    relatedWork: [],
  },
  {
    slug: "business-process-automation",
    icon: Workflow,
    title: "Business Process Automation",
    tagline: "Less friction. More throughput.",
    description:
      "Workflow automation, CRM automation, internal tools, and AI-powered operations that remove manual bottlenecks from growing teams.",
    process: [
      { step: "01", title: "Operations Mapping", description: "Document current workflows, ownership, approval paths, data handoffs, and the manual steps slowing teams down." },
      { step: "02", title: "Automation Strategy", description: "Prioritise high-return workflows and define the right mix of integrations, internal tools, AI support, and governance." },
      { step: "03", title: "System Integration", description: "Connect CRM, finance, support, analytics, and communication tools through reliable APIs and event-driven workflows." },
      { step: "04", title: "Internal Tooling", description: "Build secure dashboards, admin panels, approval flows, and role-based tools tailored to how your team actually works." },
      { step: "05", title: "Measurement & Iteration", description: "Track time saved, error reduction, response speed, and adoption so automation keeps improving after launch." },
    ],
    technologies: ["Workflow Automation", "CRM Automation", "Internal Tools", "AI Operations", "Zapier", "APIs"],
    benefits: [
      "Reduce repetitive manual work across sales, support, finance, and operations",
      "Improve visibility with dashboards and workflows built around real business rules",
      "Automate CRM updates, lead routing, reporting, and follow-up without losing control",
      "Use AI where it improves speed and accuracy, with human approval where it matters",
      "Create internal systems your team can depend on instead of scattered spreadsheets",
    ],
    relatedWork: [],
  },
  {
    slug: "technology-consulting",
    icon: Lightbulb,
    title: "Technology Consulting",
    tagline: "Clarity before complexity.",
    description:
      "Digital transformation, system architecture, technical audits, and product strategy for leaders making high-stakes technology decisions.",
    process: [
      { step: "01", title: "Business Context", description: "Understand commercial goals, team capacity, technical constraints, and the decisions that need sharper evidence." },
      { step: "02", title: "Technical Audit", description: "Review architecture, code quality, infrastructure, security posture, delivery workflow, and operational risks." },
      { step: "03", title: "Architecture Roadmap", description: "Define target-state systems, integration boundaries, migration plans, and platform decisions with trade-offs documented." },
      { step: "04", title: "Product Strategy", description: "Translate business goals into product priorities, release sequencing, capability maps, and investment recommendations." },
      { step: "05", title: "Execution Support", description: "Support internal teams with technical leadership, vendor review, implementation guidance, and decision checkpoints." },
    ],
    technologies: ["Digital Transformation", "System Architecture", "Technical Audits", "Product Strategy", "Cloud Strategy", "Security Review"],
    benefits: [
      "Make major technology decisions with evidence, not guesswork",
      "Identify architecture, security, performance, and delivery risks before they compound",
      "Align product strategy with technical reality and business outcomes",
      "Give leadership and engineering teams a shared roadmap for execution",
      "Reduce waste by choosing the right systems, stack, and sequencing early",
    ],
    relatedWork: [],
  },
  {
    slug: "maintenance-support",
    icon: ShieldCheck,
    title: "Maintenance & Support",
    tagline: "Reliable after launch.",
    description:
      "Monitoring, updates, security patches, enhancements, and performance optimisation that keep digital products stable, secure, and improving.",
    process: [
      { step: "01", title: "Support Baseline", description: "Audit the current product, dependencies, infrastructure, monitoring, deployment flow, and known operational risks." },
      { step: "02", title: "Monitoring Setup", description: "Configure uptime checks, error tracking, performance metrics, alerting, and reporting around business-critical journeys." },
      { step: "03", title: "Security & Updates", description: "Manage dependency updates, security patches, platform upgrades, backups, and vulnerability response with clear priority levels." },
      { step: "04", title: "Enhancement Cycle", description: "Plan and ship improvements, bug fixes, UX refinements, and feature updates through a predictable release rhythm." },
      { step: "05", title: "Performance Optimisation", description: "Continuously tune speed, reliability, database queries, infrastructure usage, and user-facing quality metrics." },
    ],
    technologies: ["Monitoring", "Updates", "Security Patches", "Performance", "Sentry", "CI/CD"],
    benefits: [
      "Keep products secure, stable, and compatible as platforms and dependencies evolve",
      "Catch issues early with monitoring, alerting, and clear response workflows",
      "Improve performance and reliability without waiting for a full rebuild",
      "Ship enhancements through a disciplined maintenance backlog",
      "Give stakeholders confidence that the product is cared for after launch",
    ],
    relatedWork: [],
  },
  {
    slug: "cloud-devops-solutions",
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    tagline: "Resilience. Scale. Security.",
    description:
      "Cloud infrastructure, CI/CD pipelines, automated deployment, monitoring, and high-availability architecture built for limitless scale.",
    process: [
      { step: "01", title: "Infrastructure Audit", description: "Reviewing current cloud usage, identifying bottlenecks, security risks, and cost-saving opportunities." },
      { step: "02", title: "Architecture Design", description: "Designing multi-region, containerised, or serverless architectures based on specific scale and compliance requirements." },
      { step: "03", title: "CI/CD Implementation", description: "Building automated pipelines for testing, security scanning, and zero-downtime deployment (Blue/Green, Canary)." },
      { step: "04", title: "Security Hardening", description: "IAM policy least privilege, encryption at rest and in transit, and automated threat detection and response." },
      { step: "05", title: "Observability & Ops", description: "Setting up real-time monitoring, alerting, error tracking, and automated scaling policies for hands-off stability." },
    ],
    technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Prometheus"],
    benefits: [
      "99.99% uptime with self-healing, multi-region architectures",
      "Ship code faster with automated testing and deployment pipelines",
      "Reduce cloud spend by up to 30% through automated resource management",
      "Enterprise-grade security and compliance (SOC2/GDPR) ready infrastructure",
      "Scale from 1 to 1M users without manual intervention",
    ],
    relatedWork: [],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
