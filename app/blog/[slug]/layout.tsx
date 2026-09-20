import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import { blogPosts, getPostBySlug } from "@/lib/data/blog"

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return buildMetadata({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  })
}

export default async function BlogPostLayout({ children, params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return <>{children}</>
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          blogPostingSchema(post),
          faqSchema(post.faqs),
        ]}
      />
      {children}
    </>
  )
}
