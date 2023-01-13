import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { Titulosx20Directive } from './directive/titulosx20.directive';
import { upperCase } from './pipe/uppercase';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CursoModalComponent } from './components/curso-modal/curso-modal.component';
import { CursoCardComponent } from './components/curso-card/curso-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    StudentModalComponent,
    FooterComponent,
    Titulosx20Directive,
    upperCase,
    SidenavComponent,
    CursoModalComponent,
    CursoCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    StudentModalComponent,
    FooterComponent,
    Titulosx20Directive,
    upperCase,
    SidenavComponent,
    CursoCardComponent,
    CursoModalComponent
  ]
})
export class SharedModule { }
