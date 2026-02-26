"use client"

import { useTranslations } from "next-intl"
import { HIGHLIGHTS } from "@/lib/portfolio-data"
import type { HighlightIcon } from "@/lib/portfolio-types"
import type { LucideIcon } from "lucide-react"
import { Code2, Landmark, Layers, TrendingUp } from "lucide-react"

const HIGHLIGHT_ICON_MAP: Record<HighlightIcon, LucideIcon> = {
  Code2,
  Landmark,
  Layers,
  TrendingUp,
}

export function Highlights() {
  const t = useTranslations("Highlights")

  return (
    <section className="border-y border-border/40 bg-secondary/20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item, index) => {
          const Icon = HIGHLIGHT_ICON_MAP[item.icon]
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 px-6 py-8 text-center transition-colors hover:bg-secondary/40 sm:items-start sm:text-left"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t(`items.${index}.label`)}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t(`items.${index}.description`)}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
