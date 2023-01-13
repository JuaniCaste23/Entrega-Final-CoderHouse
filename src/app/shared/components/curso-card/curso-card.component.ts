import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CursoModel } from 'src/app/models/cursosmodel';

@Component({
  selector: 'app-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent{
  @Input() cursos!: CursoModel;
  @Output() eliminar = new EventEmitter<CursoModel>();

  constructor() { }

  eliminarCard() {
    this.eliminar.emit(this.cursos);
  }

}
