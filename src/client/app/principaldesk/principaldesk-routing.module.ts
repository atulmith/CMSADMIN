import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipaldeskComponent } from './principaldesk.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'principaldesk', component: PrincipaldeskComponent ,canActivate:[AuthGuard],data: { roles: ['principaldesk'] }}
      { path: 'principaldesk', component: PrincipaldeskComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class PrincipaldeskRoutingModule { }
