import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'students',
    component: StudentsPageComponent
  },
  {
    path:'cursos',
    component: CursosPageComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }

]

@NgModule({

  declarations:[],
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})

export class AppRoutingModule {}
