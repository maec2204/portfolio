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
} from "./portfolio-types"

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const PROJECTS: Project[] = [
  {
    name: "Agentic Support Desk (MCP + RAG)",
    slug: "agentic-support-desk",
    description:
      "End-to-end AI support system with tool-calling agents, human-in-the-loop approvals, audit logging, and citation-grounded answers from internal docs.",
    tags: ["Agents", "MCP", "RAG", "Evals"],
    featured: true,
    hasDemo: false,
  },
  {
    name: "RAG Docs Copilot",
    slug: "rag-docs-copilot",
    description:
      "Semantic search over technical documentation with citation extraction and a curated eval set for retrieval quality.",
    tags: ["RAG", "Evals"],
    featured: false,
    hasDemo: true,
  },
  {
    name: "MCP Tool Server",
    slug: "mcp-tool-server",
    description:
      "Reusable MCP server exposing composable tools for downstream apps with schema validation and auth middleware.",
    tags: ["MCP", "Cloud"],
    featured: false,
    hasDemo: false,
  },
  {
    name: "Evals Harness for Agents",
    slug: "evals-harness",
    description:
      "Regression tests and property-based testing framework with a metrics dashboard for tracking agent quality over time.",
    tags: ["Evals", "Agents"],
    featured: false,
    hasDemo: true,
  },
  {
    name: "Cloud Cost Guardrail Agent",
    slug: "cloud-cost-guardrail",
    description:
      "Pre-deploy agent that enforces cost policies, checks resource quotas, and flags drift before infrastructure changes land.",
    tags: ["Agents", "Cloud"],
    featured: false,
    hasDemo: false,
  },
  {
    name: "Observability for Agents",
    slug: "observability-agents",
    description:
      "Tracing, cost attribution, and latency monitoring dashboard for multi-step agent workflows in production.",
    tags: ["Agents", "Cloud"],
    featured: false,
    hasDemo: false,
  },
]

// ---------------------------------------------------------------------------
// Filter tags
// ---------------------------------------------------------------------------

export const FILTER_TAGS: readonly FilterTag[] = [
  "All",
  "Agents",
  "RAG",
  "MCP",
  "Evals",
  "Cloud",
]

// ---------------------------------------------------------------------------
// Labs (mini demos)
// ---------------------------------------------------------------------------

export const LABS: Lab[] = [
  {
    name: "Ask My Portfolio",
    slug: "ask-my-portfolio",
    type: "RAG",
    description:
      "Chat with my portfolio using retrieval-augmented generation. Ask about projects, stack, or experience.",
    status: "coming-soon",
  },
  {
    name: "Tool Calling Sandbox",
    slug: "tool-calling-sandbox",
    type: "MCP",
    description:
      "Watch an agent pick and execute tools in real time. Inspect payloads, permissions, and return values.",
    status: "coming-soon",
  },
  {
    name: "Agent Planning Visualizer",
    slug: "agent-planning-visualizer",
    type: "Agents",
    description:
      "Step through an agent's planning loop: goal decomposition, tool selection, execution, and reflection.",
    status: "coming-soon",
  },
]

// ---------------------------------------------------------------------------
// Engineering Principles
// ---------------------------------------------------------------------------

export const PRINCIPLES: Principle[] = [
  {
    title: "Grounded outputs",
    description:
      "Every answer cites its source. Hallucinations are caught by retrieval checks and eval suites.",
    icon: "BookOpen",
  },
  {
    title: "Tool safety & permissions",
    description:
      "Tools declare schemas and scopes. Agents never call undeclared actions or bypass auth.",
    icon: "Shield",
  },
  {
    title: "Evaluation before iteration",
    description:
      "Property-based tests and regression suites run before any prompt or retrieval change ships.",
    icon: "FlaskConical",
  },
  {
    title: "Observability & cost control",
    description:
      "Every LLM call is traced with latency, tokens, and cost. Budgets are enforced per-request.",
    icon: "Activity",
  },
  {
    title: "Human-in-the-loop for risky actions",
    description:
      "Destructive or high-impact operations require explicit approval before agents proceed.",
    icon: "UserCheck",
  },
  {
    title: "Reliable deployments",
    description:
      "Feature flags, canary rollouts, and automated rollback keep production stable under change.",
    icon: "Rocket",
  },
]

// ---------------------------------------------------------------------------
// Tech Stack
// ---------------------------------------------------------------------------

export const TECH_STACK: TechStackItem[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "shadcn/ui",
  "Postgres",
  "pgvector",
  "Python",
  "LangGraph",
  "AWS",
  "Cypress",
  "PostHog",
]

// ---------------------------------------------------------------------------
// Posts / Writing
// ---------------------------------------------------------------------------

export const POSTS: Post[] = [
  {
    title: "Why I test agents with property-based testing",
    slug: "pbt-for-agents",
    excerpt:
      "PBT finds edge cases that unit tests miss. Here is how I apply it to tool-calling agents.",
    date: "2026-02-10",
  },
  {
    title: "Building a citation layer for RAG",
    slug: "citation-layer-rag",
    excerpt:
      "Grounding answers is not enough, users need to verify. A walkthrough of my citation pipeline.",
    date: "2026-01-25",
  },
  {
    title: "MCP servers: composable tool APIs for agents",
    slug: "mcp-composable-tool-apis",
    excerpt:
      "How the Model Context Protocol makes tool integration reusable across projects.",
    date: "2026-01-12",
  },
]

// ---------------------------------------------------------------------------
// Terminal Lines (hero animation)
// ---------------------------------------------------------------------------

export const TERMINAL_LINES: TerminalLine[] = [
  "RAG: grounded answers with citations",
  "Tools: MCP-based integrations",
  "Evals: regression + property-based testing",
]

// ---------------------------------------------------------------------------
// Highlights (proof strip)
// ---------------------------------------------------------------------------

export const HIGHLIGHTS: Highlight[] = [
  {
    label: "Next.js + TypeScript",
    description: "Production React apps with type-safe, server-rendered UI.",
  },
  {
    label: "Agentic Systems",
    description: "Multi-step agents with tool use, planning, and memory.",
  },
  {
    label: "RAG + Retrieval Quality",
    description: "Semantic search with citations and measured recall.",
  },
  {
    label: "Evals + PBT",
    description: "Regression suites and property-based tests for LLM outputs.",
  },
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
