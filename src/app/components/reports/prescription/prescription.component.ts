import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from './prescription.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  UserId:any;
  decoded: any;
  fdata: any;
  Prescriptionlist:any;
  
  constructor(private PrescriptionService :PrescriptionService) { 
    this.UserId=localStorage.getItem('TokenId');
  }

  ngOnInit() {
    this.decoded = jwt_decode( this.UserId);
    this.fdata=this.decoded.user_id
    console.log(this.fdata);
    this.getPrescription();
  }
getPrescription(){
  this.PrescriptionService.getprescriptions(this.fdata).subscribe((res:any)=>{

    this.Prescriptionlist=res;
    console.log(this.Prescriptionlist);
    
  })
}
}
