import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepagedescriptionimgComponent } from './homepagedescriptionimg.component';
import { HomepagedescriptionimgRoutingModule } from './homepagedescriptionimg-routing.module';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import {PanelModule,FileUploadModule} from 'primeng/primeng';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {GrowlModule} from 'primeng/primeng';
import {MessagesModule,Message,Growl} from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router';
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule,EditorModule} from 'primeng/primeng';
import {DataTableModule,InputTextareaModule,DropdownModule,CalendarModule} from 'primeng/primeng';
import {AutoCompleteModule,ConfirmationService,ConfirmDialogModule} from 'primeng/primeng';

import { HomepagedescriptionimgService } from '../shared/homepagedescriptionimg/index';


@NgModule({
  imports: [CommonModule,EditorModule, InputTextareaModule,ConfirmDialogModule,AutoCompleteModule,FileUploadModule,DropdownModule,CalendarModule,HomepagedescriptionimgRoutingModule,FormsModule,DataTableModule,ReactiveFormsModule,InputTextModule,GrowlModule,ButtonModule,PanelModule,MessagesModule],//,PanelModule,MessagesModule,Growl],
  declarations: [HomepagedescriptionimgComponent],
  exports: [HomepagedescriptionimgComponent],
  providers: [HomepagedescriptionimgService,ConfirmationService]
})
export class HomepagedescriptionimgModule { }
