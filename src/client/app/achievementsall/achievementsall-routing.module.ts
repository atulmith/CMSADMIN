import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AchievementsallComponent } from './achievementsall.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'achievementsall', component: AchievementsallComponent ,canActivate:[AuthGuard],data: { roles: ['achievementsall'] }}
      { path: 'achievementsall', component: AchievementsallComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AchievementsallRoutingModule { }
