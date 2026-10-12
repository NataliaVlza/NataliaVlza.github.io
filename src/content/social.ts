export const social = [
  { url: "mailto:natalia.sanchezvlza@gmail.com", name: "mail" },
  { url: "https://github.com/NataliaVlza", name: "github" },
  //{ url: "https://www.linkedin.com/in/tu-usuario/", name: "linkedin" },
  //{ url: "https://x.com/tu-usuario", name: "x" },
  //{ url: "https://www.instagram.com/tu-usuario/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];