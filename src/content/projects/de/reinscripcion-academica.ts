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
    "Aplicación de escritorio desarrollada en C# (Windows Forms) enfocada en la gestión interactiva de asignaturas y procesos de reinscripción académica. El proyecto implementa arquitectura orientada a objetos, manejo de controles visuales avanzados y persistencia de datos mediante operaciones CRUD conectadas a una base de datos relacional.",
  components: [
    { type: "list", props: { title: "Creadores y modalidad", items: ["<strong>Estudiante:</strong> Natalia Valenzuela (<a href=\"https://github.com/NataliaVlza\" target=\"_blank\" rel=\"noopener\">@NataliaVlza</a>)", "<strong>Institución:</strong> Universidad de Sonora (UNISON) - Facultad Interdisciplinaria de Ingenierías", "<strong>Modalidad:</strong> Proyecto guiado y desarrollado en sesiones prácticas de laboratorio.", "<strong>Contacto:</strong> <a href=\"mailto:natalia.sanchezvlza@gmail.com\">natalia.sanchezvlza@gmail.com</a>", "<strong>Ubicación:</strong> Hermosillo, Sonora, México"] } },
    { type: "list", props: { title: "Funcionalidades y requisitos implementados", items: ["<strong>Ventana Principal:</strong> Consulta interactiva con DataGridView y barra de herramientas (ToolStrip) para las acciones principales (Obtener, Agregar, Editar, Eliminar, Salir).", "<strong>Control de Modales:</strong> Formulario dinámico AgregarEditar para el alta y modificación con validación de campos en tiempo de ejecución.", "<strong>Modelo Materia:</strong> Clase con propiedades de ID, NombreMateria, Tipo (Obligatoria, Optativa, Eje Formación Común), Horario y Calificacion.", "<strong>Validación de Horarios:</strong> Lógica de negocio que impide la duplicidad de registros y el empalme de horarios en materias registradas.", "<strong>Persistencia Directa:</strong> Conexión y ejecución de consultas SQL para el almacenamiento e integridad de la información."] } },
    { type: "text", props: { title: "Imágenes del proyecto", text: "Capturas de la aplicación en funcionamiento." } },
    { type: "media", props: { type: "image", src: reinscripcion0, alt: "Ventana principal", caption: "1. Ventana principal: Interfaz inicial del sistema integrada con un DataGridView y una barra de herramientas (ToolStrip) con accesos rápidos a las operaciones principales." } },
    { type: "media", props: { type: "image", src: reinscripcion1, alt: "Formulario Agregar / Editar materia", caption: "2. Formulario Agregar / Editar materia: Ventana modal encargada de capturar y validar los datos de la materia (ID, Nombre, Tipo, Horario y Calificación). Incluye lógica para evitar duplicidad o empalme de horarios." } },
    { type: "media", props: { type: "image", src: reinscripcion2, alt: "Carga de datos y consulta", caption: "3. Carga de datos y consulta: Representación del flujo al ejecutar el método Obtener, realizando una petición a la base de datos para recuperar e imprimir la lista actualizada de asignaturas." } },
    { type: "media", props: { type: "image", src: reinscripcion3, alt: "Confirmación de eliminación", caption: "4. Confirmación de eliminación: Cuadro de diálogo de confirmación previa a eliminar un registro seleccionado de la base de datos, garantizando integridad y prevención de borrados accidentales." } },
  ],
} as const satisfies ProjectContent;
