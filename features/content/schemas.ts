import { z } from "zod"

const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/

export const contentStatusSchema = z.enum(["draft", "published"])

export const writingPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  date: z.string().regex(isoDateRegex),
  tags: z.array(z.string()).default([]),
  status: contentStatusSchema,
  body: z.string().min(1),
})

export const caseStudySchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  date: z.string().regex(isoDateRegex),
  status: contentStatusSchema,
  body: z.string().min(1),
})

export type WritingPost = z.infer<typeof writingPostSchema>
export type CaseStudy = z.infer<typeof caseStudySchema>
