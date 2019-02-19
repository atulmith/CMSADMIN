import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademistopstudteachersdetailsComponent } from './academistopstudteachersdetails.component';
import { AcademistopstudteachersdetailsRoutingModule } from './academistopstudteachersdetails-routing.module';
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

import { AcademistopstudteachersdetailsService } from '../shared/academistopstudteachersdetails/index';


@NgModule({
  imports: [CommonModule, InputTextareaModule,EditorModule,ConfirmDialogModule,AutoCompleteModule,FileUploadModule,DropdownModule,CalendarModule,AcademistopstudteachersdetailsRoutingModule,FormsModule,DataTableModule,ReactiveFormsModule,InputTextModule,GrowlModule,ButtonModule,PanelModule,MessagesModule],//,PanelModule,MessagesModule,Growl],
  declarations: [AcademistopstudteachersdetailsComponent],
  exports: [AcademistopstudteachersdetailsComponent],
  providers: [AcademistopstudteachersdetailsService,ConfirmationService]
})
export class AcademistopstudteachersdetailsModule { }
