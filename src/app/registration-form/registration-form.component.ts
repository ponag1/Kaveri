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

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  pid : number;
  fetchComplete : boolean = true;
  transferClicked : boolean = false;
  noSearchResults : boolean = false;
  applicationSuccess : boolean = false;
  landRecord: LandRecord = new LandRecord(); //initialize land record object
  landRecords: LandRecord[];
  layoutForm: FormGroup;
  lat :number;
  long : number; 
  submitSuccess :boolean = false;
  constructor(private formBuilder: FormBuilder, private manageLandRecordsService : ManageLandRecordsService, private router: Router,private route: ActivatedRoute) { }
 
  ngOnInit() {
  }
  
  search(){
    console.log("PID :" + this.pid);
    this.manageLandRecordsService.getLandRecordsMojaniByPid(this.pid)
    .subscribe(
      response => {
            console.log("res received from getLandRecords service" + JSON.stringify(response));
            if (response !=null) {
              //  this.router.navigate(['/success', this.landRecord.pid]);
              this.landRecords =  <LandRecord[]> response.landRecords;
             if(this.landRecord!=null && this.landRecords.length > 0){
               this.noSearchResults= false;
             }else{
               this.noSearchResults = true;
             }
              this.fetchComplete = true; 
            }
          });
  }

  loadRegistrationForm(){
    this.transferClicked = true;
  }

  loadForm() {
    this.submitSuccess = false;
    this.lat=null;
    this.long = null;
    this.layoutForm = this.formBuilder.group({
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
    this.route.params
          .switchMap((params: Params) => this.manageLandRecordsService.getLandRecordsMojaniByPid(+params['id']))
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

  setGeoCordinates(){
    this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
    this.long =parseFloat( this.layoutForm.get('geoData.longitude').value);
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
}
