interface CursoContract {
  nombre: string;
  categoria: string;
  imagenURL: string;
  descripcion: string;
}

export class CursoModel implements CursoContract{

  nombre: string;
  categoria: string;
  imagenURL: string;
  descripcion: string;


  constructor(nombre: string, categoria: string, imagenURL: string, descripcion: string)
  {
    this.nombre = nombre;
    this.categoria = categoria;
    this.imagenURL = imagenURL;
    this.descripcion = descripcion;
  }
}
