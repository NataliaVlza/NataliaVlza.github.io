import gamingLeagues0 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-0.webp";
import gamingLeagues1 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-1.webp";
import gamingLeagues2 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-2.webp";
import gamingLeagues3 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-3.webp";
import gamingLeagues4 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-4.webp";
import gamingLeagues5 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-5.webp";
import gamingLeagues6 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-6.webp";
import gamingLeagues7 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-7.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Gaming Leagues",
  theme: "light",
  tags: ["java", "postgresql"],
  source: "https://github.com/NataliaVlza/gaming_leagues",
  description:
    "Aplicación de escritorio en Java para el control de torneos y ligas de esports. Centraliza videojuegos, ligas activas, equipos, jugadores inscritos, calendario de encuentros y tablas de clasificación, con los datos guardados en PostgreSQL.<br/><br/>Incluye operaciones CRUD completas para cada entidad y un módulo de reportes con JasperReports que exporta informes dinámicos en PDF.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues0,
        alt: "Pantalla de inicio",
        caption: "Pantalla de inicio",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues1,
        alt: "Pestaña de videojuegos",
        caption: "Pestaña de videojuegos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues2,
        alt: "Pestaña de ligas",
        caption: "Pestaña de ligas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues3,
        alt: "Pestaña de equipos",
        caption: "Pestaña de equipos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues4,
        alt: "Pestaña de jugadores",
        caption: "Pestaña de jugadores",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues5,
        alt: "Pestaña de encuentros",
        caption: "Pestaña de encuentros",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues6,
        alt: "Pestaña de clasificaciones",
        caption: "Pestaña de clasificaciones",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues7,
        alt: "Pestaña de informes",
        caption: "Pestaña de informes",
      },
    },
  ],
} as const satisfies ProjectContent;
