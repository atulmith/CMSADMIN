import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageschoolresultsdetailsComponent } from './homepageschoolresultsdetails.component';
import { HomepageschoolresultsdetailsRoutingModule } from './homepageschoolresultsdetails-routing.module';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import {PanelModule,FileUploadModule} from 'primeng/primeng';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {GrowlModule} from 'primeng/primeng';
import {MessagesModule,Message,Growl} from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router';
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule,} from 'primeng/primeng';
import {DataTableModule,InputTextareaModule,DropdownModule,CalendarModule} from 'primeng/primeng';
import {AutoCompleteModule,ConfirmationService,ConfirmDialogModule} from 'primeng/primeng';

import { HomepageschoolresultsdetailsService } from '../shared/homepageschoolresultsdetails/index';


@NgModule({
  imports: [CommonModule, InputTextareaModule,ConfirmDialogModule,AutoCompleteModule,FileUploadModule,DropdownModule,CalendarModule,HomepageschoolresultsdetailsRoutingModule,FormsModule,DataTableModule,ReactiveFormsModule,InputTextModule,GrowlModule,ButtonModule,PanelModule,MessagesModule],//,PanelModule,MessagesModule,Growl],
  declarations: [HomepageschoolresultsdetailsComponent],
  exports: [HomepageschoolresultsdetailsComponent],
  providers: [HomepageschoolresultsdetailsService,ConfirmationService]
})
export class HomepageschoolresultsdetailsModule { }
