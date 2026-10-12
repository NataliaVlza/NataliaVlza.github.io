import barberiaSemaforos0 from "../../../assets/images/projects/barberia-semaforos/barberia-semaforos-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Barbershop Simulation",
  theme: "light",
  tags: ["csharp", "dotnet"],
  source: "https://github.com/NataliaVlza/simulacion-barberia-semaforos",
  description:
    "Projekt zur nebenläufigen Programmierung in C#, das das klassische Friseur-Problem mit begrenzten Ressourcen simuliert. Kunden kommen zufällig an und laufen jeweils in einem eigenen Thread, während ein Semaphore den Zugang zu 5 Kabinen begrenzt.<br/><br/>Ankünfte dauern 2 bis 8 Sekunden, jede Bedienung 2 bis 14 Sekunden. Die Konsole protokolliert Ankunft, Kabinenzuteilung und Freigabe und berechnet die Wartezeit jedes Kunden.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: barberiaSemaforos0,
        alt: "Simulationsprotokoll mit Wartezeiten",
        caption: "Simulationsprotokoll mit Wartezeiten",
      },
    },
  ],
} as const satisfies ProjectContent;
