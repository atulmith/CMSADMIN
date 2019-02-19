import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcademicsprimarysecondarySchoolComponent } from './academicsprimarysecondarySchool.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'academicsprimarysecondarySchool', component: AcademicsprimarysecondarySchoolComponent ,canActivate:[AuthGuard],data: { roles: ['academicsprimarysecondarySchool'] }}
      { path: 'academicsprimarysecondarySchool', component: AcademicsprimarysecondarySchoolComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AcademicsprimarysecondarySchoolRoutingModule { }
