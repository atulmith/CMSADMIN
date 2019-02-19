import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepagevideourlComponent } from './homepagevideourl.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepagevideourl', component: HomepagevideourlComponent ,canActivate:[AuthGuard],data: { roles: ['homepagevideourl'] }}
      { path: 'homepagevideourl', component: HomepagevideourlComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepagevideourlRoutingModule { }
