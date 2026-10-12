import generadorAlumnos0 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-0.webp";
import generadorAlumnos1 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-1.webp";
import generadorAlumnos2 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-2.webp";
import generadorAlumnos3 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-3.webp";
import generadorAlumnos4 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Generador de Alumnos",
  theme: "light",
  tags: ["javascript", "html", "css"],
  source: "https://github.com/NataliaVlza/generador-alumnos-bd",
  description:
    "Herramienta web interactiva que genera hasta 50,000 registros ficticios de alumnos para cargar bases de datos relacionales y no relacionales.<br/><br/>Los datos se previsualizan en pantalla y se exportan como sentencias INSERT en SQL (MySQL / MariaDB y PostgreSQL), JSON o CSV. Genera automáticamente matrículas, nombres en mayúsculas y correos institucionales.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos0,
        alt: "Pantalla de inicio",
        caption: "Pantalla de inicio",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos1,
        alt: "Exportación MySQL / MariaDB",
        caption: "Exportación MySQL / MariaDB",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos2,
        alt: "Exportación PostgreSQL",
        caption: "Exportación PostgreSQL",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos3,
        alt: "Exportación JSON",
        caption: "Exportación JSON",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos4,
        alt: "Exportación CSV",
        caption: "Exportación CSV",
      },
    },
  ],
} as const satisfies ProjectContent;
