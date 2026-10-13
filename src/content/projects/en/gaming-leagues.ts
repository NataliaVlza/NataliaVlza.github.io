import gamingLeagues0 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-0.webp";
import gamingLeagues1 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-1.webp";
import gamingLeagues2 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-2.webp";
import gamingLeagues3 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-3.webp";
import gamingLeagues4 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-4.webp";
import gamingLeagues5 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-5.webp";
import gamingLeagues6 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-6.webp";
import gamingLeagues7 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-7.webp";
import gamingLeagues8 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-8.webp";
import gamingLeagues9 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-9.webp";
import gamingLeagues10 from "../../../assets/images/projects/gaming-leagues/gaming-leagues-10.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Gaming Leagues",
  theme: "light",
  tags: ["java", "postgresql"],
  source: "https://github.com/NataliaVlza/gaming_leagues",
  description:
    "Aplicación de escritorio en Java para el control integral de torneística y ligas de esports. La plataforma centraliza la administración de videojuegos, ligas activas, equipos, jugadores inscritos, calendario de encuentros, tablas de clasificación y la generación de reportes e informes dinámicos en formato PDF.",
  components: [
    { type: "list", props: { title: "Creadores y modalidad", items: ["<strong>Integrantes:</strong> Natalia Valenzuela (<a href=\"https://github.com/NataliaVlza\" target=\"_blank\" rel=\"noopener\">@NataliaVlza</a>) y equipo de trabajo", "<strong>Institución:</strong> Universidad de Sonora (UNISON) - Facultad Interdisciplinaria de Ingenierías", "<strong>Modalidad:</strong> Proyecto guiado y desarrollado en sesiones prácticas de laboratorio.", "<strong>Contacto:</strong> <a href=\"mailto:natalia.sanchezvlza@gmail.com\">natalia.sanchezvlza@gmail.com</a>", "<strong>Ubicación:</strong> Hermosillo, Sonora, México"] } },
    { type: "list", props: { title: "Funcionalidades y requisitos implementados", items: ["<strong>Gestión de Ligas y Videojuegos:</strong> Registro, edición y consulta parametrizada de títulos y torneos organizados.", "<strong>Administración de Equipos y Roster:</strong> Alta de jugadores y asignación dinámica a sus respectivos equipos dentro de la liga.", "<strong>Encuentros y Clasificaciones:</strong> Registro de resultados de partidas con actualización en tiempo real de la tabla general de posiciones.", "<strong>Reportes e Informes (JasperReports):</strong> Módulo especializado para la exportación e impresión de reportes y estadísticas en PDF."] } },
    { type: "text", props: { title: "Imágenes del proyecto", text: "Capturas de la aplicación en funcionamiento." } },
    { type: "media", props: { type: "image", src: gamingLeagues0, alt: "Pantalla de inicio", caption: "1. Pantalla de inicio: Panel principal de navegación e interfaz general del sistema." } },
    { type: "media", props: { type: "image", src: gamingLeagues1, alt: "Pestaña de Videojuegos", caption: "2. Pestaña de Videojuegos: Catálogo y gestión de los títulos competitivos integrados en la plataforma." } },
    { type: "media", props: { type: "image", src: gamingLeagues2, alt: "Pestaña de Ligas", caption: "3. Pestaña de Ligas: Administración de las ligas y torneos activos registrados en la base de datos." } },
    { type: "media", props: { type: "image", src: gamingLeagues3, alt: "Pestaña de Equipos", caption: "4. Pestaña de Equipos: Módulo de control para el registro y consulta de equipos participantes." } },
    { type: "media", props: { type: "image", src: gamingLeagues4, alt: "Pestaña de Jugadores", caption: "5. Pestaña de Jugadores: Gestión de competidores, sus perfiles e integración en los distintos equipos." } },
    { type: "media", props: { type: "image", src: gamingLeagues5, alt: "Pestaña de Encuentros", caption: "6. Pestaña de Encuentros: Programación y captura de resultados de los partidos entre equipos." } },
    { type: "media", props: { type: "image", src: gamingLeagues6, alt: "Pestaña de Clasificaciones", caption: "7. Pestaña de Clasificaciones: Tabla de posiciones calculada automáticamente según los marcadores de los encuentros." } },
    { type: "media", props: { type: "image", src: gamingLeagues7, alt: "Pestaña de Informes", caption: "8. Pestaña de Informes: Sección dedicada a la selección y parametrización de reportes institucionales." } },
    { type: "media", props: { type: "image", src: gamingLeagues8, alt: "Reportes generados en PDF (ranking de jugadores)", caption: "9. Reportes generados en PDF (ranking de jugadores): Vista previa de los informes impresos exportados con plantillas personalizadas." } },
    { type: "media", props: { type: "image", src: gamingLeagues9, alt: "Reportes generados en PDF (resumen de ligas)", caption: "10. Reportes generados en PDF (resumen de ligas): Vista previa de los informes impresos exportados con plantillas personalizadas." } },
    { type: "media", props: { type: "image", src: gamingLeagues10, alt: "Reportes generados en PDF (estructura de equipos)", caption: "11. Reportes generados en PDF (estructura de equipos): Vista previa de los informes impresos exportados con plantillas personalizadas." } },
  ],
} as const satisfies ProjectContent;
