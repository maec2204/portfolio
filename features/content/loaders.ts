import "server-only"

import { cache } from "react"
import type { AppLocale } from "@/i18n/routing"
import {
  caseStudySchema,
  writingPostSchema,
  type CaseStudy,
  type WritingPost,
} from "./schemas"

const postSorter = (a: { date: string }, b: { date: string }) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()

async function readWritingJson(locale: AppLocale): Promise<unknown[]> {
  if (locale === "es") {
    const mod = await import("@/content/writing/es.json")
    return mod.default as unknown[]
  }

  const mod = await import("@/content/writing/en.json")
  return mod.default as unknown[]
}

async function readCaseStudiesJson(locale: AppLocale): Promise<unknown[]> {
  if (locale === "es") {
    const mod = await import("@/content/case-studies/es.json")
    return mod.default as unknown[]
  }

  const mod = await import("@/content/case-studies/en.json")
  return mod.default as unknown[]
}

export const getWritingPosts = cache(async (locale: AppLocale): Promise<WritingPost[]> => {
  const data = await readWritingJson(locale)
  return data
    .map((item) => writingPostSchema.parse(item))
    .filter((item) => item.status === "published")
    .sort(postSorter)
})

export const getWritingPostBySlug = cache(
  async (locale: AppLocale, slug: string): Promise<WritingPost | null> => {
    const posts = await getWritingPosts(locale)
    return posts.find((post) => post.slug === slug) ?? null
  }
)

export const getCaseStudies = cache(async (locale: AppLocale): Promise<CaseStudy[]> => {
  const data = await readCaseStudiesJson(locale)
  return data
    .map((item) => caseStudySchema.parse(item))
    .filter((item) => item.status === "published")
    .sort(postSorter)
})

export const getCaseStudyBySlug = cache(
  async (locale: AppLocale, slug: string): Promise<CaseStudy | null> => {
    const caseStudies = await getCaseStudies(locale)
    return caseStudies.find((item) => item.slug === slug) ?? null
  }
)
