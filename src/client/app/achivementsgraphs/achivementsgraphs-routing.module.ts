import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AchivementsgraphsComponent } from './achivementsgraphs.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'achivementsgraphs', component: AchivementsgraphsComponent ,canActivate:[AuthGuard],data: { roles: ['achivementsgraphs'] }}
      { path: 'achivementsgraphs', component: AchivementsgraphsComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class AchivementsgraphsRoutingModule { }
