import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CursoCardComponent } from './components/curso-card/curso-card.component';
import { CursoModalComponent } from './components/curso-modal/curso-modal.component';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { HomeSectionComponent } from './components/home-section/home-section.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CursoCardComponent,
    CursoModalComponent,
    StudentModalComponent,
    StudentsPageComponent,
    CursosPageComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    SidenavComponent,
    HomeSectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})

export class DashboardModule { }
