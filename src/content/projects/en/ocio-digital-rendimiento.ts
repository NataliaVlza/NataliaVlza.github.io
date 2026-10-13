import type { ProjectContent } from "../../types";

export default {
  title: "Impacto del ocio digital en el rendimiento académico",
  theme: "light",
  tags: ["python"],
  description:
    "Investigación con 352 estudiantes de Ingeniería de la Universidad de Sonora sobre cómo se relaciona el tiempo de ocio digital con el promedio académico.",
  components: [
    { type: "text", props: { title: "1. Descripción", text: "Investigación cuantitativa, correlacional y transversal con estudiantes de Ingeniería de la Universidad de Sonora, campus Hermosillo (Industrial, Mecatrónica y Sistemas de Información). Se midió el tiempo diario de ocio digital, el promedio académico y el desempeño en el Test de Reflexión Cognitiva (CRT).<br/><br/>Trabajo en equipo con Denise Abigail Rodríguez Andrade, para la asignatura de Análisis de Datos con la profesora Lucía Guadalupe Estrada Lara." } },
    { type: "text", props: { title: "2. Requerimientos del cliente", text: "El estudio debía responder una pregunta concreta: ¿en qué medida el uso de dispositivos digitales para actividades de ocio afecta el rendimiento académico de los estudiantes de ingeniería de la UNISON?" } },
    { type: "list", props: { title: "Requerimientos del trabajo", items: ["<strong>Objetivo:</strong> analizar la relación entre el ocio digital y el rendimiento académico.", "<strong>Técnicas:</strong> estadística descriptiva, pruebas de hipótesis (Z y t de Student), correlación y regresión lineal simple.", "<strong>Muestra:</strong> mínimo de 338 estudiantes (95% de confianza y 5% de error) sobre una población de 2,760.", "<strong>Entregables:</strong> memoria técnica, resumen ejecutivo y cartel científico."] } },
    { type: "text", props: { title: "3. ¿Cómo se diseñó la solución?", text: "Se diseñó un estudio en siete pasos, apoyado en el modelo de inferencia estadística de Mendenhall y en criterios de Sauro para las variables digitales." } },
    { type: "list", props: { title: "Pasos de la metodología", items: ["Objetivo y unidad experimental (estudiante activo del semestre 2026-1).", "Población y marco muestral, con muestreo aleatorio simple sin reemplazo.", "Diseño y tamaño de muestra con la fórmula para poblaciones finitas.", "Instrumento: encuesta digital de 17 preguntas cerradas con el CRT, y operacionalización de las variables.", "Recolección y preparación de datos.", "Análisis descriptivo y pruebas de hipótesis.", "Correlación y regresión lineal."] } },
    { type: "text", props: { title: "4. ¿Cómo se implementó la solución?", text: "La encuesta se aplicó en línea con Google Forms del 26 de marzo al 11 de abril de 2026, de forma anónima y voluntaria. Los datos se limpiaron y analizaron con Python (Pandas, NumPy y SciPy) y Excel: se eliminaron registros incompletos, se validaron rangos y se detectaron valores atípicos. Después se hicieron histogramas, diagramas de caja y de dispersión, pruebas Z y t, el coeficiente de Pearson y el modelo de regresión." } },
    { type: "text", props: { title: "5. ¿Cuál fue el resultado?", text: "La muestra final fue de 352 estudiantes. El promedio general (82.84) resultó superior al estándar de 80 puntos (Z ≈ 6.56, no se rechaza H₀). Quienes dedican más de 6 horas diarias al ocio digital tienen promedios menores (≈80 frente a ≈85, t ≈ −5.00)." } },
    { type: "list", props: { title: "Hallazgos clave", items: ["Correlación negativa muy débil entre horas de ocio digital y promedio (r = −0.08).", "El ocio digital explica solo el 0.64% de la variación del promedio (R² = 0.0064).", "Modelo de regresión: ŷ = 84.45 − 0.28x (cada hora adicional de ocio se asocia con 0.28 puntos menos).", "El rendimiento académico es multifactorial; conviene un uso equilibrado de la tecnología."] } },
    { type: "text", props: { title: "Cartel científico", text: "Resumen visual de la investigación: método, hallazgos clave y conclusiones." } },
    { type: "document", props: { kind: "pdf", src: "docs/ocio-digital-cartel-cientifico.pdf", title: "Cartel científico", heightVh: 85 } },
    { type: "text", props: { title: "Resumen ejecutivo", text: "Versión corta del estudio: resumen, introducción, método, resultados y referencias." } },
    { type: "document", props: { kind: "pdf", src: "docs/ocio-digital-resumen-ejecutivo.pdf", title: "Resumen ejecutivo" } },
    { type: "text", props: { title: "Memoria técnica", text: "Documento completo (34 páginas): marco teórico, metodología paso a paso, análisis descriptivo, pruebas de hipótesis, regresión y conclusiones." } },
    { type: "document", props: { kind: "pdf", src: "docs/ocio-digital-memoria-tecnica.pdf", title: "Memoria técnica" } },
  ],
} as const satisfies ProjectContent;
