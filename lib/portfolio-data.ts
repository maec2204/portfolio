import type {
  Project,
  FilterTag,
  Lab,
  Principle,
  Post,
  Highlight,
  NavLink,
  TechStackItem,
  TerminalLine,
  StrengthItem,
  SocialLink,
} from "./portfolio-types"

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const PROJECTS: Project[] = [
  {
    nameKey: "data.projects.items.crowdfunding.name",
    slug: "crowdfunding-platform",
    descriptionKey: "data.projects.items.crowdfunding.description",
    tags: ["React", "Fullstack", "Fintech"],
    featured: true,
    hasDemo: false,
    date: "2024-06-01",
  },
  {
    nameKey: "data.projects.items.parking.name",
    slug: "parking-automation",
    descriptionKey: "data.projects.items.parking.description",
    tags: ["Fullstack", "Fintech"],
    featured: false,
    hasDemo: false,
    date: "2023-11-01",
  },
  {
    nameKey: "data.projects.items.insurance.name",
    slug: "insurance-quoting-engine",
    descriptionKey: "data.projects.items.insurance.description",
    tags: ["React", "Fullstack"],
    featured: false,
    hasDemo: false,
    date: "2023-05-01",
  },
  {
    nameKey: "data.projects.items.banking.name",
    slug: "banking-payroll",
    descriptionKey: "data.projects.items.banking.description",
    tags: ["Java", "Fintech"],
    featured: false,
    hasDemo: false,
    date: "2022-08-01",
  },
  {
    nameKey: "data.projects.items.gateway.name",
    slug: "payment-gateway-crypto",
    descriptionKey: "data.projects.items.gateway.description",
    tags: ["Fullstack", "Fintech", "React"],
    featured: false,
    hasDemo: false,
    date: "2024-01-01",
  },
]

// ---------------------------------------------------------------------------
// Filter tags
// ---------------------------------------------------------------------------

export const FILTER_TAGS: readonly FilterTag[] = [
  "All",
  "React",
  "Fullstack",
  "Fintech",
  "Java",
]

// ---------------------------------------------------------------------------
// Labs (mini demos)
// ---------------------------------------------------------------------------

export const LABS: Lab[] = [
  {
    nameKey: "data.labs.items.rag.name",
    slug: "rag-document-search",
    type: "RAG",
    icon: "MessageSquare",
    descriptionKey: "data.labs.items.rag.description",
    status: "coming-soon",
  },
  {
    nameKey: "data.labs.items.tools.name",
    slug: "tool-calling-sandbox",
    type: "MCP",
    icon: "Wrench",
    descriptionKey: "data.labs.items.tools.description",
    status: "coming-soon",
  },
  {
    nameKey: "data.labs.items.evals.name",
    slug: "agent-eval-harness",
    type: "Evals",
    icon: "Brain",
    descriptionKey: "data.labs.items.evals.description",
    status: "coming-soon",
  },
]

// ---------------------------------------------------------------------------
// Engineering Principles
// ---------------------------------------------------------------------------

export const PRINCIPLES: Principle[] = [
  {
    titleKey: "data.principles.items.productionFirst.title",
    descriptionKey: "data.principles.items.productionFirst.description",
    icon: "Rocket",
  },
  {
    titleKey: "data.principles.items.architecture.title",
    descriptionKey: "data.principles.items.architecture.description",
    icon: "Layers",
  },
  {
    titleKey: "data.principles.items.communication.title",
    descriptionKey: "data.principles.items.communication.description",
    icon: "MessageSquare",
  },
  {
    titleKey: "data.principles.items.testing.title",
    descriptionKey: "data.principles.items.testing.description",
    icon: "TestTubeDiagonal",
  },
  {
    titleKey: "data.principles.items.aiEvolution.title",
    descriptionKey: "data.principles.items.aiEvolution.description",
    icon: "TrendingUp",
  },
]

// ---------------------------------------------------------------------------
// Tech Stack
// ---------------------------------------------------------------------------

export const TECH_STACK: TechStackItem[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "MongoDB",
  "Java",
  "Firebase",
  "Tailwind",
  "shadcn/ui",
  "Python",
  "LangGraph",
  "AWS",
  "PostgreSQL",
]

// ---------------------------------------------------------------------------
// Posts / Writing
// ---------------------------------------------------------------------------

export const POSTS: Post[] = [
  {
    titleKey: "data.posts.items.transition.title",
    slug: "fintech-to-ai-agents",
    excerptKey: "data.posts.items.transition.excerpt",
    date: "2026-02-15",
  },
  {
    titleKey: "data.posts.items.evalFirst.title",
    slug: "eval-first-llm-dev",
    excerptKey: "data.posts.items.evalFirst.excerpt",
    date: "2026-01-28",
  },
  {
    titleKey: "data.posts.items.mcp.title",
    slug: "mcp-tool-agents",
    excerptKey: "data.posts.items.mcp.excerpt",
    date: "2026-01-10",
  },
]

export const LEGACY_POSTS = POSTS

// ---------------------------------------------------------------------------
// Terminal Lines (hero animation)
// ---------------------------------------------------------------------------

export const TERMINAL_LINES: TerminalLine[] = [
  "data.terminal.lines.stack",
  "data.terminal.lines.fintech",
  "data.terminal.lines.ai",
]

// ---------------------------------------------------------------------------
// Highlights (proof strip)
// ---------------------------------------------------------------------------

export const HIGHLIGHTS: Highlight[] = [
  {
    labelKey: "data.highlights.items.react.label",
    descriptionKey: "data.highlights.items.react.description",
    icon: "Code2",
  },
  {
    labelKey: "data.highlights.items.fintech.label",
    descriptionKey: "data.highlights.items.fintech.description",
    icon: "Landmark",
  },
  {
    labelKey: "data.highlights.items.fullstack.label",
    descriptionKey: "data.highlights.items.fullstack.description",
    icon: "Layers",
  },
  {
    labelKey: "data.highlights.items.ai.label",
    descriptionKey: "data.highlights.items.ai.description",
    icon: "TrendingUp",
  },
]

// ---------------------------------------------------------------------------
// About / Contact
// ---------------------------------------------------------------------------

export const CORE_STRENGTHS: StrengthItem[] = [
  "data.strengths.problemSolving",
  "data.strengths.communication",
  "data.strengths.leadership",
  "data.strengths.testing",
  "data.strengths.learning",
]

export const SOCIAL_LINKS: SocialLink[] = [
  { labelKey: "data.socials.github", href: "https://github.com/maec2204", icon: "Github" },
  { labelKey: "data.socials.linkedin", href: "https://www.linkedin.com/in/moisesescudero", icon: "Linkedin" },
  { labelKey: "data.socials.email", href: "mailto:moises.a.escudero@gmail.com", icon: "Mail" },
]

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const NAV_LINKS: NavLink[] = [
  { labelKey: "data.nav.about", href: "#about" },
  { labelKey: "data.nav.projects", href: "#projects" },
  { labelKey: "data.nav.labs", href: "#labs" },
  { labelKey: "data.nav.writing", href: "#writing" },
  { labelKey: "data.nav.contact", href: "#contact" },
]
