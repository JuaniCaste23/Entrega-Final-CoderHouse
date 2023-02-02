import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { NotFoundComponent } from 'src/app/dashboard/pages/not-found/not-found.component';
import { GuardsGuard } from './auth/guards/guards.guard';

const routes: Routes= [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/auth/login',
},
{
  path:'auth',
  loadChildren: ()=> import('./auth/auth.module').then( m=> m.AuthModule )
},
{
  path:'dashboard',
  loadChildren: ()=> import('./dashboard/dashboard.module').then( m=> m.DashboardModule ),
  canActivate: [GuardsGuard],
},
{
  path:'404',
  component:NotFoundComponent,
},
{
  path:'**',
  redirectTo:'404',
},



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
