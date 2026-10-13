import barberiaSemaforos0 from "../../../assets/images/projects/barberia-semaforos/barberia-semaforos-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Simulación de Barbería",
  theme: "light",
  tags: ["csharp", "dotnet"],
  source: "https://github.com/NataliaVlza/simulacion-barberia-semaforos",
  description:
    "Proyecto de programación concurrente que simula el problema clásico de la Peluquería / Barbería de Recursos Limitados. La aplicación gestiona la llegada aleatoria de clientes utilizando hilos (Threads) y controla el acceso simultáneo a 5 cabinas de atención mediante un Semáforo (Semaphore).",
  components: [
    { type: "list", props: { title: "Creadores y modalidad", items: ["<strong>Estudiante:</strong> Natalia Valenzuela (<a href=\"https://github.com/NataliaVlza\" target=\"_blank\" rel=\"noopener\">@NataliaVlza</a>)", "<strong>Institución:</strong> Universidad de Sonora (UNISON) - Facultad Interdisciplinaria de Ingenierías", "<strong>Modalidad:</strong> Proyecto guiado y desarrollado en sesiones prácticas de laboratorio.", "<strong>Contacto:</strong> <a href=\"mailto:natalia.sanchezvlza@gmail.com\">natalia.sanchezvlza@gmail.com</a>", "<strong>Ubicación:</strong> Hermosillo, Sonora, México"] } },
    { type: "list", props: { title: "Funcionalidades y requisitos implementados", items: ["<strong>Control de Concurrencia:</strong> Uso de Semaphore para limitar el acceso simultáneo a un máximo de 5 cabinas.", "<strong>Simulación de Clientes:</strong> Cada cliente se ejecuta en un hilo independiente con tiempos de llegada de 2 a 8 segundos.", "<strong>Tiempos de Atención:</strong> Simulación del servicio (corte o barba) con una duración variable de 2 a 14 segundos.", "<strong>Métricas e Historial:</strong> Rastreo en consola de llegada, ingreso a cabina, liberación de espacio y cálculo individual del tiempo de espera."] } },
    { type: "text", props: { title: "Imágenes del proyecto", text: "Capturas de la aplicación en funcionamiento." } },
    { type: "media", props: { type: "image", src: barberiaSemaforos0, alt: "Ejecución de la simulación y registro de tiempos", caption: "1. Ejecución de la simulación y registro de tiempos: Muestra la consola de salida rastreando el flujo en tiempo real: llegada de los clientes, asignación de cabina controlada por el semáforo, tiempo de espera transcurrido y liberación del recurso tras finalizar la atención." } },
  ],
} as const satisfies ProjectContent;
