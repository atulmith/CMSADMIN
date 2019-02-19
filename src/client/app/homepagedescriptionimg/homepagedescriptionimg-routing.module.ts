import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepagedescriptionimgComponent } from './homepagedescriptionimg.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepagedescriptionimg', component: HomepagedescriptionimgComponent ,canActivate:[AuthGuard],data: { roles: ['homepagedescriptionimg'] }}
      { path: 'homepagedescriptionimg', component: HomepagedescriptionimgComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepagedescriptionimgRoutingModule { }
