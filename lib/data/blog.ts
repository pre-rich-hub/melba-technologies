export interface BlogPost {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  /** Fully written article body is rendered by app/blog/[slug]; outlines have no body. */
  status: "published" | "outline"
}

// Populated in the blog step.
export const blogPosts: BlogPost[] = []

export const publishedPosts = () => blogPosts.filter((p) => p.status === "published")
export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug)
