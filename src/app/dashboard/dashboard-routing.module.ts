import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
              path: 'home',
              component:HomeSectionComponent,
            },
            {
              path: 'students',
              component:StudentsPageComponent,
            },
            {
              path: 'cursos',
              component:CursosPageComponent,
            },
        ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }

