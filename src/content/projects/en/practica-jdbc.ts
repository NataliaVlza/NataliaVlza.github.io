import practicaJdbc0 from "../../../assets/images/projects/practica-jdbc/practica-jdbc-0.webp";
import practicaJdbc1 from "../../../assets/images/projects/practica-jdbc/practica-jdbc-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Kardex JDBC",
  theme: "light",
  tags: ["java", "postgresql"],
  source: "https://github.com/NataliaVlza/practica-jdbc-java",
  description:
    "Aplicación de consola en Java que se conecta a una base de datos PostgreSQL mediante el controlador JDBC. Al escribir el nombre o apellido de un alumno, muestra su historial académico (kardex) en tiempo real.<br/><br/>Ejecuta consultas SELECT dinámicas con JOIN entre estudiantes, departamentos, asignaturas y calificaciones, y las muestra en una tabla formateada.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: practicaJdbc0,
        alt: "Consulta y salida del kardex",
        caption: "Consulta y salida del kardex",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: practicaJdbc1,
        alt: "Esquema de la base de datos (11 tablas)",
        caption: "Esquema de la base de datos (11 tablas)",
      },
    },
  ],
} as const satisfies ProjectContent;
