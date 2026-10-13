export interface Certification {
  name: string;
  issuer?: string;
  detail?: string;
  status: "Completado" | "En curso" | "Reconocimiento";
  // opcional: ruta de la constancia en /public (ej. "docs/certificados/mi-constancia.pdf")
  file?: string;
}

// Contenido de la sección "Perfil" (nombre, puesto, descripción, educación y habilidades)
export const profile = {
  banner: "Perfil",
  // ubicación que aparece bajo tu nombre en el avatar
  location: "Hermosillo, Son.",
  fullName: "Natalia Guadalupe Sánchez Valenzuela",
  role: "Aspirante a Ciencia de Datos",
  // texto corto que aparece sobre el avatar y en la etiqueta de la portada
  bannerRole: "Aspirante a Ciencia de Datos",
  tagline: "Analítica, curiosa y con gusto por el pensamiento lógico y la resolución de problemas.",
  who: {
    title: "¿Quién soy?",
    text: "Estudiante de Ing. en Sistemas de Información en la Universidad de Sonora, analítica, curiosa y con gusto por el pensamiento lógico y la resolución de problemas.",
  },
  can: {
    title: "¿Qué puedo hacer?",
    text: "Puedo diseñar, estructurar y consultar bases de datos relacionales, analizar procesos para modelar arquitecturas mediante diagramas UML, y modelar interfaces visuales e interactivas (UI/UX) utilizando Figma.",
  },
  education: {
    title: "Educación",
    items: [
      {
        name: "Universidad de Sonora",
        detail: "Ingeniería en Sistemas de Información",
        place: "Hermosillo, Sonora, México",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    technical: {
      title: "Técnicas",
      items: ["PostgreSQL", "MySQL", "SQLite", "Java", "C#", "Figma", "draw.io", "Git"],
    },
    social: {
      title: "Sociales",
      items: ["Pensamiento analítico", "Atención al detalle", "Autodidactismo", "Resolución de problemas"],
    },
  },
  certifications: {
    title: "Certificaciones y logros",
    items: [
      {
        name: "Introducción a la Ciencia de Datos",
        issuer: "Santander Open Academy · contenido de IE University",
        detail: "Curso de 6 horas y 2 módulos · septiembre de 2026",
        status: "Completado",
      },
      {
        name: "Introducción a la ciencia de datos en Microsoft Fabric",
        issuer: "Microsoft Learn",
        detail: "Logro obtenido · octubre de 2026",
        status: "Completado",
      },
      {
        name: "Exploración y análisis de datos con Python",
        issuer: "Microsoft Learn",
        detail: "Evaluación del módulo aprobada · octubre de 2026",
        status: "Completado",
      },
      {
        name: "Diplomado Técnico en Big Data",
        detail: "Identificación, procesamiento y análisis de grandes volúmenes de datos",
        status: "En curso",
      },
      {
        // Agrega aquí el evento y la fecha, y la constancia en "file" cuando la tengas
        name: "3.er lugar en presentación de cartel científico",
        status: "Reconocimiento",
      },
    ] as Certification[],
  },
};
