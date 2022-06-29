import { Component, OnInit } from '@angular/core';
import { ConsultdoctorService } from './consultdoctor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consult-doctor',
  templateUrl: './consult-doctor.component.html',
  styleUrls: ['./consult-doctor.component.css']
})
export class ConsultDoctorComponent implements OnInit {
doctorslist:any;
DepId:any;
  constructor(private ConsultdoctorService:ConsultdoctorService, private router:Router ) {
    this.DepId=localStorage.getItem('departmentId');
   }
  ngOnInit(): void {
    this.getdoctors();
  }
  abtdoctor(dcr_id:any){
// localStorage.removeItem("Doctor_Id");
localStorage.setItem("Doctor_Id",dcr_id);
this.router.navigateByUrl("/aboutdoc");

  }
  setconsultation(dcr_id:any){
    localStorage.setItem("Doctor_Id",dcr_id);
// this.router.navigateByUrl("/bookappointment");
this.router.navigateByUrl("/timeslot");
  }
getdoctors(){
this.ConsultdoctorService.getdoctors().subscribe((res: any) => {
  // res.filter((res:any)=>res.doctor_department == `${this.DepId}`);; 
  this.doctorslist= res.filter((res:any)=>res.doctor_department == `${this.DepId}`);
  
  return res;
  });

}
}
