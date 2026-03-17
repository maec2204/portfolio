import { z } from "zod"

export const contactPayloadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
  website: z.string().optional().default(""),
})

export type ContactPayload = z.infer<typeof contactPayloadSchema>
