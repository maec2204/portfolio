import { HIGHLIGHTS } from "@/lib/portfolio-data"
import { Code2, Landmark, Layers, TrendingUp } from "lucide-react"

const ICONS = [Code2, Landmark, Layers, TrendingUp]

export function Highlights() {
  return (
    <section className="border-y border-border/40 bg-secondary/20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 px-6 py-8 text-center transition-colors hover:bg-secondary/40 sm:items-start sm:text-left"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
