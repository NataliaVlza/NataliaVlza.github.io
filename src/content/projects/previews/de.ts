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
    description: "Verwaltungssystem für Esports-Ligen",
  },
  {
    title: "Student Data Generator",
    slug: "generador-alumnos",
    thumbnail: thumb1,
    description: "Generator für synthetische Datenbankdaten",
  },
  {
    title: "JDBC Kardex",
    slug: "practica-jdbc",
    thumbnail: thumb2,
    description: "Java + PostgreSQL über JDBC",
  },
  {
    title: "Barbershop Simulation",
    slug: "barberia-semaforos",
    thumbnail: thumb3,
    description: "Nebenläufigkeit mit Threads und Semaphoren",
  },
  {
    title: "Academic Re-enrollment",
    slug: "reinscripcion-academica",
    thumbnail: thumb4,
    description: "CRUD-Anwendung mit C# Windows Forms",
  },
] as const satisfies ProjectPreview[];
