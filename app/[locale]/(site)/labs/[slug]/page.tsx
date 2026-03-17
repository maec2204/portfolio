import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getLabBySlug } from "@/features/labs"
import { Link } from "@/i18n/navigation"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"

export default async function LabDetailPage({
  params,
}: {
  params: Promise<{ locale: "en" | "es"; slug: string }>
}) {
  const { slug } = await params
  const t = await getTranslations()
  const lab = await getLabBySlug(slug)

  if (!lab) {
    notFound()
  }

  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Badge variant="outline">{t(`labs.types.${lab.type}`)}</Badge>
          <Badge variant="secondary">{t(`labs.maturity.${lab.maturity}`)}</Badge>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(lab.nameKey)}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {t(lab.descriptionKey)}
        </p>

        <div className="mt-8 rounded-xl border border-border/50 bg-secondary/20 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t("labs.detailNotesTitle")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {t("labs.detailNotesDescription")}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/labs">{t("labs.backToLabs")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#labs">{t("labs.backToHomeSection")}</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
