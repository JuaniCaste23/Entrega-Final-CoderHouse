interface CursoContract {
  id: number;
  nombre: string;
  categoria: string;
  imagenURL: string;
  descripcion: string;
}

export class CursoModel implements CursoContract{

  id: number;
  nombre: string;
  categoria: string;
  imagenURL: string;
  descripcion: string;


  constructor(id: number, nombre: string, categoria: string, imagenURL: string, descripcion: string)
  {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.imagenURL = imagenURL;
    this.descripcion = descripcion;
  }
}
