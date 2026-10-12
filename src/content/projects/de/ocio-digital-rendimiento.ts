import type { ProjectContent } from "../../types";

export default {
  title: "Impacto del ocio digital en el rendimiento académico",
  theme: "light",
  tags: ["python"],
  description:
    "Investigación cuantitativa, correlacional y transversal con 352 estudiantes de Ingeniería de la Universidad de Sonora (Industrial, Mecatrónica y Sistemas de Información). Se aplicó una encuesta digital con el Test de Reflexión Cognitiva (CRT) y los datos se procesaron con Python (Pandas), pruebas Z y t de Student, correlación y regresión lineal simple.<br/><br/>El promedio general (82.84) resultó superior al estándar de 80 puntos, y quienes dedican más de 6 horas diarias al ocio digital muestran promedios menores (≈80 frente a ≈85). La correlación es negativa y muy débil (r = -0.08, R² = 0.0064), por lo que el rendimiento es un fenómeno multifactorial.<br/><br/>Trabajo en equipo con Denise Abigail Rodríguez Andrade. Asignatura: Análisis de Datos, asesora Lucía Guadalupe Estrada Lara.",
  components: [
    { type: "text", props: { title: "Cartel científico", text: "Resumen visual de la investigación: método, hallazgos clave y conclusiones." } },
    { type: "document", props: { kind: "pdf", src: "docs/ocio-digital-cartel-cientifico.pdf", title: "Cartel científico", heightVh: 85 } },
    { type: "text", props: { title: "Resumen ejecutivo", text: "Versión corta del estudio: resumen, introducción, método, resultados y referencias." } },
    { type: "document", props: { kind: "pdf", src: "docs/ocio-digital-resumen-ejecutivo.pdf", title: "Resumen ejecutivo" } },
    { type: "text", props: { title: "Memoria técnica", text: "Documento completo (34 páginas): marco teórico, metodología paso a paso, análisis descriptivo, pruebas de hipótesis, regresión y conclusiones." } },
    { type: "document", props: { kind: "pdf", src: "docs/ocio-digital-memoria-tecnica.pdf", title: "Memoria técnica" } },
  ],
} as const satisfies ProjectContent;
