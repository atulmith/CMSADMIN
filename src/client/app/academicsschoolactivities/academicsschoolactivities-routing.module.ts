import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcademicsschoolactivitiesComponent } from './academicsschoolactivities.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'academicsschoolactivities', component: AcademicsschoolactivitiesComponent ,canActivate:[AuthGuard],data: { roles: ['academicsschoolactivities'] }}
      { path: 'academicsschoolactivities', component: AcademicsschoolactivitiesComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AcademicsschoolactivitiesRoutingModule { }
