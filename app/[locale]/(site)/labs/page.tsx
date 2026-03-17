import { LabCard } from "@/components/labs/lab-card"
import { getLabs } from "@/features/labs"
import { FlaskConical } from "lucide-react"
import { getTranslations } from "next-intl/server"

export default async function LabsPage() {
  const t = await getTranslations("labs")
  const labs = await getLabs()

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <FlaskConical className="size-6 text-primary" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("pageTitle")}
            </h1>
            <p className="mt-1 text-muted-foreground">{t("pageSubtitle")}</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <LabCard key={lab.slug} lab={lab} />
          ))}
        </div>
      </div>
    </section>
  )
}
