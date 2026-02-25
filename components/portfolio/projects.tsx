"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { PROJECTS, FILTER_TAGS } from "@/lib/portfolio-data"
import { ArrowRight, ExternalLink, Star, TrendingUp } from "lucide-react"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const featured = PROJECTS.find((p) => p.featured)
  const regular = PROJECTS.filter((p) => !p.featured)

  const filtered =
    activeFilter === "All"
      ? regular
      : regular.filter((p) => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            Production systems I have designed and shipped across fintech, payments, and insurance.
          </p>
        </div>

        {/* Featured project */}
        {featured && (
          <Card className="mb-10 overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card">
            <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:p-8">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <Star className="size-4 text-primary" />
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground lg:text-2xl">
                  {featured.name}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <Button size="lg" className="gap-2">
                  Read More
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Filter tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card
              key={project.name}
              className="group flex flex-col transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <CardTitle className="text-base">{project.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[11px]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" className="gap-1.5">
                  Details
                  <ArrowRight className="size-3" />
                </Button>
                {project.hasDemo ? (
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <ExternalLink className="size-3" />
                    Live Demo
                  </Button>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5 opacity-50"
                        disabled
                      >
                        <ExternalLink className="size-3" />
                        Live Demo
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Coming soon</TooltipContent>
                  </Tooltip>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* AI evolution callout */}
        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <TrendingUp className="size-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Now evolving toward AI systems
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              The same production engineering principles behind these projects — clear architecture, rigorous testing, and observability — are now being applied to AI agents, RAG pipelines, and evaluation frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
