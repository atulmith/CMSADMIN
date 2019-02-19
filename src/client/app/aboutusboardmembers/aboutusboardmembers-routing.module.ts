import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutusboardmembersComponent } from './aboutusboardmembers.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'aboutusboardmembers', component: AboutusboardmembersComponent ,canActivate:[AuthGuard],data: { roles: ['aboutusboardmembers'] }}
      { path: 'aboutusboardmembers', component: AboutusboardmembersComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AboutusboardmembersRoutingModule { }
