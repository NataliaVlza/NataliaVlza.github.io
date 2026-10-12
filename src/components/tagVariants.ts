export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "csharp"
  | "dotnet"
  | "sqlserver"
  | "typescript"
  | "python"
  | "java";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  csharp: "C#",
  dotnet: ".NET",
  sqlserver: "SQL Server",
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
} as const satisfies Record<TagVariant, string>;
