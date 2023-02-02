import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumnomodel';
import { MatDialog } from '@angular/material/dialog';
import { StudentModalComponent } from 'src/app/dashboard/components/student-modal/student-modal.component';


@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})

export class StudentsPageComponent {
  displayedColumns = ['id','nombre','apellido','carrera','detalle','modificar','baja']
  alumnos: AlumnoModel[] = [

    new AlumnoModel(1,'Juan','Castelli','Matematica'),
    new AlumnoModel(2,'Seba','Holowaty','Literatura'),
    new AlumnoModel(3,'Ignacio','Gomez','Sistemas'),
    new AlumnoModel(4,'Leonel','Castro','Matematica'),
    new AlumnoModel(5,'Goku','Son','Sistemas'),
    new AlumnoModel(6,'Leonel','Messi','Futbol')

  ];

  constructor(private readonly modalService: MatDialog) {}

  addAlumno() {
   const dialog = this.modalService.open(StudentModalComponent)

   dialog.afterClosed().subscribe((value) => {
      const lastId = this.alumnos[this.alumnos.length -1]?.id
      if ( value && this.alumnos.length >= 1) {
        this.alumnos = [...this.alumnos, new AlumnoModel(lastId + 1,value.nombre,value.apellido,value.carrera)]
      }
      else {
        this.alumnos = [new AlumnoModel(1,value.nombre,value.apellido,value.carrera)]
      }
   })
  }

  editAlumno(alumnoModel: AlumnoModel) {
    const dialog = this.modalService.open(StudentModalComponent, {
      data: alumnoModel
    })

    dialog.afterClosed().subscribe((data) => {
      if ( data ) {
        this.alumnos = this.alumnos.map((alum) => alum.id === alumnoModel.id ? { ...alum, ...data} : alum);
      }

    }) //TODO practicar TERNARIOS!!
  }

  removeAlumno(alumnoModel: AlumnoModel) {
    this.alumnos = this.alumnos.filter((alum) => alum.id !== alumnoModel.id);
  }

}
