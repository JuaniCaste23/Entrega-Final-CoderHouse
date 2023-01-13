import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CursoModel } from '../models/cursosmodel';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

  public cursos$: Observable<CursoModel[]>;
  private cursos = new BehaviorSubject<CursoModel[]>([]);

  constructor() {
    this.cursos$ = this.cursos.asObservable();
    this.getCursos().subscribe(curso => {
      this.cursos.next(curso);
    });
  }

  eliminarCurso(curso: CursoModel) {
    let newLista = this.cursos.getValue().filter( c => c.nombre !== curso.nombre);
    this.cursos.next(newLista);
  }

  agregarCurso(curso: CursoModel) {
    let newLista = this.cursos.getValue();
    newLista.push(curso);
    this.cursos.next(newLista);
  }

  getCursos(): Observable<CursoModel[]> {
    return of([
      {nombre: 'Javascript', categoria: 'Programacion', imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', descripcion: 'El lenguaje mas famoso de programación WEB'},
      {nombre: 'Javascri22pt', categoria: 'Programacion', imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', descripcion: 'El lenguaje mas famoso de programación WEB'},
      {nombre: 'Javascrip22t', categoria: 'Programacion', imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', descripcion: 'El lenguaje mas famoso de programación WEB'},
      {nombre: 'Javascript', categoria: 'Programacion', imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', descripcion: 'El lenguaje mas famoso de programación WEB'},
    ]);
  }

}
