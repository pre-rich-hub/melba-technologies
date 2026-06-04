import { LucideIcon, Code2, Globe, TabletSmartphone, Sparkles, Palette, Cloud } from "lucide-react"

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
    slug: "product-design",
    icon: Palette,
    title: "Product Design",
    tagline: "Human-centric. Pixel-perfect.",
    description:
      "User experience design, interface design, wireframing, prototyping, and scalable design systems that make complex software feel effortless.",
    process: [
      { step: "01", title: "User Research", description: "Stakeholder interviews, user personas, and empathy mapping to define the problem space and user needs." },
      { step: "02", title: "UX Architecture", description: "Information architecture, user flows, and low-fidelity wireframing to establish the structure and logic of the product." },
      { step: "03", title: "Visual Identity", description: "Defining color theory, typography, and visual language that aligns with your brand and appeals to your target audience." },
      { step: "04", title: "Interactive Prototype", description: "High-fidelity prototypes that simulate real user interactions for testing and stakeholder alignment before build." },
      { step: "05", title: "Design System", description: "Building a scalable library of components and tokens that ensure consistency across all present and future features." },
    ],
    technologies: ["Figma", "Adobe XD", "Principle", "Lottie", "Storybook", "React"],
    benefits: [
      "Higher user retention with intuitive, friction-free UX flows",
      "Design systems that reduce development time by up to 40% over time",
      "Accessible by design — WCAG 2.1 compliance baked into every component",
      "Pixel-precise specifications and assets ready for developer handover",
      "Consistency across web, mobile, and desktop products",
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
      "Scale from 1 to 1M users ohne manual intervention",
    ],
    relatedWork: [],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
