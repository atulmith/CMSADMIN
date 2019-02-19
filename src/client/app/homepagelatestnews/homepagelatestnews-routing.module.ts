import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepagelatestnewsComponent } from './homepagelatestnews.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepagelatestnews', component: HomepagelatestnewsComponent ,canActivate:[AuthGuard],data: { roles: ['homepagelatestnews'] }}
      { path: 'homepagelatestnews', component: HomepagelatestnewsComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepagelatestnewsRoutingModule { }
