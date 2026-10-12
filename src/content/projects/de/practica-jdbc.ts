import practicaJdbc0 from "../../../assets/images/projects/practica-jdbc/practica-jdbc-0.webp";
import practicaJdbc1 from "../../../assets/images/projects/practica-jdbc/practica-jdbc-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "JDBC Kardex",
  theme: "light",
  tags: ["java", "postgresql"],
  source: "https://github.com/NataliaVlza/practica-jdbc-java",
  description:
    "Java-Konsolenanwendung, die sich über den JDBC-Treiber mit einer PostgreSQL-Datenbank verbindet. Nach Eingabe von Vor- oder Nachname zeigt sie den vollständigen Studienverlauf (Kardex) in Echtzeit an.<br/><br/>Dafür werden dynamische SELECT-Abfragen mit JOINs über Studierende, Fachbereiche, Kurse und Noten ausgeführt und tabellarisch ausgegeben.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: practicaJdbc0,
        alt: "Abfrage und Kardex-Ausgabe",
        caption: "Abfrage und Kardex-Ausgabe",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: practicaJdbc1,
        alt: "Datenbankschema (11 Tabellen)",
        caption: "Datenbankschema (11 Tabellen)",
      },
    },
  ],
} as const satisfies ProjectContent;
