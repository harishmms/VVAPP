import { Component, OnInit } from '@angular/core';
import { MyhealthcheckupsService } from './myhealthcheckups.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-my-HealthChechups',
  templateUrl: './my-HealthChechups.component.html',
  styleUrls: ['./my-HealthChechups.component.css']
})
export class MyHealthChechupsComponent implements OnInit {
orderlist:any;
UserId:any;
decoded: any;
fdata: any;
  constructor(private MyhealthcheckupsService: MyhealthcheckupsService) { 
    this.UserId=localStorage.getItem('TokenId');
  }

  ngOnInit() {
    this.decoded = jwt_decode(this.UserId);
    this.fdata=this.decoded.user_id;
    this.getorders();
  }
getorders(){
  this.MyhealthcheckupsService.getappointments().subscribe((res:any)=>{
    console.log(res);
    console.log(this.fdata);
    
this.orderlist=res.filter((res:any)=>res.user_id ==`${this.fdata}`);
console.log(this.orderlist);

  })
}
}
