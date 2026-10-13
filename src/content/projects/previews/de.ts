import thumb0 from "../../../assets/thumbnails/gaming-leagues.webp";
import thumb1 from "../../../assets/thumbnails/generador-alumnos.webp";
import thumb2 from "../../../assets/thumbnails/practica-jdbc.webp";
import thumb3 from "../../../assets/thumbnails/barberia-semaforos.webp";
import thumb4 from "../../../assets/thumbnails/reinscripcion-academica.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Gaming Leagues",
    slug: "gaming-leagues",
    thumbnail: thumb0,
    description: "Plataforma de gestión de esports e informes en Java",
  },
  {
    title: "Generador de Alumnos",
    slug: "generador-alumnos",
    thumbnail: thumb1,
    description: "Herramienta de data seeding y generación sintética",
  },
  {
    title: "Kardex JDBC",
    slug: "practica-jdbc",
    thumbnail: thumb2,
    description: "Conectividad Java y PostgreSQL para UniversidadDB",
  },
  {
    title: "Simulación de Barbería",
    slug: "barberia-semaforos",
    thumbnail: thumb3,
    description: "Simulación de procesos multihilo",
  },
  {
    title: "Reinscripción Académica",
    slug: "reinscripcion-academica",
    thumbnail: thumb4,
    description: "Gestión de materias y CRUD en C# Windows Forms",
  },
] as const satisfies ProjectPreview[];
