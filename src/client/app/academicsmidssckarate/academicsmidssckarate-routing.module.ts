import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcademicsmidssckarateComponent } from './academicsmidssckarate.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'academicsmidssckarate', component: AcademicsmidssckarateComponent ,canActivate:[AuthGuard],data: { roles: ['academicsmidssckarate'] }}
      { path: 'academicsmidssckarate', component: AcademicsmidssckarateComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AcademicsmidssckarateRoutingModule { }
