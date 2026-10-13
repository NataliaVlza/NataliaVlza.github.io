import practicaJdbc0 from "../../../assets/images/projects/practica-jdbc/practica-jdbc-0.webp";
import practicaJdbc1 from "../../../assets/images/projects/practica-jdbc/practica-jdbc-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Kardex JDBC",
  theme: "light",
  tags: ["java", "postgresql"],
  source: "https://github.com/NataliaVlza/practica-jdbc-java",
  description:
    "Aplicación de consola en Java que se conecta a una base de datos relacional PostgreSQL (universitydb) a través del controlador JDBC. El programa permite consultar en tiempo real el historial académico (kardex) de cualquier estudiante ingresando su apellido o nombre desde la terminal.",
  components: [
    { type: "list", props: { title: "Creadores y modalidad", items: ["<strong>Estudiante:</strong> Natalia Valenzuela (<a href=\"https://github.com/NataliaVlza\" target=\"_blank\" rel=\"noopener\">@NataliaVlza</a>)", "<strong>Institución:</strong> Universidad de Sonora (UNISON) - Facultad Interdisciplinaria de Ingenierías", "<strong>Modalidad:</strong> Proyecto guiado y desarrollado en sesiones prácticas de laboratorio.", "<strong>Contacto:</strong> <a href=\"mailto:natalia.sanchezvlza@gmail.com\">natalia.sanchezvlza@gmail.com</a>", "<strong>Ubicación:</strong> Hermosillo, Sonora, México"] } },
    { type: "list", props: { title: "Funcionalidades y requisitos implementados", items: ["<strong>Conexión JDBC:</strong> Establecimiento y gestión segura de conexiones cliente-servidor con PostgreSQL.", "<strong>Consultas SQL Dinámicas:</strong> Recuperación de datos cruzados entre tablas de estudiantes, departamentos, asignaturas y calificaciones mediante sentencias SELECT e JOIN.", "<strong>Formato de Salida en Consola:</strong> Despliegue estructurado y tabulado del historial académico, mostrando ID de estudiante, departamento, asignaturas cursadas, período lectivo y calificación final."] } },
    { type: "text", props: { title: "Imágenes del proyecto", text: "Capturas de la aplicación en funcionamiento." } },
    { type: "media", props: { type: "image", src: practicaJdbc0, alt: "Ejecución de la consulta e historial académico", caption: "1. Ejecución de la consulta e historial académico: Muestra la interacción en consola solicitando el nombre del alumno, la confirmación de la conexión exitosa con PostgreSQL y el kardex formateado en pantalla." } },
    { type: "media", props: { type: "image", src: practicaJdbc1, alt: "Esquema de la base de datos en PostgreSQL", caption: "2. Esquema de la base de datos en PostgreSQL: Estructura de las 11 tablas relacionales de la base de datos universitydb (incluyendo student, course y takes) consultadas mediante JDBC." } },
  ],
} as const satisfies ProjectContent;
