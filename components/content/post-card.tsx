import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/i18n/navigation"
import type { WritingPost } from "@/features/content"

interface PostCardProps {
  post: WritingPost
  locale: string
}

export function PostCard({ post, locale }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Card className="group transition-shadow hover:shadow-lg hover:shadow-primary/5">
      <CardHeader>
        <CardDescription className="text-xs">{formattedDate}</CardDescription>
        <CardTitle className="text-base leading-snug transition-colors group-hover:text-primary">
          <Link href={`/writing/${post.slug}`} className="outline-none focus-visible:underline">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      </CardContent>
    </Card>
  )
}
