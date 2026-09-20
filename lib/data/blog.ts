import type { Faq } from "./faqs"

export interface BlogSection {
  heading: string
  paragraphs?: string[]
  list?: string[]
  table?: { headers: string[]; rows: string[][] }
}

export interface BlogPost {
  slug: string
  /** H1 and article headline. */
  title: string
  /** Shorter <title> so the full page title stays under 60 characters. */
  metaTitle: string
  description: string
  /** Direct, quotable 40-60 word answer shown first. */
  answer: string
  datePublished: string
  dateModified: string
  sections: BlogSection[]
  faqs: Faq[]
  related: { label: string; href: string }[]
}

// Only fully written articles live here. Outlines for future posts are in docs/content/blog-outlines.md
// so thin pages are never published.
// TODO(content): replace the organization byline with a named author (and add Person schema) once confirmed.
export const blogPosts: BlogPost[] = [
  {
    slug: "tour-operator-website-cost-ethiopia",
    title: "How Much Does a Tour Operator Website Cost in Ethiopia?",
    metaTitle: "Tour Operator Website Cost in Ethiopia",
    description:
      "What decides the price of a tour operator website in Ethiopia: languages, booking flow, itineraries, design and SEO, plus questions to ask before you hire.",
    answer:
      "There is no single price, because cost depends on scope: how many languages, tours and itineraries you need, whether the site takes bookings or payments, and how much custom design and SEO work is involved. Melba Technology provides a fixed-scope, line-item proposal after a discovery call, so you see what each part costs.",
    datePublished: "2026-09-20",
    dateModified: "2026-09-20",
    sections: [
      {
        heading: "What drives the cost of a tour operator website",
        paragraphs: [
          "Two tour company websites can look similar on the surface and still differ enormously in effort. The table below shows the main factors and how each one moves the price.",
        ],
        table: {
          headers: ["Factor", "Keeps cost lower", "Pushes cost higher"],
          rows: [
            ["Languages", "One language", "Several languages, such as English, Spanish and French"],
            ["Booking flow", "Enquiry form or WhatsApp contact", "Online booking, availability and payment integration"],
            ["Tour content", "A handful of tour pages", "A full destination and itinerary architecture, one page per tour"],
            ["Design and brand", "Existing brand and logo", "Custom UI/UX, new brand identity and logo"],
            ["Imagery", "Existing photo library", "Optimized galleries and cinematic image delivery"],
            ["SEO and GEO", "Basic page metadata", "Destination-led structure, structured data and answer-ready content"],
            ["Integrations", "None", "CRM, live chat, analytics and enquiry tracking"],
          ],
        },
      },
      {
        heading: "What a tour operator website should include",
        list: [
          "A clear page for every tour and destination, so each itinerary can be found on its own in search",
          "Trust signals: verified reviews, your story, and who will actually guide the traveler",
          "An easy way to enquire or book, including WhatsApp or live chat for international travelers",
          "Multilingual pages for the markets you sell to",
          "Fast, mobile-first pages with optimized images",
          "Structured data and clear, quotable answers so search engines and AI assistants can understand and cite you",
        ],
      },
      {
        heading: "How long does it take?",
        paragraphs: [
          "Timelines depend on the number of tours, languages and integrations. As one reference point, our Hamba Ethiopia Tours platform was delivered in 6 weeks. We confirm a milestone plan before any work begins.",
        ],
      },
      {
        heading: "Ongoing costs to plan for",
        list: [
          "Domain name and hosting",
          "Image storage and delivery if you run large photo galleries",
          "Maintenance, security updates and content changes",
          "Optional SEO and content work after launch",
        ],
        paragraphs: [
          "Every Melba Technology engagement includes a 60-day post-launch support period, with retainer-based maintenance available afterwards.",
        ],
      },
      {
        heading: "Questions to ask before you hire a website developer",
        list: [
          "Can I see live tour or travel websites you have built, and can I visit them?",
          "Will the proposal break the price down line by line?",
          "Which languages, booking and payment options are included?",
          "How will my tours rank in Google and appear in AI assistant answers?",
          "Who will I work with day to day, and what support follows launch?",
        ],
      },
      {
        heading: "How Melba Technology prices tour websites",
        paragraphs: [
          // TODO(content): add published price ranges here only when the team approves them. Do not invent figures.
          "We work on a fixed-scope or time-and-materials basis, depending on how clearly the project is defined. After a discovery call you receive a detailed proposal with a line-item breakdown, so there are no surprises. See our tour and travel website development service, or browse the tour platforms we have built for Hamba Ethiopia Tours, Gonder Simien Tours, EthioAfro Tours and Ethio Origins Tour.",
        ],
      },
    ],
    faqs: [
      { q: "How much does a website for a tour company cost in Ethiopia?", a: "It depends on the number of languages, tours and integrations, and on whether you need booking or payment features. Melba Technology provides a fixed-scope, line-item proposal after a discovery call." },
      { q: "How long does it take to build a tour operator website?", a: "Our Hamba Ethiopia Tours platform took 6 weeks. Timelines vary with scope, and we agree milestones before starting." },
      { q: "Do I need online payments on my tour website?", a: "Not always. Many operators start with an enquiry form and WhatsApp contact and add booking and payment features later. We can build either." },
    ],
    related: [
      { label: "Tour & Travel Website Development", href: "/services/tour-travel-website-development" },
      { label: "Hamba Ethiopia Tours case study", href: "/work/hamba-tours" },
      { label: "Get your tour company recommended by AI", href: "/blog/get-tour-company-recommended-chatgpt-google-ai" },
    ],
  },
  {
    slug: "get-tour-company-recommended-chatgpt-google-ai",
    title: "How to Get Your Tour Company Recommended by ChatGPT and Google AI",
    metaTitle: "Get Your Tour Company Recommended by AI",
    description:
      "A practical checklist for tour operators: crawler access, answer-first content, structured data, consistent business details, reviews and tracking AI referrals.",
    answer:
      "No one can guarantee a place in ChatGPT or Google AI answers, but you can improve your chances. Make your site crawlable, publish clear quotable answers, add structured data, keep your business details consistent across the web, earn genuine third-party mentions, and track AI referrals so you can measure what works.",
    datePublished: "2026-09-20",
    dateModified: "2026-09-20",
    sections: [
      {
        heading: "How AI assistants find tour companies",
        paragraphs: [
          "AI assistants draw on web indexes, crawlers and third-party sources. If your site cannot be crawled, or your business details differ from place to place, there is little for an assistant to cite. Google states that the same fundamentals as regular Search apply to its AI features, so good SEO remains the base.",
        ],
      },
      {
        heading: "Which crawlers to allow",
        paragraphs: [
          "Your robots.txt decides which crawlers may read your site. The table lists the main ones. Search-focused crawlers are what let assistants cite you in answers; training crawlers are a separate business choice.",
        ],
        table: {
          headers: ["Crawler", "Used for"],
          rows: [
            ["Googlebot", "Google Search, including AI Overviews and AI Mode"],
            ["Bingbot", "Bing search, which Microsoft Copilot draws on"],
            ["OAI-SearchBot", "ChatGPT search results"],
            ["ChatGPT-User", "Pages a ChatGPT user asks it to open"],
            ["PerplexityBot", "Perplexity search results"],
            ["Claude-SearchBot", "Claude search results"],
            ["GPTBot, ClaudeBot, Google-Extended", "Model training controls (allowing them is optional)"],
          ],
        },
      },
      {
        heading: "A seven-step checklist for tour operators",
        list: [
          "Allow the search crawlers above and make sure key pages are server-rendered, not hidden behind scripts",
          "Open every tour and destination page with a short, direct answer of about 40 to 60 words: what the tour is, how long it runs and who it suits",
          "Add structured data for your organization, breadcrumbs and any FAQs that are visible on the page",
          "Keep your name, address, phone, email and description identical on your site, Google Business Profile and travel directories",
          "Earn genuine reviews and mentions on third-party sites such as Google, TripAdvisor and travel blogs",
          "Offer your pages in the languages your travelers search in, and keep them fast on mobile",
          "Track AI referrals in analytics and ask enquirers how they found you",
        ],
      },
      {
        heading: "How to measure AI visibility",
        paragraphs: [
          "Set up a channel group in Google Analytics 4 for referrals from chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com and claude.ai. Add a \"How did you find us?\" field to your enquiry form. Then run a fixed list of prompts every month, such as \"best tour operator for the Simien Mountains\", and log whether your company is mentioned and which page is cited.",
        ],
      },
      {
        heading: "What not to do",
        list: [
          "Do not publish fake reviews, ratings or awards",
          "Do not stuff pages with keywords or hide text from visitors",
          "Do not trust anyone who promises a guaranteed AI ranking",
        ],
      },
      {
        heading: "What is not guaranteed",
        paragraphs: [
          "AI answers change with every model and index update, and depend on factors outside your website, including what other sites say about you. Treat this checklist as a way to improve your odds and to measure progress, not as a promise. A file such as llms.txt is cheap to add, but there is no confirmed evidence that major assistants rely on it, so consider it supporting material only.",
          "If you want these foundations built into a new or existing tour website, see our tour and travel website development service, and the tour platforms we built for Ethio Origins Tour and EthioAfro Tours.",
        ],
      },
    ],
    faqs: [
      { q: "Can I pay to be recommended by ChatGPT?", a: "No. Recommendations in AI answers are not something you can buy or guarantee. You can improve your chances with crawlable, clear, consistent and well-reviewed content." },
      { q: "Should I block GPTBot or ClaudeBot?", a: "GPTBot and ClaudeBot are training crawlers, so blocking them is a business choice. To appear in search-style answers, allow the search crawlers such as OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot and Bingbot." },
      { q: "Does llms.txt help my tour company get cited?", a: "It is low-cost and harmless, but there is no confirmed evidence that major AI assistants use it. Treat it as supporting material, not a core strategy." },
    ],
    related: [
      { label: "Tour & Travel Website Development", href: "/services/tour-travel-website-development" },
      { label: "EthioAfro Tours case study", href: "/work/ethioafro-tours" },
      { label: "How much does a tour operator website cost?", href: "/blog/tour-operator-website-cost-ethiopia" },
    ],
  },
]

export const publishedPosts = () => blogPosts
export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug)
