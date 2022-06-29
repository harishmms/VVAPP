import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from './appointments.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {
  appointmentdata:any;
  // userid:any;
  UserId:any;
  decoded: any;
  fdata: any;

  constructor(private appointment:AppointmentsService) {
    this.UserId=localStorage.getItem('TokenId');
   }

  ngOnInit() {
    this.decoded = jwt_decode( this.UserId);
    this.fdata=this.decoded.user_id;
    this.getappointment();
  }
  getappointment(){
    this.appointment.getappointments(this.fdata).subscribe((res: any) => {
      this.appointmentdata=res.filter((res:any)=>res.appointment_patientid == `${this.fdata}`);
      console.log("test appointment id",this.appointmentdata);
      // this.apointmentlist=this.Userdata;
      
      
      return this.appointmentdata;
      });
    }
}
