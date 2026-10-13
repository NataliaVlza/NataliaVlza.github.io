import type { ProjectContent } from "../../types";

export default {
  title: "Metodología en Cascada",
  theme: "light",
  tags: [],
  description:
    "Investigación, presentación y reporte técnico sobre el origen, las fases y la duración de la metodología en cascada, para la materia Ingeniería de Software I.",
  components: [
    { type: "text", props: { title: "1. Descripción", text: "Trabajo de la materia Ingeniería de Software I (Ingeniería en Sistemas de Información, Universidad de Sonora) sobre la metodología en cascada, uno de los enfoques más conocidos de la ingeniería de software: el desarrollo se organiza en fases secuenciales y cada etapa produce entregables que sirven de base para la siguiente.<br/><br/>Elaborado con Denise Abigail Rodríguez Andrade." } },
    { type: "text", props: { title: "2. Requerimientos del cliente", text: "El trabajo debía explicar la metodología y comparar cuándo conviene usarla. Los temas que se cubrieron fueron:" } },
    { type: "list", props: { title: "Contenido solicitado", items: ["Introducción, definición y origen histórico.", "Principios fundamentales y características clave.", "Fases del ciclo de vida y sus entregables.", "Roles, equipos, duración y costos.", "Ventajas y desventajas, e impacto financiero del cambio.", "Cuándo usarla y cuándo evitarla.", "Conclusión."] } },
    { type: "text", props: { title: "3. ¿Cómo se diseñó la solución?", text: "La información se organizó en dos entregables: una presentación de 12 temas y un reporte técnico escrito con su comparación frente a los enfoques adaptativos (ASD). Para la presentación se incluyó una dinámica grupal, «Diseñando bajo el modelo en cascada», donde un cliente describe una pantalla, un analista escribe los requisitos sin dibujar y los desarrolladores la construyen sin poder preguntar, para vivir el costo de los cambios tardíos." } },
    { type: "text", props: { title: "4. ¿Cómo se implementó la solución?", text: "Se investigó el origen del modelo (Benington en 1956 y Royce en 1970), las seis fases del ciclo de vida, la curva del costo del cambio de Barry Boehm y un ejemplo práctico: una app móvil a la que, en las pruebas finales, se le pidió agregar rastreo GPS. Con eso se elaboró la presentación y se redactó el reporte técnico con sus referencias." } },
    { type: "text", props: { title: "5. ¿Cuál fue el resultado?", text: "La metodología en cascada ofrece orden, control y documentación completa, y es adecuada cuando los requisitos son claros y estables. Su principal limitación son los cambios tardíos, que elevan el costo. No es obsoleta, sino contextual, y entenderla ayuda a comparar enfoques ágiles como Scrum o Kanban." } },
    { type: "text", props: { title: "Presentación", text: "Diapositivas del tema, con la actividad grupal incluida." } },
    { type: "document", props: { kind: "pdf", src: "docs/cascada-presentacion.pdf", title: "Presentación: Metodología en Cascada", heightVh: 68 } },
    { type: "text", props: { title: "Reporte técnico", text: "Documento escrito con el desarrollo del tema, el ejemplo práctico y las referencias." } },
    { type: "document", props: { kind: "pdf", src: "docs/cascada-reporte-tecnico.pdf", title: "Reporte técnico: Metodología en Cascada" } },
  ],
} as const satisfies ProjectContent;
