import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcademistopstudteachersComponent } from './academistopstudteachers.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'academistopstudteachers', component: AcademistopstudteachersComponent ,canActivate:[AuthGuard],data: { roles: ['academistopstudteachers'] }}
      { path: 'academistopstudteachers', component: AcademistopstudteachersComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AcademistopstudteachersRoutingModule { }
