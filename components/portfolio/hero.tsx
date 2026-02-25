"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { TERMINAL_LINES } from "@/lib/portfolio-data"
import { ArrowRight, Mail, ChevronRight } from "lucide-react"

export function Hero() {
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % TERMINAL_LINES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.08,transparent_70%)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:py-32">
        {/* Left copy */}
        <div className="flex max-w-xl flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </div>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Fullstack Engineer building{" "}
            <span className="text-primary">production-ready AI agents</span>
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            React / Next.js / TypeScript engineer specializing in AI Agents,
            RAG pipelines, MCP integrations, evaluation frameworks, and
            cloud-native deployments on AWS.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#projects" className="gap-2">
                View Projects
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact" className="gap-2">
                <Mail className="size-4" />
                Contact
              </a>
            </Button>
          </div>
        </div>

        {/* Right: terminal card */}
        <div className="w-full max-w-md flex-1">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-primary/5">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border/40 bg-secondary/30 px-4 py-3">
              <span className="size-3 rounded-full bg-red-500/70" />
              <span className="size-3 rounded-full bg-yellow-500/70" />
              <span className="size-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                agent.config.ts
              </span>
            </div>
            {/* Terminal body */}
            <div className="px-5 py-6 font-mono text-sm leading-relaxed">
              <div className="text-muted-foreground">
                <span className="text-primary">{">"}</span>{" "}
                {"agent.capabilities()"}
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {TERMINAL_LINES.map((line, i) => (
                  <div
                    key={line}
                    className={`flex items-start gap-2 transition-all duration-500 ${
                      i === lineIndex
                        ? "text-foreground opacity-100"
                        : "text-muted-foreground/60 opacity-70"
                    }`}
                  >
                    <ChevronRight
                      className={`mt-0.5 size-3.5 shrink-0 transition-colors duration-500 ${
                        i === lineIndex
                          ? "text-primary"
                          : "text-muted-foreground/40"
                      }`}
                    />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-1 text-muted-foreground/50">
                <span className="text-primary">{">"}</span>
                <span className="inline-block h-4 w-1.5 animate-pulse bg-primary/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
