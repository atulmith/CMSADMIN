import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageschoolresultsdetailsComponent } from './homepageschoolresultsdetails.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepageschoolresultsdetails', component: HomepageschoolresultsdetailsComponent ,canActivate:[AuthGuard],data: { roles: ['homepageschoolresultsdetails'] }}
      { path: 'homepageschoolresultsdetails', component: HomepageschoolresultsdetailsComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepageschoolresultsdetailsRoutingModule { }
