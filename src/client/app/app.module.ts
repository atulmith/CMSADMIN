import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {PanelModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';


import { HomeModule } from './home/home.module';
// import { democompModule } from './democomp/democomp.module';
import { LoginModule } from './login/login.module';
 
import { SharedModule } from './shared/shared.module';
import {InputTextModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {EditorModule,SharedModule as primengSharedModule} from 'primeng/primeng';
import {CalendarModule,InputTextareaModule} from 'primeng/primeng';
import {FileUploadModule,ScheduleModule} from 'primeng/primeng';

//as done on 9 feb 2017 by Mandar for userrights form
import {InputSwitchModule} from 'primeng/primeng';

import {AuthGuard} from './login/auth.guard';
import {ProjectModule} from './project/project.module';

import {UserrightsModule} from './userrights/userrights.module';
    
import {IpdpapersModule } from './ipdpapers/ipdpapers.module';
import {HomepagedescriptionimgModule} from './homepagedescriptionimg/homepagedescriptionimg.module'; 
import {HomepagegalleryModule} from './homepagegallery/homepagegallery.module'; 
import {HomepagelatestnewsModule} from './homepagelatestnews/homepagelatestnews.module'; 
import {HomepagesomenumbersModule} from './homepagesomenumbers/homepagesomenumbers.module'; 
import {HomepagessctoppersModule} from './homepagessctoppers/homepagessctoppers.module'; 
import {HomepageupcomingeventsModule} from './homepageupcomingevents/homepageupcomingevents.module'; 

import {HomepageschoolresultsModule} from './homepageschoolresults/homepageschoolresults.module'; 
import {HomepageschoolresultsdetailsModule} from './homepageschoolresultsdetails/homepageschoolresultsdetails.module'; 
import {HomepagevideourlModule} from './homepagevideourl/homepagevideourl.module'; 

import {AboutusModule} from './aboutus/aboutus.module'; 
import {AboutusboardmembersModule} from './aboutusboardmembers/aboutusboardmembers.module'; 
import {HomepageaddresslocationModule} from './homepageaddresslocation/homepageaddresslocation.module'; 
import {PrincipaldeskModule} from './principaldesk/principaldesk.module'; 

import {AcademicsmidssckarateModule} from './academicsmidssckarate/academicsmidssckarate.module'; 
import {AcademicsprimarysecondarySchoolModule} from './academicsprimarysecondarySchool/academicsprimarysecondarySchool.module'; 
import {AcademicspriprimaryModule} from './academicspriprimary/academicspriprimary.module'; 
import {AcademicsschoolactivitiesModule} from './academicsschoolactivities/academicsschoolactivities.module'; 
import {AcademistopstudteachersModule} from './academistopstudteachers/academistopstudteachers.module'; 
import {AcademistopstudteachersdetailsModule} from './academistopstudteachersdetails/academistopstudteachersdetails.module'; 

import {AchievementsallModule} from './achievementsall/achievementsall.module'; 
import {AchievementsalldetailsModule} from './achievementsalldetails/achievementsalldetails.module'; 
import {AchivementsgraphsModule} from './achivementsgraphs/achivementsgraphs.module'; 
import {GalleryModule} from './gallery/gallery.module'; 
import {NewsannouncementModule} from './newsannouncement/newsannouncement.module'; 
import {SpecialaidModule} from './specialaid/specialaid.module'; 

@NgModule({
  imports: [BrowserModule, 
  HttpModule, AppRoutingModule,
  FormsModule,ReactiveFormsModule,EditorModule,primengSharedModule,
  GrowlModule,PanelModule,MessagesModule,ButtonModule,DropdownModule,DataTableModule,DialogModule,CalendarModule,FileUploadModule,InputTextareaModule,SpinnerModule,
  // FormsModule,PanelModule,ReactiveFormsModule,GrowlModule,MessagesModule,
    HomeModule,LoginModule, InputSwitchModule,ScheduleModule,
   UserrightsModule,HomepagedescriptionimgModule,HomepagegalleryModule,HomepagelatestnewsModule,HomepagesomenumbersModule,   
   HomepagessctoppersModule,HomepageupcomingeventsModule,
   HomepageschoolresultsModule,HomepageschoolresultsdetailsModule,HomepagevideourlModule,
  AboutusModule,AboutusboardmembersModule,HomepageaddresslocationModule,PrincipaldeskModule,
  AcademicsmidssckarateModule , AcademicsprimarysecondarySchoolModule, AcademicspriprimaryModule,
   AcademicsschoolactivitiesModule ,AcademistopstudteachersModule, AcademistopstudteachersdetailsModule,
   AchievementsallModule,AchievementsalldetailsModule,AchivementsgraphsModule,GalleryModule,
   NewsannouncementModule,SpecialaidModule,
    InputTextModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    AuthGuard,
    {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
