import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipaldeskComponent } from './principaldesk.component';
import { PrincipaldeskRoutingModule } from './principaldesk-routing.module';
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

import { PrincipaldeskService } from '../shared/principaldesk/index';


@NgModule({
  imports: [CommonModule, InputTextareaModule,EditorModule,ConfirmDialogModule,AutoCompleteModule,FileUploadModule,DropdownModule,CalendarModule,PrincipaldeskRoutingModule,FormsModule,DataTableModule,ReactiveFormsModule,InputTextModule,GrowlModule,ButtonModule,PanelModule,MessagesModule],//,PanelModule,MessagesModule,Growl],
  declarations: [PrincipaldeskComponent],
  exports: [PrincipaldeskComponent],
  providers: [PrincipaldeskService,ConfirmationService]
})
export class PrincipaldeskModule { }
