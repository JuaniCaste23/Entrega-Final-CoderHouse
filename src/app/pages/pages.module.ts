import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { StudentsPageComponent } from './students-page/students-page.component';
import { CursosPageComponent } from './cursos-page/cursos-page.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    CursosPageComponent,
    StudentsPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    NotFoundComponent,
    HomeComponent,
    CursosPageComponent,
    StudentsPageComponent
  ]
})
export class PagesModule { }
