export const social = [
  { url: "mailto:natalia.sanchezvlza@gmail.com", name: "mail" },
  { url: "https://github.com/NataliaVlza", name: "github" },
  { url: "https://www.linkedin.com/in/natalia-s%C3%A1nchez-5963b1332/", name: "linkedin" },
  { url: "https://candidato.mx.computrabajo.com/candidate/home", name: "computrabajo" },
  //{ url: "https://x.com/tu-usuario", name: "x" },
  //{ url: "https://www.instagram.com/tu-usuario/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" | "computrabajo" }[];
