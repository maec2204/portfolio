import { PRINCIPLES } from "@/lib/portfolio-data"
import type { PrincipleIcon } from "@/lib/portfolio-types"
import type { LucideIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import {
  BookOpen,
  Shield,
  FlaskConical,
  Activity,
  UserCheck,
  Rocket,
  Layers,
  MessageSquare,
  TestTubeDiagonal,
  TrendingUp,
} from "lucide-react"

const ICON_MAP: Record<PrincipleIcon, LucideIcon> = {
  BookOpen,
  Shield,
  FlaskConical,
  Activity,
  UserCheck,
  Rocket,
  Layers,
  MessageSquare,
  TestTubeDiagonal,
  TrendingUp,
}

export function Principles() {
  const t = useTranslations()

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t("principles.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {t("principles.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => {
            const Icon = ICON_MAP[p.icon]
            return (
              <div
                key={p.titleKey}
                className="group flex gap-4 rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t(p.titleKey)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t(p.descriptionKey)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
