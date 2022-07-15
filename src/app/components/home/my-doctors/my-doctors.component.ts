import { Component, OnInit } from '@angular/core';
import { MydoctorsService } from './mydoctors.service';
import jwt_decode from "jwt-decode";
import { AppointmentsService } from '../../user/my-appointments/appointments.service';
@Component({
  selector: 'app-my-doctors',
  templateUrl: './my-doctors.component.html',
  styleUrls: ['./my-doctors.component.css']
})
export class MyDoctorsComponent implements OnInit {
userid:any;
Doctorsdata:any;
UserId:any;
decoded: any;
fdata: any;
  constructor(private mydoctorservice:MydoctorsService,private appointment:AppointmentsService) {    this.UserId=localStorage.getItem('TokenId');}

  ngOnInit() {
    this.decoded = jwt_decode(this.UserId);
    this.fdata=this.decoded.user_id;
//     this.mydoctorservice.getmydoctors(this.fdata).subscribe((res:any)=>{
// this.Doctorsdata=res;
// console.log("the mydoctors data is :",this.mydoctorservice);
//     })

this.getappointment();
  }

  getappointment(){
    this.appointment.getappointments(this.fdata).subscribe((res: any) => {
      this.Doctorsdata=res.filter((res:any)=>res.appointment_patientid == `${this.fdata}`);
      console.log("the mydoctors data is :",this.Doctorsdata);
      // this.apointmentlist=this.Userdata;
      return this.Doctorsdata;
      });
    }
}
