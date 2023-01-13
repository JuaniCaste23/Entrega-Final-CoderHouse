interface AlumnoContract {
  id: number;
  nombre: string;
  apellido: string;
  carrera: string;
}

export class AlumnoModel implements AlumnoContract{

  id: number;
  nombre: string;
  apellido: string;
  carrera: string;


  constructor(id: number, nombre: string, apellido: string, carrera: string)
  {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.carrera = carrera;
  }

}
