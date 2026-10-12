import thumbOcio from "../../assets/thumbnails/blog-ocio-digital.webp";
import thumbCascada from "../../assets/thumbnails/blog-metodologia-cascada.webp";
import thumbActividades from "../../assets/thumbnails/blog-actividades.webp";

import type { ProjectPreview } from "../types";

// Cada entrada del blog sale como tarjeta en la sección "Blog".
// slug = nombre del archivo en src/content/projects/en/ (y de/), sin ".ts"
export const blogPreviews: ProjectPreview[] = [
  {
    title: "Impacto del ocio digital en el rendimiento académico",
    slug: "ocio-digital-rendimiento",
    thumbnail: thumbOcio,
    description: "Investigación · cartel, resumen y memoria técnica",
  },
  {
    title: "Metodología en Cascada",
    slug: "metodologia-cascada",
    thumbnail: thumbCascada,
    description: "Presentación y reporte técnico",
  },
  {
    title: "Actividades de diagramas e interfaces",
    slug: "actividades-diseno",
    thumbnail: thumbActividades,
    description: "Diagramas UML, swimlane e interfaces",
  },
];
