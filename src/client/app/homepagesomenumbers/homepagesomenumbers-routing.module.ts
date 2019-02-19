import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepagesomenumbersComponent } from './homepagesomenumbers.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepagesomenumbers', component: HomepagesomenumbersComponent ,canActivate:[AuthGuard],data: { roles: ['homepagesomenumbers'] }}
      { path: 'homepagesomenumbers', component: HomepagesomenumbersComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepagesomenumbersRoutingModule { }
