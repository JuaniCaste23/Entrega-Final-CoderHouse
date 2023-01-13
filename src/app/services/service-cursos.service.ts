import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { CursoModel } from '../models/cursosmodel';
import { CursoModalComponent } from '../shared/components/curso-modal/curso-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

  public cursos$: Observable<CursoModel[]>;
  private cursos = new BehaviorSubject<CursoModel[]>([]);

  constructor(private readonly modalService: MatDialog) {
    this.cursos$ = this.cursos.asObservable();
    this.getCursos().subscribe(curso => {
      this.cursos.next(curso);
    });
  }

  eliminarCurso(curso: CursoModel) {
    const newLista = this.cursos.getValue().filter( c => c.nombre !== curso.nombre);
    this.cursos.next(newLista);
  }

  agregarCurso(curso: CursoModel) {
    const newLista = this.cursos.getValue();
    const dialog = this.modalService.open(CursoModalComponent)

    dialog.afterClosed().subscribe((value) => {
      if ( value ) {
        newLista.push(curso);
        this.cursos.next(newLista);
      }
    })
  }

  editarCurso(id:number, data: Partial<CursoModel>) {
    const dialog = this.modalService.open(CursoModalComponent)
    dialog.afterClosed().subscribe((value) => {
      if ( value ) {
        this.cursos.pipe(take(1)).subscribe((cursos) => {
        this.cursos.next(
          cursos.map(
            (curs) => curs.id === cursos.id
              ? new CursoModel(
                curs.id,
                data.nombre || curs.nombre,
                data.categoria || curs.categoria,
                data.imagenURL || curs.imagenURL,
                data.descripcion || curs.descripcion
              )
              : curs
          )
        )
      })
    }
  })
}

  getCursos(): Observable<CursoModel[]> {
    return of([
      {id: 1, nombre: 'Javascript', categoria: 'Programacion', imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', descripcion: 'El lenguaje mas famoso de programación WEB'},
      {id: 2,nombre: 'Diseño UX/UI', categoria: 'Diseño', imagenURL: 'https://www.datocms-assets.com/14946/1633281680-ux-vs-ui-cover-edited.png?auto=format&fit=max&w=1200', descripcion: 'El curso por excelencia para diseñadores.'},
      {id: 3,nombre: 'Python', categoria: 'Programacion', imagenURL: 'https://www.armadilloamarillo.com/wp-content/uploads/Python-Symbol-300x169.png', descripcion: 'El lenguaje mas famoso para DATA y BackEND'},
      {id: 4,nombre: 'Excel', categoria: 'Office', imagenURL: 'https://concepto.de/wp-content/uploads/2018/09/excel3-e1537469723415.jpg', descripcion: 'El curso más atractivo de Excel, columnas y filas WIN'},
    ]);
  }

}
