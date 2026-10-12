import generadorAlumnos0 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-0.webp";
import generadorAlumnos1 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-1.webp";
import generadorAlumnos2 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-2.webp";
import generadorAlumnos3 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-3.webp";
import generadorAlumnos4 from "../../../assets/images/projects/generador-alumnos/generador-alumnos-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Student Data Generator",
  theme: "light",
  tags: ["javascript", "html", "css"],
  source: "https://github.com/NataliaVlza/generador-alumnos-bd",
  description:
    "Interaktives Web-Tool, das bis zu 50.000 fiktive Studierendendatensätze zum Befüllen relationaler und nicht-relationaler Datenbanken erzeugt.<br/><br/>Die Daten lassen sich am Bildschirm ansehen und als SQL-INSERT-Anweisungen (MySQL / MariaDB und PostgreSQL), JSON oder CSV exportieren. Matrikelnummern, Namen in Großbuchstaben und Hochschul-E-Mail-Adressen werden automatisch erzeugt.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos0,
        alt: "Startbildschirm",
        caption: "Startbildschirm",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos1,
        alt: "MySQL- / MariaDB-Export",
        caption: "MySQL- / MariaDB-Export",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos2,
        alt: "PostgreSQL-Export",
        caption: "PostgreSQL-Export",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos3,
        alt: "JSON-Export",
        caption: "JSON-Export",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generadorAlumnos4,
        alt: "CSV-Export",
        caption: "CSV-Export",
      },
    },
  ],
} as const satisfies ProjectContent;
