"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { LABS } from "@/lib/portfolio-data"
import { FlaskConical, Play, MessageSquare, Wrench, Brain } from "lucide-react"

const LAB_ICONS = [MessageSquare, Wrench, Brain]

export function Labs() {
  return (
    <section
      id="labs"
      className="scroll-mt-20 border-t border-border/40 bg-secondary/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <FlaskConical className="size-6 text-primary" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              AI Systems Lab
            </h2>
            <p className="mt-1 text-muted-foreground">
              Where I am building the next stage of my engineering practice — RAG systems, tool-based agents, MCP integrations, and evaluation harnesses. In progress.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map((lab, i) => {
            const Icon = LAB_ICONS[i]
            return (
              <Card
                key={lab.name}
                className="group flex flex-col transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <Badge variant="outline" className="text-[11px]">
                      {lab.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{lab.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {lab.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Badge
                    variant="secondary"
                    className="text-[11px] text-muted-foreground"
                  >
                    Coming soon
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Play className="size-3" />
                        Run Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{lab.name}</DialogTitle>
                        <DialogDescription>
                          {lab.description}
                        </DialogDescription>
                      </DialogHeader>
                      <Separator />
                      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-secondary/30 p-8 text-center">
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="size-6" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            Demo placeholder
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            This space will host an interactive {lab.type}{" "}
                            demo — chat UI, tool logs, or planning
                            visualization.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
