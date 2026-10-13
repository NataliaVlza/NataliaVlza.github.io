// Contenido de la sección "Perfil" (nombre, puesto, descripción, educación y habilidades)
export const profile = {
  banner: "Perfil",
  fullName: "Natalia Guadalupe Sánchez Valenzuela",
  role: "Aspirante a Analista de Datos",
  // texto corto que aparece sobre el avatar y en la etiqueta de la portada
  bannerRole: "Aspirante a Analista de Datos",
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
};
