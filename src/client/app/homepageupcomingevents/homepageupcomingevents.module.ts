import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageupcomingeventsComponent } from './homepageupcomingevents.component';
import { HomepageupcomingeventsRoutingModule } from './homepageupcomingevents-routing.module';
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

import { HomepageupcomingeventsService } from '../shared/homepageupcomingevents/index';


@NgModule({
  imports: [CommonModule, InputTextareaModule,EditorModule,ConfirmDialogModule,AutoCompleteModule,FileUploadModule,DropdownModule,CalendarModule,HomepageupcomingeventsRoutingModule,FormsModule,DataTableModule,ReactiveFormsModule,InputTextModule,GrowlModule,ButtonModule,PanelModule,MessagesModule],//,PanelModule,MessagesModule,Growl],
  declarations: [HomepageupcomingeventsComponent],
  exports: [HomepageupcomingeventsComponent],
  providers: [HomepageupcomingeventsService,ConfirmationService]
})
export class HomepageupcomingeventsModule { }
