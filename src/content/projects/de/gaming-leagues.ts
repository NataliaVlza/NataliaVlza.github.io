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
    "Desktop-Anwendung in Java zur Verwaltung von Esports-Turnieren und -Ligen. Sie bündelt Videospiele, aktive Ligen, Teams, registrierte Spieler, Spielpläne und Ranglisten, die Daten liegen in PostgreSQL.<br/><br/>Für jede Entität gibt es vollständige CRUD-Operationen sowie ein Berichtsmodul mit JasperReports, das dynamische Berichte als PDF exportiert.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues0,
        alt: "Startbildschirm",
        caption: "Startbildschirm",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues1,
        alt: "Reiter Videospiele",
        caption: "Reiter Videospiele",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues2,
        alt: "Reiter Ligen",
        caption: "Reiter Ligen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues3,
        alt: "Reiter Teams",
        caption: "Reiter Teams",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues4,
        alt: "Reiter Spieler",
        caption: "Reiter Spieler",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues5,
        alt: "Reiter Begegnungen",
        caption: "Reiter Begegnungen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues6,
        alt: "Reiter Ranglisten",
        caption: "Reiter Ranglisten",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gamingLeagues7,
        alt: "Reiter Berichte",
        caption: "Reiter Berichte",
      },
    },
  ],
} as const satisfies ProjectContent;
