import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademistopstudteachersComponent } from './academistopstudteachers.component';
import { AcademistopstudteachersRoutingModule } from './academistopstudteachers-routing.module';
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

import { AcademistopstudteachersService } from '../shared/academistopstudteachers/index';


@NgModule({
  imports: [CommonModule, InputTextareaModule,ConfirmDialogModule,AutoCompleteModule,FileUploadModule,DropdownModule,CalendarModule,AcademistopstudteachersRoutingModule,FormsModule,DataTableModule,ReactiveFormsModule,InputTextModule,GrowlModule,ButtonModule,PanelModule,MessagesModule],//,PanelModule,MessagesModule,Growl],
  declarations: [AcademistopstudteachersComponent],
  exports: [AcademistopstudteachersComponent],
  providers: [AcademistopstudteachersService,ConfirmationService]
})
export class AcademistopstudteachersModule { }
