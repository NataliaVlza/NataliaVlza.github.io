import generadorAlumnos0 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-0.webp";
import generadorAlumnos1 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-1.webp";
import generadorAlumnos2 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-2.webp";
import generadorAlumnos3 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-3.webp";
import generadorAlumnos4 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-4.webp";
import generadorAlumnos5 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Generador de Alumnos",
  theme: "light",
  tags: ["javascript", "html", "css"],
  source: "https://github.com/NataliaVlza/generador-alumnos-bd",
  description:
    "Aplicación web / herramienta interactiva diseñada para la generación masiva de registros sintéticos de alumnos para bases de datos relacionales y no relacionales. Permite parametrizar el número de datos a generar (desde 1 hasta 50,000 registros) y exportarlos en múltiples formatos para facilitar la carga inicial de datos (data seeding) en proyectos académicos o de desarrollo.",
  components: [
    { type: "list", props: { title: "Creadores y modalidad", items: ["<strong>Estudiante:</strong> Natalia Valenzuela (<a href=\"https://github.com/NataliaVlza\" target=\"_blank\" rel=\"noopener\">@NataliaVlza</a>)", "<strong>Institución:</strong> Universidad de Sonora (UNISON) - Facultad Interdisciplinaria de Ingenierías", "<strong>Modalidad:</strong> Proyecto guiado y desarrollado en sesiones prácticas de laboratorio.", "<strong>Contacto:</strong> <a href=\"mailto:natalia.sanchezvlza@gmail.com\">natalia.sanchezvlza@gmail.com</a>", "<strong>Ubicación:</strong> Hermosillo, Sonora, México"] } },
    { type: "list", props: { title: "Funcionalidades y requisitos implementados", items: ["<strong>Generación Parametrizada:</strong> Selector de cantidad de registros con botones de ajuste rápido (Mín: 1, Máx: 50k).", "<strong>Múltiples Formatos de Exportación:</strong> Soporte para sentencias INSERT en SQL (MySQL / MariaDB), PostgreSQL, así como estructuras en JSON y CSV (Excel).", "<strong>Formateo de Datos:</strong> Generación automática de matrículas, nombres, apellidos formateados en mayúsculas (UPPER) y direcciones de correo institucional (@unison.mx).", "<strong>Descarga Directa:</strong> Opción para previsualizar el código generado en pantalla y guardar directamente el archivo resultante en el equipo local."] } },
    { type: "text", props: { title: "Imágenes del proyecto", text: "Capturas de la aplicación en funcionamiento." } },
    { type: "media", props: { type: "image", src: generadorAlumnos0, alt: "Pantalla de inicio", caption: "1. Pantalla de inicio: Interfaz principal del sistema que permite configurar el volumen de datos a generar y seleccionar el motor o formato de exportación deseado." } },
    { type: "media", props: { type: "image", src: generadorAlumnos1, alt: "Generación en SQL (MySQL / MariaDB)", caption: "2. Generación en SQL (MySQL / MariaDB): Vista previa de la sintaxis de inserción generada en formato compatible con MySQL y MariaDB." } },
    { type: "media", props: { type: "image", src: generadorAlumnos2, alt: "Generación en PostgreSQL", caption: "3. Generación en PostgreSQL: Construcción de sentencias de inserción adaptadas para la sintaxis de PostgreSQL." } },
    { type: "media", props: { type: "image", src: generadorAlumnos3, alt: "Generación en formato JSON", caption: "4. Generación en formato JSON: Estructuración de los datos sintéticos de alumnos en formato de objetos JSON para aplicaciones no relacionales o consumo de APIs." } },
    { type: "media", props: { type: "image", src: generadorAlumnos4, alt: "Generación en formato CSV (Excel)", caption: "5. Generación en formato CSV (Excel): Formateo de la información delimitada por comas lista para su importación en hojas de cálculo como Excel." } },
    { type: "media", props: { type: "image", src: generadorAlumnos5, alt: "Archivos generados y descargados", caption: "6. Archivos generados y descargados: Muestra de los diferentes archivos descargados (.json, .csv, .sql) listos para ser utilizados en los gestores de bases de datos." } },
  ],
} as const satisfies ProjectContent;
