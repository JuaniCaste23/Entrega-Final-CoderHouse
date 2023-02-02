import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoModel } from 'src/app/models/cursosmodel';

@Component({
  selector: 'app-curso-modal',
  templateUrl: './curso-modal.component.html',
  styleUrls: ['./curso-modal.component.scss']
})
export class CursoModalComponent {
  nombreControl = new FormControl('', [Validators.required])
  categoriaControl = new FormControl('', [Validators.required])
  imagenURLControl = new FormControl('', [Validators.required])
  descripcionControl = new FormControl('', [Validators.required])

  dataForm = new FormGroup({
    nombre: this.nombreControl,
    categoria: this.categoriaControl,
    imagenURL: this.imagenURLControl,
    descripcion: this.descripcionControl
  })

  constructor(private readonly modalAnswer: DialogRef, @Inject(MAT_DIALOG_DATA) public data: CursoModel | null ) {

    if ( data ) {
      this.dataForm.patchValue(data)
    }
  }

  close(){
    this.modalAnswer.close()
  }
}
