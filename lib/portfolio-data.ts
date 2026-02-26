import type {
  Project,
  FilterTag,
  Lab,
  Principle,
  Post,
  Highlight,
  NavLink,
  TechStackItem,
  SocialLink,
} from "./portfolio-types"

// ---------------------------------------------------------------------------
// Projects — text fields moved to messages/{locale}.json
// Components resolve names/descriptions via useTranslations("Projects")
// ---------------------------------------------------------------------------

export const PROJECTS: Project[] = [
  {
    name: "Crowdfunding Platform",
    slug: "crowdfunding-platform",
    description: "",
    tags: ["React", "Fullstack", "Fintech"],
    featured: true,
    hasDemo: false,
    date: "2024-06-01",
  },
  {
    name: "Parking Automation System",
    slug: "parking-automation",
    description: "",
    tags: ["Fullstack", "Fintech"],
    featured: false,
    hasDemo: false,
    date: "2023-11-01",
  },
  {
    name: "Insurance Quoting Engine",
    slug: "insurance-quoting-engine",
    description: "",
    tags: ["React", "Fullstack"],
    featured: false,
    hasDemo: false,
    date: "2023-05-01",
  },
  {
    name: "Banking & Payroll Systems",
    slug: "banking-payroll",
    description: "",
    tags: ["Java", "Fintech"],
    featured: false,
    hasDemo: false,
    date: "2022-08-01",
  },
  {
    name: "Payment Gateway & Crypto E-commerce",
    slug: "payment-gateway-crypto",
    description: "",
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
    name: "RAG Document Search",
    slug: "rag-document-search",
    type: "RAG",
    icon: "MessageSquare",
    description: "",
    status: "coming-soon",
  },
  {
    name: "Tool Calling Sandbox",
    slug: "tool-calling-sandbox",
    type: "MCP",
    icon: "Wrench",
    description: "",
    status: "coming-soon",
  },
  {
    name: "Agent Evaluation Harness",
    slug: "agent-eval-harness",
    type: "Evals",
    icon: "Brain",
    description: "",
    status: "coming-soon",
  },
]

// ---------------------------------------------------------------------------
// Engineering Principles
// ---------------------------------------------------------------------------

export const PRINCIPLES: Principle[] = [
  { title: "", description: "", icon: "Rocket" },
  { title: "", description: "", icon: "Layers" },
  { title: "", description: "", icon: "MessageSquare" },
  { title: "", description: "", icon: "TestTubeDiagonal" },
  { title: "", description: "", icon: "TrendingUp" },
]

// ---------------------------------------------------------------------------
// Tech Stack (not translated — brand names)
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
    title: "",
    slug: "fintech-to-ai-agents",
    excerpt: "",
    date: "2026-02-15",
  },
  {
    title: "",
    slug: "eval-first-llm-dev",
    excerpt: "",
    date: "2026-01-28",
  },
  {
    title: "",
    slug: "mcp-tool-agents",
    excerpt: "",
    date: "2026-01-10",
  },
]

// ---------------------------------------------------------------------------
// Terminal line count (hero animation)
// ---------------------------------------------------------------------------

export const TERMINAL_LINE_COUNT = 3

// ---------------------------------------------------------------------------
// Highlights (proof strip)
// ---------------------------------------------------------------------------

export const HIGHLIGHTS: Highlight[] = [
  { label: "", description: "", icon: "Code2" },
  { label: "", description: "", icon: "Landmark" },
  { label: "", description: "", icon: "Layers" },
  { label: "", description: "", icon: "TrendingUp" },
]

// ---------------------------------------------------------------------------
// About / Contact
// ---------------------------------------------------------------------------

export const CORE_STRENGTH_COUNT = 5

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "#", icon: "Github" },
  { label: "LinkedIn", href: "#", icon: "Linkedin" },
  { label: "X / Twitter", href: "#", icon: "Twitter" },
  { label: "Email", href: "mailto:hello@example.com", icon: "Mail" },
]

// ---------------------------------------------------------------------------
// Navigation — labels are now resolved via useTranslations("Navbar")
// ---------------------------------------------------------------------------

export const NAV_LINKS: NavLink[] = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "labs", href: "#labs" },
  { label: "writing", href: "#writing" },
  { label: "contact", href: "#contact" },
]
