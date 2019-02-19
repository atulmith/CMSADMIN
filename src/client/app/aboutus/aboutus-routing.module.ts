import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'aboutus', component: AboutusComponent ,canActivate:[AuthGuard],data: { roles: ['aboutus'] }}
      { path: 'aboutus', component: AboutusComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
