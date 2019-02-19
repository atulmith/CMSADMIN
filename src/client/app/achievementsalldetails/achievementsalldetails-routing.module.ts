import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AchievementsalldetailsComponent } from './achievementsalldetails.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'achievementsalldetails', component: AchievementsalldetailsComponent ,canActivate:[AuthGuard],data: { roles: ['achievementsalldetails'] }}
      // { path: 'achievementsalldetails', component: AchievementsalldetailsComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }},
      { path : 'achievementsalldetails/:id', component : AchievementsalldetailsComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }},
    ])
  ],
  exports: [RouterModule]
})
export class AchievementsalldetailsRoutingModule { }
