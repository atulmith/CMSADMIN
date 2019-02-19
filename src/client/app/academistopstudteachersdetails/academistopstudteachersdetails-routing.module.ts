import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcademistopstudteachersdetailsComponent } from './academistopstudteachersdetails.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'academistopstudteachersdetails', component: AcademistopstudteachersdetailsComponent ,canActivate:[AuthGuard],data: { roles: ['academistopstudteachersdetails'] }}
      { path: 'academistopstudteachersdetails', component: AcademistopstudteachersdetailsComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AcademistopstudteachersdetailsRoutingModule { }
