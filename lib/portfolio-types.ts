/**
 * Portfolio data types.
 *
 * Every interface has two layers:
 *   1. Required fields that the current UI consumes.
 *   2. Optional fields (slug, body, image, links, etc.) that become
 *      mandatory once you load entries from MDX front-matter or a JSON API.
 *
 * When migrating to MDX / JSON, simply import these types and validate
 * the parsed data against them (e.g. with Zod — see bottom of file).
 */

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

/** Tag values used across projects and filters. */
export type ProjectTag = "Agents" | "RAG" | "MCP" | "Evals" | "Cloud"

export interface Project {
  /** Display name shown in the card heading. */
  name: string
  /** One-to-two sentence summary. */
  description: string
  /** Categorisation tags for filtering. */
  tags: readonly ProjectTag[]
  /** Promotes the card to a larger featured layout. */
  featured: boolean
  /** Whether a live/interactive demo is available. */
  hasDemo: boolean

  // -- Extensible fields for MDX / JSON loading --
  /** URL-safe identifier, e.g. "agentic-support-desk". */
  slug?: string
  /** Relative path or URL to a cover image / screenshot. */
  image?: string
  /** GitHub / live-demo / blog-post links. */
  links?: {
    github?: string
    demo?: string
    post?: string
  }
  /** Long-form body (raw MDX string or pre-rendered HTML). */
  body?: string
  /** ISO-8601 date the project was published / last updated. */
  date?: string
}

/** Literal union of every filter option including the "All" sentinel. */
export type FilterTag = "All" | ProjectTag

// ---------------------------------------------------------------------------
// Labs (mini demos)
// ---------------------------------------------------------------------------

export interface Lab {
  /** Demo title. */
  name: string
  /** Which capability area this demo covers. */
  type: string
  /** Short description shown before the demo is opened. */
  description: string

  // -- Extensible --
  slug?: string
  /** Route or external URL to the full demo. */
  href?: string
  /** Whether the demo is currently live vs. coming-soon. */
  status?: "live" | "coming-soon"
}

// ---------------------------------------------------------------------------
// Engineering Principles
// ---------------------------------------------------------------------------

/** Lucide icon names the component maps to actual icons. */
export type PrincipleIcon =
  | "BookOpen"
  | "Shield"
  | "FlaskConical"
  | "Activity"
  | "UserCheck"
  | "Rocket"

export interface Principle {
  title: string
  description: string
  icon: PrincipleIcon
}

// ---------------------------------------------------------------------------
// Posts / Writing
// ---------------------------------------------------------------------------

export interface Post {
  title: string
  /** One-line teaser for the list view. */
  excerpt: string
  /** ISO-8601 publish date. */
  date: string

  // -- Extensible --
  slug?: string
  /** Reading time in minutes (can be computed from body length). */
  readingTime?: number
  /** Tags for filtering / related-post logic. */
  tags?: string[]
  /** Long-form body (raw MDX string or pre-rendered HTML). */
  body?: string
}

// ---------------------------------------------------------------------------
// Highlights (proof strip)
// ---------------------------------------------------------------------------

export interface Highlight {
  label: string
  description: string
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string
  href: string
}

// ---------------------------------------------------------------------------
// Tech Stack
// ---------------------------------------------------------------------------

export type TechStackItem = string

// ---------------------------------------------------------------------------
// Terminal Lines (hero animation)
// ---------------------------------------------------------------------------

export type TerminalLine = string

// ---------------------------------------------------------------------------
// Loader helpers — use these when migrating to MDX / JSON
// ---------------------------------------------------------------------------

/**
 * Generic loader signature.
 * Implement one per content type when you switch to file-based content.
 *
 * @example
 * // MDX loader
 * const loadProjects: ContentLoader<Project> = async () => {
 *   const files = await glob('content/projects/*.mdx')
 *   return Promise.all(files.map(parseProjectMDX))
 * }
 *
 * @example
 * // JSON API loader
 * const loadProjects: ContentLoader<Project> = async () => {
 *   const res = await fetch('/api/projects')
 *   return res.json()
 * }
 */
export type ContentLoader<T> = () => Promise<T[]>

/**
 * A resolved content collection: the array plus lightweight metadata.
 * Handy when you want to pass both data and collection-level info
 * (e.g. total count, last-updated timestamp) to a page.
 */
export interface ContentCollection<T> {
  items: T[]
  total: number
  lastUpdated?: string
}
