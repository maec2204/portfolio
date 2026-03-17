import { LabCard } from "@/components/labs/lab-card"
import { Button } from "@/components/ui/button"
import type { LabDefinition } from "@/features/labs"
import { Link } from "@/i18n/navigation"
import { FlaskConical } from "lucide-react"
import { getTranslations } from "next-intl/server"

interface LabsProps {
  labs: readonly LabDefinition[]
}

export async function Labs({ labs }: LabsProps) {
  const t = await getTranslations()

  return (
    <section
      id="labs"
      className="scroll-mt-20 border-t border-border/40 bg-secondary/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <FlaskConical className="size-6 text-primary" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {t("labs.title")}
            </h2>
            <p className="mt-1 text-muted-foreground">
              {t("labs.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <LabCard key={lab.slug} lab={lab} />
          ))}
        </div>

        <div className="mt-8">
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/labs">{t("labs.viewAllLabs")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
