export function getResumeUrl(locale: string): string {
  return locale === "es"
    ? "/cv/moises-escudero-cv-es.pdf"
    : "/cv/moises-escudero-cv-en.pdf"
}
