// Tu CV. Para cambiarlo: reemplaza el archivo public/docs/cv-natalia-sanchez.pdf por tu CV
// (con el mismo nombre) y listo. Los textos de los botones se cambian aquí.
export const cv = {
  file: "docs/cv-natalia-sanchez.pdf",
  downloadName: "CV-Natalia-Sanchez.pdf",
  view: "Ver CV",
  download: "Descargar CV",
};

export const cvUrl = import.meta.env.BASE_URL + cv.file;
