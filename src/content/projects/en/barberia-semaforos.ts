import barberiaSemaforos0 from "../../../assets/images/projects/barberia-semaforos/barberia-semaforos-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Simulación de Barbería",
  theme: "light",
  tags: ["csharp", "dotnet"],
  source: "https://github.com/NataliaVlza/simulacion-barberia-semaforos",
  description:
    "Proyecto de programación concurrente en C# que simula el problema clásico de la barbería con recursos limitados. Los clientes llegan de forma aleatoria y cada uno se ejecuta en su propio hilo, mientras un Semaphore limita el acceso a 5 cabinas de atención.<br/><br/>Las llegadas tardan de 2 a 8 segundos y cada servicio dura de 2 a 14 segundos. La consola registra cada llegada, asignación y liberación de cabina, y calcula el tiempo de espera de cada cliente.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: barberiaSemaforos0,
        alt: "Registro de la simulación con tiempos de espera",
        caption: "Registro de la simulación con tiempos de espera",
      },
    },
  ],
} as const satisfies ProjectContent;
