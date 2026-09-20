// Post-build SEO gate: parses the prerendered HTML and fails the build on
// invalid/incomplete JSON-LD, missing or duplicate titles, bad descriptions,
// missing canonicals, or a wrong H1 count.
// Usage: node scripts/seo-check.mjs   (reads NEXT_DIST_DIR or .next)
import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative } from "node:path"

const dist = process.env.NEXT_DIST_DIR || ".next"
const root = join(dist, "server", "app")
const SKIP = new Set(["_not-found.html", "_global-error.html"])

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && !SKIP.has(f) ? [p] : []
  })
}

const required = {
  Organization: ["name", "url", "logo", "address", "email", "telephone", "sameAs"],
  ProfessionalService: ["name", "url"],
  WebSite: ["url", "name"],
  Service: ["name", "description", "provider", "url"],
  BreadcrumbList: ["itemListElement"],
  FAQPage: ["mainEntity"],
  CreativeWork: ["name", "url", "creator"],
  BlogPosting: ["headline", "datePublished", "dateModified", "author", "publisher"],
  CollectionPage: ["name", "url"],
}

const errors = []
const titles = new Map()
const fail = (page, msg) => errors.push(`${page}: ${msg}`)

for (const file of walk(root)) {
  const page = "/" + relative(root, file).replace(/index\.html$/, "").replace(/\.html$/, "")
  const html = readFileSync(file, "utf8")

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.replace(/&amp;/g, "&")
  if (!title) fail(page, "missing <title>")
  else {
    if (title.length > 60) fail(page, `title is ${title.length} chars (>60): "${title}"`)
    if (titles.has(title)) fail(page, `duplicate title also on ${titles.get(title)}`)
    titles.set(title, page)
  }

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]
  if (!desc) fail(page, "missing meta description")
  else if (desc.length > 160) fail(page, `description is ${desc.length} chars (>160)`)

  if (!/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html)) fail(page, "missing canonical")

  const h1 = (html.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) fail(page, `expected exactly one <h1>, found ${h1}`)

  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  if (scripts.length === 0) fail(page, "no JSON-LD found")
  const types = new Set()
  for (const [, raw] of scripts) {
    let data
    try {
      data = JSON.parse(raw)
    } catch (e) {
      fail(page, `invalid JSON-LD: ${e.message}`)
      continue
    }
    for (const node of Array.isArray(data) ? data : [data]) {
      if (node["@context"] !== "https://schema.org") fail(page, "JSON-LD node missing schema.org @context")
      for (const t of [].concat(node["@type"] ?? [])) {
        types.add(t)
        for (const key of required[t] ?? []) {
          const v = node[key]
          if (v === undefined || v === "" || (Array.isArray(v) && v.length === 0)) fail(page, `${t} missing "${key}"`)
        }
        if (t === "FAQPage")
          for (const q of node.mainEntity ?? [])
            if (!q.name || !q.acceptedAnswer?.text) fail(page, "FAQPage question without name/answer text")
        if (t === "BreadcrumbList")
          for (const i of node.itemListElement ?? [])
            if (!i.name || !i.item || !i.position) fail(page, "BreadcrumbList item incomplete")
      }
    }
  }
  if (page !== "/" && !types.has("BreadcrumbList")) fail(page, "inner page without BreadcrumbList")
}

console.log(`SEO check: ${titles.size} pages scanned`)
if (errors.length) {
  console.error(errors.map((e) => `  ✗ ${e}`).join("\n"))
  process.exit(1)
}
console.log("SEO check passed")
