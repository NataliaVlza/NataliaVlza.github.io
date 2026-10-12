import type { ProjectContent } from "../../types";

export default {
  title: "Metodología en Cascada",
  theme: "light",
  tags: [],
  description:
    "Presentación y reporte técnico para la materia Ingeniería de Software I (Ingeniería en Sistemas de Información, Universidad de Sonora). Explican el origen del modelo (Benington y Royce), sus principios, las fases del ciclo de vida, los roles y equipos, la duración y los costos, la curva del costo del cambio de Boehm, las ventajas y desventajas, y cuándo conviene usarlo o evitarlo.<br/><br/>La presentación incluye una dinámica grupal, “Diseñando bajo el modelo en cascada”. Elaborado con Denise Abigail Rodríguez Andrade.",
  components: [
    { type: "text", props: { title: "Presentación", text: "Diapositivas con una actividad para vivir las limitaciones del modelo." } },
    { type: "document", props: { kind: "pdf", src: "docs/cascada-presentacion.pdf", title: "Presentación: Metodología en Cascada", heightVh: 68 } },
    { type: "text", props: { title: "Reporte técnico", text: "Documento escrito con la comparación entre cascada y los enfoques adaptativos." } },
    { type: "document", props: { kind: "pdf", src: "docs/cascada-reporte-tecnico.pdf", title: "Reporte técnico: Metodología en Cascada" } },
  ],
} as const satisfies ProjectContent;
