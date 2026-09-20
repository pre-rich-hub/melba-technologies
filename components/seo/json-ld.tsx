type JsonLdData = Record<string, unknown> | Record<string, unknown>[]

/** Renders JSON-LD in the server HTML. Invisible: a non-rendered <script> tag. */
export function JsonLd({ data }: { data: JsonLdData }) {
  // Escape "<" so content can never close the script tag early.
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
