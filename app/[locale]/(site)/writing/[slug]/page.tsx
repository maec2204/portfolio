import { notFound } from "next/navigation"
import { getWritingPostBySlug } from "@/features/content"

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ locale: "en" | "es"; slug: string }>
}) {
  const { locale, slug } = await params
  const post = await getWritingPostBySlug(locale, slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
          {post.body.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}
