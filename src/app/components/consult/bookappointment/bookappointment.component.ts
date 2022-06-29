import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import jwt_decode from "jwt-decode";
import { BokkingService } from "./Bokking.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-bookappointment",
  templateUrl: "./bookappointment.component.html",
  styleUrls: ["./bookappointment.component.css"],
})
export class BookappointmentComponent implements OnInit {
  UserId: any;
  decoded: any;
  Userdata: any = {};
  fdata: any;
  symptoms: any;
  apointmentlist: any = {};
  doctorlist: any;
  doctorFeez:any;
  doctorid = localStorage.getItem("Doctor_Id");
  formUserId: any;
  formUserName: any;
  formUserMobile: any;
  formDocId: any;
  formDocName: any;
  formDocNumber: any;
  formDoctordept: any;
  formSymptom: any;
  aslot:any;
  adate:any;
  coupons:any;
  grandtotal:any;
 appointmentBooking: FormGroup;
  constructor(
    private BokkingService: BokkingService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {
    this.appointmentBooking = this.formbuilder.group({
      userId: ["", Validators.required],
      userName: ["", Validators.required],
      userMobile: ["", Validators.required],
      DocId: ["", Validators.required],
      DocName: ["", Validators.required],
      DocNum: ["", Validators.required],
      DocDepartment: ["", Validators.required],
      Symptom: ["", Validators.required],
      Feez:["",Validators.required],
      appdate:["",Validators.required],
      aslot:["",Validators.required],
    });
  }
  ngOnInit(): void {
    this.UserId = localStorage.getItem("TokenId");
    this.fetchdata();
    this.getuser();
    this.getdoctors();
    this.getcoupon();
  }
  fetchdata() {
    this.decoded = jwt_decode(this.UserId);
    this.fdata = this.decoded.user_id;
    this.symptoms = localStorage.getItem("psymptoms");
    this.apointmentlist.symptom = this.symptoms;
    this.apointmentlist.user_name = this.Userdata.user_mail;
    this.aslot=localStorage.getItem('slot');
    this.adate=localStorage.getItem('adate');
    this.appointmentBooking.controls["appdate"].setValue(this.adate);
    this.appointmentBooking.controls["aslot"].setValue(this.aslot);
  }
  getuser() {
    this.BokkingService.getuser(this.fdata).subscribe((res: any) => {
      this.Userdata = res.filter((res: any) => res.user_id == `${this.fdata}`);
      this.formUserId = this.Userdata[0].user_id;
      this.formUserName = this.Userdata[0].user_name;
      this.formUserMobile = this.Userdata[0].user_number;
      this.appointmentBooking.controls["userId"].setValue(this.formUserId);
      this.appointmentBooking.controls["userName"].setValue(this.formUserName);
      this.appointmentBooking.controls["userMobile"].setValue(
        this.formUserMobile
      );
      return this.Userdata;
    });
  }
  getdoctors() {
    this.BokkingService.getdoctors(this.doctorid).subscribe((res: any) => {
      this.doctorlist = res;
      this.formDocId = this.doctorlist[0].doctor_id;
      this.formDocName = this.doctorlist[0].doctor_name;
      this.formDocNumber = this.doctorlist[0].doctor_phone;
      this.formDoctordept = this.doctorlist[0].departments_name;
      this.doctorFeez=this.doctorlist[0].feez;
      this.grandtotal=this.doctorlist[0].feez;
      this.appointmentBooking.controls["DocId"].setValue(this.formDocId);
      this.appointmentBooking.controls["DocName"].setValue(this.formDocName);
      this.appointmentBooking.controls["DocNum"].setValue(this.formDocNumber);
      this.appointmentBooking.controls["DocDepartment"].setValue(this.formDoctordept);
      this.appointmentBooking.controls["Symptom"].setValue(this.symptoms);
      this.appointmentBooking.controls["Feez"].setValue(this.doctorFeez);
      return this.doctorlist;
    });
  }
  bookappointment() {
    this.BokkingService.bookappointment(this.appointmentBooking.value ).subscribe((res: any) => {
      this.router.navigateByUrl("/appointments");
    });
  }
  getcoupon() {
    this.BokkingService.getcouponcode().subscribe((res: any) => {
      this.coupons=res;
      return this.coupons;
    });
  }
  getcopuondata( data:any){
console.log(data);
this.grandtotal=Number( this.doctorFeez);
console.log(this.grandtotal);
this.grandtotal=this.grandtotal- data;
console.log(this.grandtotal);
this.appointmentBooking.controls["Feez"].setValue(this.grandtotal);
  }
}
