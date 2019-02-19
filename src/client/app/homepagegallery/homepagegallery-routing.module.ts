import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepagegalleryComponent } from './homepagegallery.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepagegallery', component: HomepagedescriptionimgComponent ,canActivate:[AuthGuard],data: { roles: ['homepagegallery'] }}
      { path: 'homepagegallery', component: HomepagegalleryComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepagegalleryRoutingModule { }
