const normalizePathname = (pathname: string): string => {
  const withoutQuery = pathname.split("?")[0].split("#")[0]
  const normalized = withoutQuery.replace(/\/+$/, "")
  return normalized || "/"
}

const normalizeLocale = (locale: string): string =>
  locale.replace(/^\/+|\/+$/g, "")

export const resolveSectionHref = (
  href: string,
  locale: string,
  pathname: string
): string => {
  if (!href.startsWith("#")) return href

  const normalizedLocale = normalizeLocale(locale)
  const homePath = `/${normalizedLocale}`
  const normalizedPathname = normalizePathname(pathname)
  const isHome = normalizedPathname === homePath

  return isHome ? href : `${homePath}${href}`
}
