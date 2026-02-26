import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getTranslations } from "next-intl/server"

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations("journey")

  return (
    <section className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h1>
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
            {t("inProgress")}
          </Badge>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {t("intro")}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-wide text-muted-foreground">
                {t("roles.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-foreground">
              <p>{t("roles.frontend")}</p>
              <p>{t("roles.fullstack")}</p>
              <p>{t("roles.ai")}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 sm:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-wide text-muted-foreground">
                {t("positioning.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>{t("positioning.production")}</p>
              <p>{t("positioning.transition")}</p>
              <p>{t("positioning.scope")}</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10" />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle>{t("timeline.past.title")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {t("timeline.past.description")}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle>{t("timeline.present.title")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {t("timeline.present.description")}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle>{t("timeline.future.title")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {t("timeline.future.description")}
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle>{t("roadmap.now.title")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {t("roadmap.now.description")}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle>{t("roadmap.next.title")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {t("roadmap.next.description")}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle>{t("roadmap.later.title")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {t("roadmap.later.description")}
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <a href={`/${locale}#projects`}>{t("cta.projects")}</a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`/${locale}#contact`}>{t("cta.contact")}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
