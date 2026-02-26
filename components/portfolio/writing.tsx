import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { POSTS } from "@/lib/portfolio-data"
import { ArrowRight, PenLine } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function Writing() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section id="writing" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PenLine className="size-6 text-primary" />
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t("writing.title")}
              </h2>
              <p className="mt-1 text-muted-foreground">
                {t("writing.subtitle")}
              </p>
            </div>
          </div>
          <Button variant="ghost" className="hidden gap-2 sm:inline-flex" asChild>
            <a href="#">
              {t("writing.viewAllPosts")}
              <ArrowRight className="size-3.5" />
            </a>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Card
              key={post.titleKey}
              className="group cursor-pointer transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <CardDescription className="text-xs">
                  {formatDate(post.date, locale)}
                </CardDescription>
                <CardTitle className="text-base leading-snug transition-colors group-hover:text-primary">
                  {t(post.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(post.excerptKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="ghost" className="gap-2" asChild>
            <a href="#">
              {t("writing.viewAllPosts")}
              <ArrowRight className="size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
