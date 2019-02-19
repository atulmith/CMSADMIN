import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'gallery', component: GalleryComponent ,canActivate:[AuthGuard],data: { roles: ['gallery'] }}
      { path: 'gallery', component: GalleryComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
