import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TECH_STACK } from "@/lib/portfolio-data"
import { User, CheckCircle2 } from "lucide-react"

const STRENGTHS = [
  "Pragmatic problem solving  delivering production systems in fintech, insurance, and payments.",
  "Strong communication  explaining architecture decisions to technical and non-technical stakeholders.",
  "Leadership & teamwork  coordinating cross-functional delivery in distributed teams.",
  "Testing & maintainability  CI pipelines, type safety, and automated regression checks.",
  "Systematic learner  applying production engineering rigor to AI agents, RAG, and evaluation.",
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
              {"I'm Moisés Escudero, a Software Engineer from Caracas, Venezuela, with a degree from Universidad Católica Andrés Bello. Over the past years I've built production systems across fintech, banking, insurance, crowdfunding, parking automation, and payment platforms — primarily with React, Next.js, TypeScript, GraphQL, MongoDB, Java, and Firebase."}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {"I'm now channeling that production engineering background into AI systems. The same principles that keep financial platforms reliable — clear architecture, rigorous testing, observability, and explicit failure handling — apply directly to building trustworthy AI agents, RAG pipelines, and evaluation frameworks. This is not a pivot away from engineering; it's the next layer of it."}
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
