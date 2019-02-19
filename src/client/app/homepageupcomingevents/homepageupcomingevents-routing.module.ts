import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageupcomingeventsComponent } from './homepageupcomingevents.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepageupcomingevents', component: HomepageupcomingeventsComponent ,canActivate:[AuthGuard],data: { roles: ['homepageupcomingevents'] }}
      { path: 'homepageupcomingevents', component: HomepageupcomingeventsComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepageupcomingeventsRoutingModule { }
