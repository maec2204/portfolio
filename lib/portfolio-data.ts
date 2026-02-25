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
    name: "Crowdfunding Platform",
    slug: "crowdfunding-platform",
    description:
      "Full-featured investment crowdfunding platform with campaign management, investor dashboards, KYC flows, and real-time funding progress. Served thousands of active users in production.",
    tags: ["React", "Fullstack", "Fintech"],
    featured: true,
    hasDemo: false,
    date: "2024-06-01",
  },
  {
    name: "Parking Automation System",
    slug: "parking-automation",
    description:
      "IoT-integrated parking management system handling gate control, license plate recognition, payment processing, and occupancy tracking across multiple locations.",
    tags: ["Fullstack", "Fintech"],
    featured: false,
    hasDemo: false,
    date: "2023-11-01",
  },
  {
    name: "Insurance Quoting Engine",
    slug: "insurance-quoting-engine",
    description:
      "Remote engagement with a US-based insurance company. Built a dynamic quoting system with multi-step forms, risk calculations, and real-time premium estimation for end consumers.",
    tags: ["React", "Fullstack"],
    featured: false,
    hasDemo: false,
    date: "2023-05-01",
  },
  {
    name: "Banking & Payroll Systems",
    slug: "banking-payroll",
    description:
      "Core banking modules for payroll disbursement, transaction reconciliation, and reporting. Built with Java and integrated with legacy banking infrastructure.",
    tags: ["Java", "Fintech"],
    featured: false,
    hasDemo: false,
    date: "2022-08-01",
  },
  {
    name: "Payment Gateway & Crypto E-commerce",
    slug: "payment-gateway-crypto",
    description:
      "Custom payment gateway supporting fiat and cryptocurrency transactions. Integrated checkout flows, webhook-based settlement, and merchant dashboards.",
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
    description:
      "A retrieval-augmented generation pipeline with citation extraction. Query a knowledge base and inspect how chunks are ranked and referenced.",
    status: "coming-soon",
  },
  {
    name: "Tool Calling Sandbox",
    slug: "tool-calling-sandbox",
    type: "MCP",
    icon: "Wrench",
    description:
      "An agent that picks and executes tools through the Model Context Protocol. Inspect payloads, permissions, and return values in real time.",
    status: "coming-soon",
  },
  {
    name: "Agent Evaluation Harness",
    slug: "agent-eval-harness",
    type: "Evals",
    icon: "Brain",
    description:
      "Run property-based tests and regression suites against agent outputs. Compare prompt versions and track quality metrics over time.",
    status: "coming-soon",
  },
]

// ---------------------------------------------------------------------------
// Engineering Principles
// ---------------------------------------------------------------------------

export const PRINCIPLES: Principle[] = [
  {
    title: "Production-first mindset",
    description:
      "Every feature is built for real users from day one. Performance, error handling, and edge cases are part of the first commit, not an afterthought.",
    icon: "Rocket",
  },
  {
    title: "Clear architecture over shortcuts",
    description:
      "Well-defined boundaries between layers, explicit data flows, and readable code matter more than clever abstractions. Systems should be easy to reason about.",
    icon: "Layers",
  },
  {
    title: "Communication as a technical skill",
    description:
      "Documenting decisions, writing clear PRs, and explaining trade-offs to non-technical stakeholders is as important as writing the code itself.",
    icon: "MessageSquare",
  },
  {
    title: "Testing & maintainability",
    description:
      "Automated tests, type safety, and CI pipelines catch regressions before they reach users. Code that cannot be tested confidently cannot be shipped confidently.",
    icon: "TestTubeDiagonal",
  },
  {
    title: "Evolving toward AI-driven systems",
    description:
      "Applying the same rigor from production engineering to AI: grounded outputs, tool safety, evaluation suites, and cost-aware inference.",
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
    title: "From fintech frontends to AI agents: why the transition makes sense",
    slug: "fintech-to-ai-agents",
    excerpt:
      "Production systems taught me reliability, testing, and architecture. Those same principles apply directly to building trustworthy AI agents.",
    date: "2026-02-15",
  },
  {
    title: "Evaluation-first development for LLM applications",
    slug: "eval-first-llm-dev",
    excerpt:
      "Shipping a prompt without an eval suite is like deploying without tests. A practical framework for measuring agent quality.",
    date: "2026-01-28",
  },
  {
    title: "What the Model Context Protocol means for tool-based agents",
    slug: "mcp-tool-agents",
    excerpt:
      "MCP standardizes how agents discover and call tools. Notes on schema validation, auth scoping, and composability.",
    date: "2026-01-10",
  },
]

// ---------------------------------------------------------------------------
// Terminal Lines (hero animation)
// ---------------------------------------------------------------------------

export const TERMINAL_LINES: TerminalLine[] = [
  "React / Next.js / TypeScript",
  "Fintech, payments & banking systems",
  "Evolving into AI agents, RAG & MCP",
]

// ---------------------------------------------------------------------------
// Highlights (proof strip)
// ---------------------------------------------------------------------------

export const HIGHLIGHTS: Highlight[] = [
  {
    label: "React + TypeScript",
    description: "Years of production experience in type-safe frontend systems.",
    icon: "Code2",
  },
  {
    label: "Fintech & Payments",
    description: "Banking, crowdfunding, insurance, and payment platforms.",
    icon: "Landmark",
  },
  {
    label: "Fullstack Delivery",
    description: "End-to-end systems with GraphQL, MongoDB, Java, and Firebase.",
    icon: "Layers",
  },
  {
    label: "AI Systems (Next)",
    description: "Building toward RAG, agents, MCP, and evaluation frameworks.",
    icon: "TrendingUp",
  },
]

// ---------------------------------------------------------------------------
// About / Contact
// ---------------------------------------------------------------------------

export const CORE_STRENGTHS: StrengthItem[] = [
  "Pragmatic problem solving  delivering production systems in fintech, insurance, and payments.",
  "Strong communication  explaining architecture decisions to technical and non-technical stakeholders.",
  "Leadership & teamwork  coordinating cross-functional delivery in distributed teams.",
  "Testing & maintainability  CI pipelines, type safety, and automated regression checks.",
  "Systematic learner  applying production engineering rigor to AI agents, RAG, and evaluation.",
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "#", icon: "Github" },
  { label: "LinkedIn", href: "#", icon: "Linkedin" },
  { label: "X / Twitter", href: "#", icon: "Twitter" },
  { label: "Email", href: "mailto:hello@example.com", icon: "Mail" },
]

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Labs", href: "#labs" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]
