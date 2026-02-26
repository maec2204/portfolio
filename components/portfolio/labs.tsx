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
import type { LabIcon } from "@/lib/portfolio-types"
import type { LucideIcon } from "lucide-react"
import { FlaskConical, Play, MessageSquare, Wrench, Brain } from "lucide-react"
import { useTranslations } from "next-intl"

const LAB_ICONS: Record<LabIcon, LucideIcon> = {
  MessageSquare,
  Wrench,
  Brain,
}

export function Labs() {
  const t = useTranslations()

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
              {t("labs.title")}
            </h2>
            <p className="mt-1 text-muted-foreground">
              {t("labs.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map((lab) => {
            const Icon = LAB_ICONS[lab.icon]
            return (
              <Card
                key={lab.nameKey}
                className="group flex flex-col transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <Badge variant="outline" className="text-[11px]">
                      {t(`labs.types.${lab.type}`)}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{t(lab.nameKey)}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {t(lab.descriptionKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Badge
                    variant="secondary"
                    className="text-[11px] text-muted-foreground"
                  >
                    {t("labs.comingSoon")}
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Play className="size-3" />
                        {t("labs.runDemo")}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{t(lab.nameKey)}</DialogTitle>
                        <DialogDescription>
                          {t(lab.descriptionKey)}
                        </DialogDescription>
                      </DialogHeader>
                      <Separator />
                      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-secondary/30 p-8 text-center">
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="size-6" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {t("labs.demoPlaceholderTitle")}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t("labs.demoPlaceholderDescription", {
                              type: t(`labs.types.${lab.type}`),
                            })}
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
