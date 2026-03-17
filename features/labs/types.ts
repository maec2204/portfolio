export type LabType = "RAG" | "MCP" | "Evals"

export type LabIcon = "MessageSquare" | "Wrench" | "Brain"

export type LabStatus = "live" | "coming-soon"

export type LabMaturity = "concept" | "prototype" | "live"

export type LabRuntime = "client" | "edge" | "node" | "external"

export type LabVisibility = "embedded" | "internal-route" | "external"

export interface LabDefinition {
  slug: string
  nameKey: string
  descriptionKey: string
  type: LabType
  icon: LabIcon
  status: LabStatus
  maturity: LabMaturity
  runtime: LabRuntime
  visibility: LabVisibility
  href?: string
}
