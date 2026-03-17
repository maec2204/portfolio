"use client"

import { Separator } from "@/components/ui/separator"
import { resolveSectionHref } from "@/features/navigation"
import { NAV_LINKS } from "@/lib/portfolio-data"
import { usePathname } from "@/i18n/navigation"
import { Terminal } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-foreground">
            <Terminal className="size-4" />
            <span className="text-sm font-semibold tracking-tight">
              moises.dev
            </span>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={resolveSectionHref(link.href, locale, pathname)}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright", {year: new Date().getFullYear()})}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  )
}
