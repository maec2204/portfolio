import "server-only"

import { cache } from "react"
import { LAB_REGISTRY } from "./registry"
import type { LabDefinition } from "./types"

export const getLabs = cache(async (): Promise<readonly LabDefinition[]> => LAB_REGISTRY)

export const getLabBySlug = cache(async (slug: string): Promise<LabDefinition | null> => {
  return LAB_REGISTRY.find((lab) => lab.slug === slug) ?? null
})
