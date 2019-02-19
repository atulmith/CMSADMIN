import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsalldetailsComponent } from './achievementsalldetails.component';
import { AchievementsalldetailsRoutingModule } from './achievementsalldetails-routing.module';
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

import { AchievementsalldetailsService } from '../shared/achievementsalldetails/index';


@NgModule({
  imports: [CommonModule,EditorModule, InputTextareaModule,ConfirmDialogModule,AutoCompleteModule,FileUploadModule,DropdownModule,CalendarModule,AchievementsalldetailsRoutingModule,FormsModule,DataTableModule,ReactiveFormsModule,InputTextModule,GrowlModule,ButtonModule,PanelModule,MessagesModule],//,PanelModule,MessagesModule,Growl],
  declarations: [AchievementsalldetailsComponent],
  exports: [AchievementsalldetailsComponent],
  providers: [AchievementsalldetailsService,ConfirmationService]
})
export class AchievementsalldetailsModule { }
