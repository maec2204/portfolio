import { Badge } from "@/components/ui/badge"
import type { LabMaturity } from "@/features/labs"
import { useTranslations } from "next-intl"

interface LabStatusBadgeProps {
  maturity: LabMaturity
}

export function LabStatusBadge({ maturity }: LabStatusBadgeProps) {
  const t = useTranslations("labs")

  return (
    <Badge variant="secondary" className="text-[11px] text-muted-foreground">
      {t(`maturity.${maturity}`)}
    </Badge>
  )
}
