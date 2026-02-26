"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/portfolio-data"
import { getResumeUrl } from "@/lib/resume"
import { cn } from "@/lib/utils"
import { usePathname, useRouter, Link } from "@/i18n/navigation"
import type { AppLocale } from "@/i18n/routing"
import { useLocale, useTranslations } from "next-intl"
import {
  Download,
  Menu,
  X,
  Moon,
  Sun,
  Terminal,
} from "lucide-react"

export function Navbar({ locale: localeProp }: { locale?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("")
  const { theme, setTheme } = useTheme()
  const t = useTranslations()
  const localeFromIntl = useLocale() as AppLocale
  const locale = (localeProp ?? localeFromIntl) as AppLocale
  const pathname = usePathname()
  const router = useRouter()
  const resumeUrl = getResumeUrl(locale)
  const isHome = pathname === `/${locale}` || pathname === "/"

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash)
    }

    updateHash()
    window.addEventListener("hashchange", updateHash)

    return () => {
      window.removeEventListener("hashchange", updateHash)
    }
  }, [])

  const resolveSectionHref = (href: string) => {
    if (!href.startsWith("#")) return href
    return isHome ? href : `/${locale}${href}`
  }

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return isHome && activeHash === href
    }

    if (href === "/journey") {
      return pathname === `/${locale}/journey` || pathname === "/journey"
    }

    return false
  }

  const handleLocaleChange = (nextLocale: AppLocale) => {
    if (nextLocale === locale) return

    const hash = typeof window !== "undefined" ? window.location.hash : ""
    router.replace(`${pathname}${hash}`, { locale: nextLocale })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label={t("navbar.mainNavigationAria")}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
        >
          <Terminal className="size-5" />
          <span className="text-base font-semibold tracking-tight">
            {t("navbar.logo")}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={resolveSectionHref(link.href)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/journey"
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                isActive("/journey")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t("journey.navLabel")}
            </Link>
          </li>
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 rounded-md border border-border/60 p-1">
            <Button
              type="button"
              variant={locale === "en" ? "secondary" : "ghost"}
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => handleLocaleChange("en")}
              aria-label={t("navbar.switchToEnglish")}
            >
              EN
            </Button>
            <Button
              type="button"
              variant={locale === "es" ? "secondary" : "ghost"}
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => handleLocaleChange("es")}
              aria-label={t("navbar.switchToSpanish")}
            >
              ES
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("navbar.toggleTheme")}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>
          <Button size="sm" asChild>
            <a
              href={resumeUrl}
              className="gap-2"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="size-3.5" />
              {t("navbar.downloadResume")}
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("navbar.toggleTheme")}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={resolveSectionHref(link.href)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/journey"
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive("/journey")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {t("journey.navLabel")}
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Button
              type="button"
              variant={locale === "en" ? "secondary" : "outline"}
              size="sm"
              className="h-8 px-3 text-xs"
              onClick={() => handleLocaleChange("en")}
              aria-label={t("navbar.switchToEnglish")}
            >
              EN
            </Button>
            <Button
              type="button"
              variant={locale === "es" ? "secondary" : "outline"}
              size="sm"
              className="h-8 px-3 text-xs"
              onClick={() => handleLocaleChange("es")}
              aria-label={t("navbar.switchToSpanish")}
            >
              ES
            </Button>
          </div>
          <div className="mt-4">
            <Button size="sm" className="w-full gap-2" asChild>
              <a
                href={resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="size-3.5" />
                {t("navbar.downloadResume")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
