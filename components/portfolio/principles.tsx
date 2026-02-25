import { PRINCIPLES } from "@/lib/portfolio-data"
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

const ICON_MAP = {
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
} as const

export function Principles() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            How I build systems
          </h2>
          <p className="mt-2 text-muted-foreground">
            Principles shaped by years of shipping production software.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => {
            const Icon = ICON_MAP[p.icon]
            return (
              <div
                key={p.title}
                className="group flex gap-4 rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
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
