import { SITE, absoluteUrl, CONTENT_LAST_UPDATED } from "./site"
import { services, unlistedServices } from "@/lib/data/services"
import { caseStudies } from "@/lib/data/case-studies"
import { publishedPosts } from "@/lib/data/blog"

// llms.txt is generated from the same data files as the site, so it cannot drift from the pages.

const allServices = () => [...services, ...unlistedServices]

function header() {
  return `# ${SITE.name}

> ${SITE.description} We also build for hospitality, real estate and automotive brands, and offer AI automation, cloud and DevOps, UI/UX design and technology consulting.

Last updated: ${CONTENT_LAST_UPDATED}
`
}

function contact() {
  return `## Contact

- Website: ${SITE.url}
- Email: ${SITE.email}
- Phone: ${SITE.phoneDisplay}
- Location: ${SITE.address.locality}, ${SITE.address.country}
- Start a project: ${absoluteUrl("/contact")}
`
}

export function buildLlmsTxt() {
  const lines = [
    header(),
    "## Services\n",
    ...allServices().map((s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.tagline}`),
    "\n## Case studies\n",
    ...caseStudies.map((c) => `- [${c.title}](${absoluteUrl(`/work/${c.slug}`)}): ${c.category} (${c.industry}). Live site: ${c.liveUrl}`),
    "\n## Key pages\n",
    `- [Software development company in Addis Ababa](${absoluteUrl("/software-development-company-addis-ababa")}): who we are, what we build and how we work with clients in Ethiopia`,
    `- [About](${absoluteUrl("/about")}): principles and values`,
    `- [Blog](${absoluteUrl("/blog")}): guides on web development, tour-operator websites and AI visibility`,
    ...publishedPosts().map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`),
    "",
    contact(),
  ]
  return lines.join("\n")
}

export function buildLlmsFullTxt() {
  const lines = [
    header(),
    "## Services\n",
    ...allServices().flatMap((s) => [
      `### ${s.title}`,
      `URL: ${absoluteUrl(`/services/${s.slug}`)}`,
      `${s.description}`,
      `Process: ${s.process.map((p) => `${p.step} ${p.title}`).join("; ")}`,
      `Technologies: ${s.technologies.join(", ")}`,
      `Benefits: ${s.benefits.join(" | ")}`,
      "",
    ]),
    "## Case studies\n",
    ...caseStudies.flatMap((c) => [
      `### ${c.title} (${c.category})`,
      `URL: ${absoluteUrl(`/work/${c.slug}`)}`,
      `Live site: ${c.liveUrl}`,
      `Industry: ${c.industry}. Timeline: ${c.timeline}.`,
      `Overview: ${c.overview}`,
      `Challenge: ${c.challenge}`,
      `Solution: ${c.solution}`,
      "",
    ]),
    contact(),
  ]
  return lines.join("\n")
}
