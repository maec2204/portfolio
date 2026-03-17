import { PostCard } from "@/components/content/post-card"
import { getWritingPosts } from "@/features/content"
import { getTranslations } from "next-intl/server"

export default async function WritingPage({
  params,
}: {
  params: Promise<{ locale: "en" | "es" }>
}) {
  const { locale } = await params
  const t = await getTranslations("writing")
  const posts = await getWritingPosts(locale)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("pageTitle")}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {t("pageSubtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
