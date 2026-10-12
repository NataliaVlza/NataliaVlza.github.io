import reinscripcion0 from "../../../assets/images/projects/reinscripcion-academica/reinscripcion-academica-0.webp";
import reinscripcion1 from "../../../assets/images/projects/reinscripcion-academica/reinscripcion-academica-1.webp";
import reinscripcion2 from "../../../assets/images/projects/reinscripcion-academica/reinscripcion-academica-2.webp";
import reinscripcion3 from "../../../assets/images/projects/reinscripcion-academica/reinscripcion-academica-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Academic Re-enrollment",
  theme: "light",
  tags: ["csharp", "dotnet", "sqlserver"],
  source: "https://github.com/NataliaVlza/sistema-reinscripcion-academica",
  description:
    "Desktop-Anwendung in C# (Windows Forms) zur Verwaltung von Kursen bei der Rückmeldung. Sie folgt einem objektorientierten Entwurf und speichert die Daten über vollständige CRUD-Operationen in SQL Server.<br/><br/>Das Hauptfenster nutzt ein DataGridView und eine ToolStrip, ein dynamisches Formular übernimmt Anlegen und Bearbeiten mit Validierung zur Laufzeit. Die Geschäftslogik verhindert doppelte Einträge und überlappende Stundenpläne.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: reinscripcion0,
        alt: "Hauptfenster",
        caption: "Hauptfenster",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reinscripcion1,
        alt: "Kurs hinzufügen / bearbeiten",
        caption: "Kurs hinzufügen / bearbeiten",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reinscripcion2,
        alt: "Kurse abrufen",
        caption: "Kurse abrufen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reinscripcion3,
        alt: "Löschbestätigung",
        caption: "Löschbestätigung",
      },
    },
  ],
} as const satisfies ProjectContent;
