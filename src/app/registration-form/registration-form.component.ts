import { Component, OnInit } from '@angular/core';
import { LandRecord } from '../models/LandRecord';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { ManageLandRecordsService } from '../services/managelandrecords.service';
import { ActivatedRoute, Params , Router} from '@angular/router'; 
import 'rxjs/add/operator/switchMap'; 
// import {FileUploadService} from '../services/file-upload.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  pid : number;
  fetchComplete : boolean = false;
  template : string = "form1";
  noSearchResults : boolean = false;
  noSearchResultsSurvey : boolean = false;
  landRecord: LandRecord = new LandRecord(); //initialize land record object
  landRecords: LandRecord[];
  landRecordsMojani: LandRecord;
  layoutForm: FormGroup;
  lat :number;
  long : number; 
  formData: FormData = new FormData();
  constructor(private formBuilder: FormBuilder, private manageLandRecordsService : ManageLandRecordsService, private router: Router,private route: ActivatedRoute) { }
 
  ngOnInit() {
  }
  
  search(){
    console.log("PID :" + this.pid);
    this.manageLandRecordsService.getLandRecordsMojaniByPid(this.pid)
    .subscribe(
      response => {
        console.log("res received from mojanibypid" + JSON.stringify(response));
        if(response !=null) {
          this.landRecordsMojani = <LandRecord> response.landRecords;
          if(this.landRecordsMojani!=null){
            this.noSearchResultsSurvey= false;
          }else{
            this.noSearchResultsSurvey = true;
          }
          console.log("search result survey"+this.noSearchResultsSurvey);
        }
      }
    );
    this.manageLandRecordsService.getLandRecordsKaveriByPid(this.pid)
    .subscribe(
      response => {
            console.log("res received from getLandRecords service" + JSON.stringify(response));
            if (response !=null) {
              //  this.router.navigate(['/success', this.landRecord.pid]);
              this.landRecords = <LandRecord[]> response.landRecords;
             if(this.landRecords!=null && this.landRecords.length > 0){
               this.noSearchResults= false;
             }else{
               this.noSearchResults = true;
             }
              this.fetchComplete = true; 
            }
          }); 
  }

  loadRegistrationForm(){
    this.template = "form2";
    this.loadForm();
  }

  loadForm() {
    this.lat=null;
    this.long = null;
    this.layoutForm = this.formBuilder.group({
      TimeStamp: [null],
      pid: [''],
      wardNo: [null],
      areaCode: [null],
      siteNo: [null],
      geoData: this.formBuilder.group({
        latitude: [null],
        longitude: [null],
        length: [null],
        width: [null],
        totalArea: '',
        address: [null]
      }),
      preMutationSketch: [null],
      ownerDetails: this.formBuilder.group({
        ownerName: [null],
        gender:[null],
        aadharNo: [null],
        mobileNo: [null],
        emailID:[null],
        address: [null]
      }),
      newOwnerDetails: this.formBuilder.group({
        newownerName: [null],
        newgender:[null],
        newaadharNo: [null],
        newmobileNo: [null],
        newemailID:[null],
        newaddress: [null]
      }),
      saleRate :[null]
    });
          if(this.noSearchResults==false){
          this.manageLandRecordsService.getLandRecordsKaveriByPid(this.pid)
          .subscribe(
            response => {
              console.log("res received getLandRecordbyPid service" + JSON.stringify(response));
              if (response !=null && response.success) {
                this.landRecord = <LandRecord> response.landRecords[0];
                // this.landRecord.ownerDetails = JSON.parse(JSON.stringify(this.landRecord.newOwnerDetails));
                // this.landRecord.newOwnerDetails = null;
                console.log("landRecord object received:" + JSON.stringify(this.landRecord));
                this.layoutForm.patchValue(this.landRecord);
                this.setGeoCordinates();
              }
            }); 
          }else if(this.noSearchResultsSurvey==false){
            this.manageLandRecordsService.getLandRecordsMojaniByPid(this.pid)
            .subscribe(
            response => {
              console.log("res received getLandRecordbyPid service" + JSON.stringify(response));
              if (response !=null && response.success) {
                this.landRecord = <LandRecord> response.landRecords;
                console.log("landRecord object received:" + this.landRecord);
                this.layoutForm.patchValue(this.landRecord);
                this.setGeoCordinates();
              }
            }); 
          }
  } 

  setGeoCordinates(){
    this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
    this.long =parseFloat( this.layoutForm.get('geoData.longitude').value);
  }   

  IDGenerator() {    
      var length = 8;
      var timestamp = +new Date;      
      var _getRandomInt = function( min, max ) {
       return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
      } 
      var id = "";
        var ts = timestamp.toString();
        var parts = ts.split( "" ).reverse();      
        for( var i = 0; i < length; ++i ) {
         var index = _getRandomInt( 0, parts.length - 1 );
         id += parts[index];   
      } 
      return id;     
    } 
  
  onSubmit() {
    if (this.layoutForm.valid) {
      console.log('form valid success');
      //sync the form model with the data model
      this.landRecord = <LandRecord>this.layoutForm.value;
      this.landRecord.TimeStamp = new Date();
      this.landRecord.txnID = "TXN"+this.IDGenerator();
      this.landRecord.isKaveriApproved = false;
      console.log("pid generated: " + this.landRecord.pid);
      console.log("txn id: "+this.landRecord.txnID);
      console.log("landrecord: " + JSON.stringify(this.landRecord));

      this.manageLandRecordsService.addLandRecordKaveri(this.landRecord)
        .subscribe(
        response => {
          console.log("res received addLandRecord service" + JSON.stringify(response));
            if (response !=null && response.success) {
            //Upload the files to server
            // this.fileUploadService.uploadFiles(this.formData)
            //     .subscribe(files => console.log('files uploaded :' + files));
              this.template = "form3";
            }
        });
    } else {
      this.validateAllFormFields(this.layoutForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  isFieldValid(field: string) {
    return !this.layoutForm.get(field).valid && this.layoutForm.get(field).touched;
  }

  submitNew() {
    this.fetchComplete = false;
    this.template = "form1";
    this.pid=null;
  }
  back(){
    this.template = "form1";
  }
}
