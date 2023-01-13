import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoModel } from 'src/app/models/cursosmodel';
import { CursosService } from 'src/app/services/service-cursos.service';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.scss']
})

export class CursosPageComponent implements OnInit {

  public cursos$!: Observable<CursoModel[]>;

  constructor(private CursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos$ = this.CursosService.cursos$;
    console.log(this.cursos$)
  }

  eliminarCard(curso: CursoModel) {
    this.CursosService.eliminarCurso(curso);
  }

  editarCard(curso: CursoModel) {
    this.CursosService.editarCurso(curso);
  }

  agregarCurso() {
    this.CursosService.agregarCurso(
      {id:1,nombre: 'Javascript', categoria: 'Programacion', imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', descripcion: 'El lenguaje mas famoso de programación WEB'},
    );
  }



}
