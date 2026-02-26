"use client"

import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CORE_STRENGTH_COUNT, TECH_STACK } from "@/lib/portfolio-data"
import { User, CheckCircle2 } from "lucide-react"

export function About() {
  const t = useTranslations("About")

  const strengths = Array.from({ length: CORE_STRENGTH_COUNT }, (_, i) =>
    t(`strengths.${i}`)
  )

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border/40 bg-secondary/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <User className="size-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio column */}
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-muted-foreground">
              {t("bio1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("bio2")}
            </p>

            <Separator className="my-8" />

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("coreStrengthsTitle")}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {strengths.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack column */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("techStackTitle")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
