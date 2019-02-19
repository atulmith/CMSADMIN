import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpecialaidComponent } from './specialaid.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'specialaid', component: SpecialaidComponent ,canActivate:[AuthGuard],data: { roles: ['specialaid'] }}
      { path: 'specialaid', component: SpecialaidComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class SpecialaidRoutingModule { }
