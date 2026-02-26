import type { ReactNode } from "react"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"

export default function SiteLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar locale={params.locale} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
