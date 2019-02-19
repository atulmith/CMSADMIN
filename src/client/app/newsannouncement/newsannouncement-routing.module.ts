import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsannouncementComponent } from './newsannouncement.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'newsannouncement', component: NewsannouncementComponent ,canActivate:[AuthGuard],data: { roles: ['newsannouncement'] }}
      { path: 'newsannouncement', component: NewsannouncementComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class NewsannouncementRoutingModule { }
