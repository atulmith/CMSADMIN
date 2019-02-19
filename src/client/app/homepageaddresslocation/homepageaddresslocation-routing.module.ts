import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageaddresslocationComponent } from './homepageaddresslocation.component';
import {AuthGuard} from '../shared/login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      // { path: 'homepageaddresslocation', component: HomepageaddresslocationComponent ,canActivate:[AuthGuard],data: { roles: ['homepageaddresslocation'] }}
      { path: 'homepageaddresslocation', component: HomepageaddresslocationComponent ,canActivate:[AuthGuard],data: { roles: ['admin'] }}
    ])
  ],
  exports: [RouterModule]
})
export class HomepageaddresslocationRoutingModule { }
