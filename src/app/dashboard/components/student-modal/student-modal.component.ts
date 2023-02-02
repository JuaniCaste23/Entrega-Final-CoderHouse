import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlumnoModel } from 'src/app/models/alumnomodel';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})


export class StudentModalComponent {
  nombreControl = new FormControl('', [Validators.required])
  apellidoControl = new FormControl('', [Validators.required])
  carreraControl = new FormControl('', [Validators.required])

  dataForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    carrera: this.carreraControl,
  })

  constructor(private readonly modalAnswer: DialogRef, @Inject(MAT_DIALOG_DATA) public data: AlumnoModel | null ) {

    if ( data ) {
      this.dataForm.patchValue(data)
    }
  }

  close(){
    this.modalAnswer.close()
  }
}

