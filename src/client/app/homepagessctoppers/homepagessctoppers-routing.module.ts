import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepagessctoppersComponent } from './homepagessctoppers.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepagessctoppers', component: HomepagessctoppersComponent ,canActivate:[AuthGuard],data: { roles: ['homepagessctoppers'] }}
      { path: 'homepagessctoppers', component: HomepagessctoppersComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepagessctoppersRoutingModule { }
