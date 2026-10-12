import img_flujo_ejemplos from "../../../assets/images/projects/actividades/flujo-ejemplos.webp";
import img_uml_relaciones from "../../../assets/images/projects/actividades/uml-relaciones.webp";
import img_atm_diagramas from "../../../assets/images/projects/actividades/atm-diagramas.webp";
import img_atm_swimlane from "../../../assets/images/projects/actividades/atm-swimlane.webp";
import img_atm_interfaz from "../../../assets/images/projects/actividades/atm-interfaz.webp";
import img_farmacia_diagramas from "../../../assets/images/projects/actividades/farmacia-diagramas.webp";
import img_carrito_swimlane from "../../../assets/images/projects/actividades/carrito-swimlane.webp";
import img_restaurante_diagrama from "../../../assets/images/projects/actividades/restaurante-diagrama.webp";
import img_abarrotes_diagrama from "../../../assets/images/projects/actividades/abarrotes-diagrama.webp";
import img_ferreteria_diagrama from "../../../assets/images/projects/actividades/ferreteria-diagrama.webp";
import img_instagram_login from "../../../assets/images/projects/actividades/instagram-login.webp";
import img_astro_aventura from "../../../assets/images/projects/actividades/astro-aventura.webp";
import img_sonora_diagrama from "../../../assets/images/projects/actividades/sonora-diagrama.webp";
import vid_alquimia_intro from "../../../assets/videos/alquimia-intro.mp4";
import vid_astro_aventura from "../../../assets/videos/astro-aventura.mp4";

import type { ProjectContent } from "../../types";

export default {
  title: "Actividades de diagramas e interfaces",
  theme: "light",
  tags: [],
  description:
    "Colección de actividades de la materia de Ingeniería de Software: diagramas de flujo, UML y de carriles (swimlane), y diseño de interfaces para distintos sistemas, como un cajero automático, una farmacia, un restaurante, una tienda de abarrotes, una ferretería, una biblioteca y varios videojuegos.<br/><br/>Cada sección muestra los diagramas y abre los documentos de interfaces aquí mismo; los visores tienen su botón de descarga.",
  components: [
    { type: "text", props: { title: "Diagramas de flujo", text: "Ejemplos de diagramas de flujo y su documento." } },
    { type: "media", props: { type: "image", src: img_flujo_ejemplos, alt: "Ejemplos de diagramas de flujo", fit: "contain" } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/diagrama-flujo.pdf", title: "Diagrama de flujo", heightVh: 70 } },
    { type: "text", props: { title: "Relaciones UML", text: "Tarea de diagramas de relaciones UML." } },
    { type: "media", props: { type: "image", src: img_uml_relaciones, alt: "Diagramas de relaciones UML", fit: "contain" } },
    { type: "text", props: { title: "Cajero automático (ATM)", text: "Diagramas, diagrama de carriles (swimlane), interfaz y pantallas del cajero." } },
    { type: "media", props: { type: "image", src: img_atm_diagramas, alt: "Diagramas del cajero automático", fit: "contain" } },
    { type: "media", props: { type: "image", src: img_atm_swimlane, alt: "Diagrama de carriles del cajero", fit: "contain" } },
    { type: "media", props: { type: "image", src: img_atm_interfaz, alt: "Interfaz del cajero" } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/atm-pantallas.pdf", title: "Pantallas del cajero", heightVh: 70 } },
    { type: "text", props: { title: "Farmacia", text: "Diagramas del sistema de una farmacia." } },
    { type: "media", props: { type: "image", src: img_farmacia_diagramas, alt: "Diagramas de la farmacia", fit: "contain" } },
    { type: "text", props: { title: "Carrito de compras", text: "Diagrama de carriles (swimlane) del proceso de compra con carrito." } },
    { type: "media", props: { type: "image", src: img_carrito_swimlane, alt: "Diagrama de carriles del carrito de compras", fit: "contain" } },
    { type: "text", props: { title: "Restaurante y menú", text: "Diagrama y diseño de interfaces del sistema de un restaurante." } },
    { type: "media", props: { type: "image", src: img_restaurante_diagrama, alt: "Diagrama del restaurante", fit: "contain" } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/restaurante-interfaces.pdf", title: "Interfaces del restaurante", heightVh: 70 } },
    { type: "text", props: { title: "Abarrotes Buen Precio", text: "Diagrama y diseño de interfaces para una tienda de abarrotes." } },
    { type: "media", props: { type: "image", src: img_abarrotes_diagrama, alt: "Diagrama de abarrotes", fit: "contain" } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/abarrotes-interfaces.pdf", title: "Interfaces de abarrotes", heightVh: 70 } },
    { type: "text", props: { title: "Ferretería UNISON", text: "Requerimientos, diagrama y diseño de interfaces de una ferretería." } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/ferreteria-requerimientos.pdf", title: "Requerimientos de la ferretería" } },
    { type: "media", props: { type: "image", src: img_ferreteria_diagrama, alt: "Diagrama de la ferretería", fit: "contain" } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/ferreteria-interfaces.pdf", title: "Interfaces de la ferretería", heightVh: 70 } },
    { type: "text", props: { title: "Funeraria", text: "Diseño de interfaces de un sistema para una funeraria." } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/funeraria-interfaces.pdf", title: "Interfaces de la funeraria", heightVh: 70 } },
    { type: "text", props: { title: "Login de biblioteca", text: "Diseño de la pantalla de inicio de sesión de una biblioteca." } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/biblioteca-login.pdf", title: "Login de biblioteca", heightVh: 70 } },
    { type: "text", props: { title: "Login estilo Instagram", text: "Diseño de una pantalla de inicio de sesión para móvil." } },
    { type: "media", props: { type: "image", src: img_instagram_login, alt: "Login estilo Instagram", fit: "contain" } },
    { type: "text", props: { title: "Vocales", text: "Diseño de interfaces de una aplicación sobre las vocales." } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/vocales-interfaces.pdf", title: "Interfaces de la aplicación de vocales", heightVh: 70 } },
    { type: "text", props: { title: "Videojuego: Alquimia", text: "Diseño de interfaces y video de introducción del videojuego." } },
    { type: "media", props: { type: "video", src: vid_alquimia_intro, alt: "Introducción del videojuego Alquimia" } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/alquimia-interfaces.pdf", title: "Interfaces del videojuego Alquimia", heightVh: 70 } },
    { type: "text", props: { title: "Astro Aventura", text: "Diseño del videojuego: pantallas, documento y video de demostración." } },
    { type: "media", props: { type: "image", src: img_astro_aventura, alt: "Diseño de Astro Aventura", fit: "contain" } },
    { type: "media", props: { type: "video", src: vid_astro_aventura, alt: "Demostración de Astro Aventura" } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/astro-aventura.pdf", title: "Documento de Astro Aventura", heightVh: 70 } },
    { type: "text", props: { title: "Sonora Tours", text: "Diagrama y diseño de interfaces de un sistema de tours en Sonora." } },
    { type: "media", props: { type: "image", src: img_sonora_diagrama, alt: "Diagrama de Sonora Tours", fit: "contain" } },
    { type: "document", props: { kind: "pdf", src: "docs/actividades/sonora-tours.pdf", title: "Interfaces de Sonora Tours", heightVh: 70 } },
  ],
} as const satisfies ProjectContent;
