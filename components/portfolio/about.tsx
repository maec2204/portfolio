import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TECH_STACK } from "@/lib/portfolio-data"
import { User, CheckCircle2 } from "lucide-react"

const STRENGTHS = [
  "UI/UX craft — pixel-level attention with accessible, responsive design.",
  "System integrations — APIs, webhooks, and third-party tool orchestration.",
  "Testing mindset — property-based tests, regression suites, and CI checks.",
  "Product analytics — instrumenting flows with PostHog and making data-driven calls.",
  "Building demos that explain systems — turning complex architecture into interactive stories.",
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/40 bg-secondary/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <User className="size-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            About
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio column */}
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-muted-foreground">
              I am a frontend-focused fullstack engineer with deep experience in
              React, Next.js, and TypeScript. I am now channeling that craft into
              AI agent engineering — building systems where LLMs use tools safely,
              retrieve knowledge accurately, and get evaluated rigorously before
              they reach production.
            </p>

            <Separator className="my-8" />

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Core Strengths
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {STRENGTHS.map((s) => (
                <li
                  key={s}
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
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs"
                >
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
