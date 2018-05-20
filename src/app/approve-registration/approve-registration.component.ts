import { Component, OnInit } from '@angular/core';
import { LandRecord } from '../models/LandRecord';
import { ManageLandRecordsService } from '../services/managelandrecords.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-approve-registration',
  templateUrl: './approve-registration.component.html',
  styleUrls: ['./approve-registration.component.css']
})
export class ApproveRegistrationComponent implements OnInit {
  approveSuccess : boolean = false;
  landRecords : LandRecord[];
  approvedRecords : LandRecord[];
  wardNo : number;
  fetchComplete : boolean = false;
  noSearchResults : boolean = false;
  viewRecord : boolean = false;

  constructor(private manageLandRecordsService : ManageLandRecordsService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("ApplicationData" + JSON.stringify(this.landRecords));
    this.approvedRecords =  this.landRecords.filter(
    (rec) => rec.isKaveriApproved);
    this.manageLandRecordsService.updateKaveriApprovedRecords(this.approvedRecords)
    .subscribe(
      response => {
        console.log("res received updateLandrecordKaveri service" + JSON.stringify(response));
        if (response !=null && response.success) {
          //  this.router.navigate(['/success', this.landRecord.pid]);
          this.approveSuccess = true; 
        }   
      });
  }

  submitNew(){
        this.landRecords = [];
        this.approveSuccess= false;
        this.wardNo = null; 
        this.fetchComplete = false;
  }

  search(){
    console.log("ward No :" + this.wardNo);
    this.manageLandRecordsService.getLandRecordsKaveriByWard(this.wardNo)
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

  viewData(){
    this.viewRecord = true;
  }
}
