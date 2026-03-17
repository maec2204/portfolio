import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@/i18n/navigation"
import type { LabDefinition, LabIcon } from "@/features/labs"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Brain, MessageSquare, Wrench } from "lucide-react"
import { useTranslations } from "next-intl"
import { LabStatusBadge } from "./lab-status-badge"

const LAB_ICONS: Record<LabIcon, LucideIcon> = {
  MessageSquare,
  Wrench,
  Brain,
}

interface LabCardProps {
  lab: LabDefinition
}

export function LabCard({ lab }: LabCardProps) {
  const t = useTranslations()
  const Icon = LAB_ICONS[lab.icon]

  return (
    <Card className="group flex flex-col transition-shadow hover:shadow-lg hover:shadow-primary/5">
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
      <CardContent className="mt-auto flex items-center justify-between gap-2">
        <LabStatusBadge maturity={lab.maturity} />
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="gap-2" asChild>
          <Link href={`/labs/${lab.slug}`}>
            {t("labs.viewDetails")}
            <ArrowRight className="size-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
