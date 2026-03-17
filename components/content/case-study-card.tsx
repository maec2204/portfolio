import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/i18n/navigation"
import type { CaseStudy } from "@/features/content"

interface CaseStudyCardProps {
  item: CaseStudy
  locale: string
}

export function CaseStudyCard({ item, locale }: CaseStudyCardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Card className="group transition-shadow hover:shadow-lg hover:shadow-primary/5">
      <CardHeader>
        <CardDescription className="text-xs">{formattedDate}</CardDescription>
        <CardTitle className="text-base leading-snug transition-colors group-hover:text-primary">
          <Link href={`/case-studies/${item.slug}`} className="outline-none focus-visible:underline">
            {item.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
      </CardContent>
    </Card>
  )
}
