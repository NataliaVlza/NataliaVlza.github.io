import reinscripcion0 from "../../../assets/images/projects/reinscripcion-academica/reinscripcion-academica-0.webp";
import reinscripcion1 from "../../../assets/images/projects/reinscripcion-academica/reinscripcion-academica-1.webp";
import reinscripcion2 from "../../../assets/images/projects/reinscripcion-academica/reinscripcion-academica-2.webp";
import reinscripcion3 from "../../../assets/images/projects/reinscripcion-academica/reinscripcion-academica-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Reinscripción Académica",
  theme: "light",
  tags: ["csharp", "dotnet", "sqlserver"],
  source: "https://github.com/NataliaVlza/sistema-reinscripcion-academica",
  description:
    "Aplicación de escritorio en C# (Windows Forms) para gestionar materias durante la reinscripción académica. Usa un diseño orientado a objetos y guarda los datos en SQL Server mediante operaciones CRUD completas.<br/><br/>La ventana principal usa un DataGridView y un ToolStrip, y un formulario dinámico se encarga de agregar y editar con validación en tiempo de ejecución. La lógica evita registros duplicados y empalme de horarios.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: reinscripcion0,
        alt: "Ventana principal",
        caption: "Ventana principal",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reinscripcion1,
        alt: "Agregar / editar materia",
        caption: "Agregar / editar materia",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reinscripcion2,
        alt: "Obtener materias",
        caption: "Obtener materias",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reinscripcion3,
        alt: "Confirmación de eliminación",
        caption: "Confirmación de eliminación",
      },
    },
  ],
} as const satisfies ProjectContent;
