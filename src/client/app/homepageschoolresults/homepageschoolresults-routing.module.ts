import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageschoolresultsComponent } from './homepageschoolresults.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepageschoolresults', component: HomepageschoolresultsComponent ,canActivate:[AuthGuard],data: { roles: ['homepageschoolresults'] }}
      { path: 'homepageschoolresults', component: HomepageschoolresultsComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepageschoolresultsRoutingModule { }
