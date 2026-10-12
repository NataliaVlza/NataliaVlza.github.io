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
    description: "Esports league management system",
  },
  {
    title: "Student Data Generator",
    slug: "generador-alumnos",
    thumbnail: thumb1,
    description: "Synthetic data generator for databases",
  },
  {
    title: "JDBC Kardex",
    slug: "practica-jdbc",
    thumbnail: thumb2,
    description: "Java + PostgreSQL via JDBC",
  },
  {
    title: "Barbershop Simulation",
    slug: "barberia-semaforos",
    thumbnail: thumb3,
    description: "Concurrency with threads and semaphores",
  },
  {
    title: "Academic Re-enrollment",
    slug: "reinscripcion-academica",
    thumbnail: thumb4,
    description: "C# Windows Forms CRUD app",
  },
] as const satisfies ProjectPreview[];
