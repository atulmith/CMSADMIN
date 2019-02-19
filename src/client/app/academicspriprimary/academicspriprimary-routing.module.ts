import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcademicspriprimaryComponent } from './academicspriprimary.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'academicspriprimary', component: AcademicspriprimaryComponent ,canActivate:[AuthGuard],data: { roles: ['academicspriprimary'] }}
      { path: 'academicspriprimary', component: AcademicspriprimaryComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AcademicspriprimaryRoutingModule { }
