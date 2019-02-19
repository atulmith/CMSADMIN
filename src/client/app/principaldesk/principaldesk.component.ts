import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MessagesModule,Message,Growl} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router';
import {ButtonModule} from 'primeng/primeng';
import {principaldeskTS} from './principaldesk';

import {DataTableModule} from 'primeng/primeng';
import {SelectItem,ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { MyDateFormat } from '../shared/pipes/mydateformat.pipe';
import {MyTimeFormat} from '../shared/pipes/mytimeformat.pipe';
import { PrincipaldeskService } from '../shared/principaldesk/index';
import {BaseUrlService} from '../shared/baseurl/baseurl.service';
import {FileUpload} from './fileupload';

import { Observable } from 'rxjs/Rx';
/**
 * This class represents the lazy loaded countryComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-principaldesk',
  templateUrl: 'principaldesk.component.html',
  styleUrls: ['principaldesk.component.css'],
  providers:[MyDateFormat,MyTimeFormat,BaseUrlService,ConfirmationService]
})
export class PrincipaldeskComponent implements OnInit {
  
  userform: FormGroup;
  country_contacts:FormGroup;
  msgs: Message[]=[];
 
   submitted: boolean;
   submittedcontact:boolean;
   objVar: principaldeskTS;
   selectedRow:  principaldeskTS;

   objList:principaldeskTS[]=[];

   
 
 
    
   

   mybaseurl:string="";
   //Client format for file upload
  uploadedFiles: any[] = [];
  //server format for file upload
  fileuploadarr: FileUpload[]=[];
  fileupload: FileUpload;

      //Client format for file upload
  uploadedFiles2: any[] = [];
  //server format for file upload
  fileuploadarr2: FileUpload[]=[];
  fileupload2: FileUpload;

   newcontact: boolean;

   isnewobj:boolean=false;


      clear(){
            this.isnewobj=true;
            this.objVar=new principaldeskTS();

            // this.objVar.PackageIdHospitalization="1";
            // this.objVar.TrustIdHospitalization="1";
            

            this.fileupload=new FileUpload();
            this.fileuploadarr=[];
            this.uploadedFiles=[];

            this.fileupload2=new FileUpload();
            this.fileuploadarr2=[];
            this.uploadedFiles2=[];

            // this.drphospitalizationoptions=[];

            // this.ipdselected=null;

      }

      
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private localService: PrincipaldeskService,
              private mydate1: MyDateFormat,
              private mytime1:MyTimeFormat,
              private baseUrlservice:BaseUrlService,
              private confirmationService:ConfirmationService){
    
              //this.categorytype="hospitalizationtype";  
              // this.hospitalID="HSP1";  

              this.mybaseurl=baseUrlservice.getBaseurl();     
  }
 
  onSubmit(){
      //   alert(JSON.stringify(this.selectedRow));

        this.onFinalFileUpload();

         // this.objVar.HSPAdminStatus="A";

        //  this.objVar.IPDIdHospitalization=this.ipdselected.value;

        this.submitted = true;
        this.msgs = [];
        console.log(JSON.stringify(this.objVar));
        this.msgs.push({severity:'info', summary:'Please wait', detail:'Form Submitted Successfully.. Please wait..'})
        if(this.isnewobj){
        
        this.localService
      .insert(JSON.stringify(this.objVar))
      .subscribe(
         /* happy path */ p => this.objList = p,
         /* error path */ e => console.log(e),
         /* onComplete */ () => {
                              this.msgs.push({severity:'info', summary:'Success', detail:'Form Saved Successfully'})
                                console.log("saved result=");
                                
                      }
         );
        } 
        else{
          this.localService
          .update(JSON.stringify(this.objVar))
          .subscribe(
         /* happy path */ p => this.objList = p,
         /* error path */ e => console.log(e),
         /* onComplete */ () => {
                              this.msgs.push({severity:'info', summary:'Success', detail:'Form Update Successfully'})
                                console.log("saved result=");
                                
                      }
         );
        }
        this.submitted = true;
        // this.msgs = [];
        // this.msgs.push({severity:'info', summary:'Success', detail:'Form Update Successfully'});
        this.clear();
  }
  
 onRowSelectprincipaldesk(event: any){

  this.isnewobj=false;
  let temphomepagedescriptionimg:principaldeskTS;
  temphomepagedescriptionimg=this.selectedRow;

//this.ngModelHpdiId= temphomepagedescriptionimg.HpdiId;

  this.localService.edit(temphomepagedescriptionimg.PrincdId).subscribe(
    p => this.objVar=p,
    e => console.log( e), 
    () => console.log("edit") );

}

  onFinalFileUpload(){   
  
    // alert(this.uploadedFiles.length);
    for(let i=0;i<this.uploadedFiles.length;i++){
          let filename=this.uploadedFiles[i].name;
         
          let tempfileupload=new FileUpload();
          this.objVar.filename=filename;
          this.objVar.filepath='';
          this.objVar.filetype="img";
          
          tempfileupload.fileName=filename;
          tempfileupload.filePath='';
          tempfileupload.fileStatus='Yes';
          tempfileupload.fileType='img';
          tempfileupload.uploadfile_filename='';
         // alert("insidefileupload: " + JSON.stringify(this.fileupload));
          this.fileuploadarr.push(tempfileupload);
         break;
        }

        for(let i=0;i<this.uploadedFiles2.length;i++){
          let filename=this.uploadedFiles2[i].name;
         
          let tempfileupload=new FileUpload();
          this.objVar.filename2=filename;
          this.objVar.filepath2='';
          this.objVar.filetype2="img";
          
          tempfileupload.fileName=filename;
          tempfileupload.filePath='';
          tempfileupload.fileStatus='Yes';
          tempfileupload.fileType='img';
          tempfileupload.uploadfile_filename='';
         // alert("insidefileupload: " + JSON.stringify(this.fileupload));
          this.fileuploadarr2.push(tempfileupload);
         break;
        }
   
  }

  //upload files to the server
onUpload(event: any){
  //alert(event.files);
  this.uploadedFiles=[];
  for(let file of event.files) {
          
          this.uploadedFiles.push(file);
          
          this.objVar.filename=file.name;
          this.objVar.filepath='';
          this.objVar.filetype="img";
          
          break;
  }//console.log(event.xhr.response);
  this.msgs = [];
  this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
} 

 //upload files to the server
onUpload2(event: any){
  //alert(event.files);
  this.uploadedFiles2=[];
  for(let file of event.files) {
          
          this.uploadedFiles2.push(file);
          
          this.objVar.filename2=file.name;
          this.objVar.filepath2='';
          this.objVar.filetype2="img";
          
          break;
  }//console.log(event.xhr.response);
  this.msgs = [];
  this.msgs.push({severity: 'info', summary: 'File2 Uploaded', detail: ''});
}
  
ngOnInit() 
{ 
  this.clear();
  this.userform = this.fb.group({'PrincdName':new FormControl('', Validators. required),'PrincdDescription':new FormControl('', Validators. required),'PrincdBioData':new FormControl('', Validators. required),'PrincdSrNo':new FormControl('', Validators. required),'filename':new FormControl('', Validators. required),'filename2':new FormControl('', Validators. required),});

  this.localService
    .getall('DUMMY')
    .subscribe(
    p => this.objList = p,
    e => console.log( e),
    () => console.log('done getDisplayAll2' + JSON.stringify(this.objList)));

}

  
    deleteRow(cont: principaldeskTS) {


      this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {


            let selectedkeywordgridRow:principaldeskTS=cont;
            this.objList.splice(this.findSelectedKeywordSubcatIndex(selectedkeywordgridRow), 1);
            cont = null;

 let deleted:boolean=false;
            this.baseUrlservice.callCommonDeleteWS('principaldesk','PrincdId',selectedkeywordgridRow.PrincdId)
              .subscribe(
              p => deleted=p,
              e => console.log( e),
              () => {
                    if(deleted) {
                      this.msgs = [];
                      this.msgs.push({severity:'info', summary:'Confirmed', detail:'You have deleted row Successfully'});
                    } 
              });

	  
            this.msgs = [];
            this.msgs.push({severity:'info', summary:'Confirmed', detail:'You have accepted'});
            }
        });

  }

  findSelectedKeywordSubcatIndex(p:principaldeskTS): number {
        return this.objList.indexOf(p);
  }  
 
   
  
 

  initContact() {
        // initialize our address
        // return this.userform = this.fb.group({'country_name':new FormControl('', Validators. required),'country_aliasname':new FormControl('', Validators. required),});
        // return this.userform = this.fb.group({'HSPAdminDate':new FormControl('', Validators. required),'HSPAdmintime':new FormControl('', Validators. required),'HSPAdminStatus':new FormControl('', Validators. required),'IPDIdHospitalization':new FormControl('', Validators. required),'CategoryIdHospitalizationDepartment':new FormControl('', Validators. required),'DiseaseIdHospitalization':new FormControl('', Validators. required),});

    }

  //Dropdown change event capture
  drpchange(events1: any){
    // alert(events1.value);
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }
 }
