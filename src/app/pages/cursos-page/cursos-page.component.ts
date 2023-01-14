import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoModel } from 'src/app/models/cursosmodel';
import { CursosService } from 'src/app/services/service-cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { CursoModalComponent } from 'src/app/shared/components/curso-modal/curso-modal.component';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.scss']
})

export class CursosPageComponent implements OnInit {

  public cursos$!: Observable<CursoModel[]>;

  constructor(private CursosService: CursosService,private readonly dialogService: MatDialog) {
    this.cursos$ = this.CursosService.cursos$
   }

  ngOnInit(): void {
    this.cursos$ = this.CursosService.cursos$;
    console.log(this.cursos$)
  }

  eliminarCard(curso: CursoModel) {
    this.CursosService.eliminarCurso(curso);
  }

  editarCard(element: CursoModel) {
    const dialog = this.dialogService.open(CursoModalComponent, {
      data: element
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.CursosService.editarCurso(element.id, data);
      }
    })
  }

  agregarCurso() {
    const dialog = this.dialogService.open(CursoModalComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.CursosService.agregarCurso({ nombre: data.nombre, categoria: data.categoria, imagenURL: data.imagenURL, descripcion : data.descripcion });
      }
    })
  }
  }
