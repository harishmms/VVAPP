import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffersubService } from '../offersub/offersub.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LabbooknowService } from './labbooknow.service';
import jwt_decode from "jwt-decode";

// import{}
@Component({
  selector: 'app-labbooknow',
  templateUrl: './labbooknow.component.html',
  styleUrls: ['./labbooknow.component.css']
})
export class LabbooknowComponent implements OnInit {
  UserId:any;
  decoded: any;
  fdata: any;
  
  checkup_id: any;
  checkuplist: any;
  checkuppackBooking:FormGroup;
  constructor(private offersub: OffersubService, private router: Router,private formbuilder: FormBuilder,private LabbooknowService:LabbooknowService) { 
    this.checkuppackBooking=this.formbuilder.group({
      PName: ['',[Validators.required]],
      mobile: ['',[Validators.required,Validators.minLength(10)]],
      gender:['',Validators.required],
      mail: ['',[Validators.required ,Validators.email]],
      Page: ['',[Validators.required]],
      date: ['',[Validators.required]],
      checkup_name:['',[Validators.required]],
      checkup_desc:['',[Validators.required]],
      price:['',[Validators.required]],
      checkuppack_id:['',[Validators.required]],
      test_desc:['',[Validators.required]],
      user_id:['',[Validators.required]],
    });

    this.UserId=localStorage.getItem('TokenId');
  }

  ngOnInit(): void {
    this.checkup_id = localStorage.getItem("HealthCheckupId");
    this.decoded = jwt_decode( this.UserId);
    this.fdata=this.decoded.user_id;
    this.getcheckupbyid();
  }
  getcheckupbyid() {
    this.offersub.getcheckupbyid(this.checkup_id).subscribe((res: any) => {
      this.checkuplist = res;   
      this.checkuppackBooking.controls["checkup_name"].setValue( this.checkuplist[0].checkuppack_name);
      this.checkuppackBooking.controls["checkup_desc"].setValue( this.checkuplist[0].description);
      this.checkuppackBooking.controls["price"].setValue( this.checkuplist[0].checkuppack_finalamount);
      this.checkuppackBooking.controls["test_desc"].setValue( this.checkuplist[0].include_tests_des);
      this.checkuppackBooking.controls["checkuppack_id"].setValue( this.checkuplist[0].checkuppack_id);
      this.checkuppackBooking.controls["user_id"].setValue( this.fdata);
    console.log(this.checkuppackBooking.value);
      return this.checkuplist;
    });
  }

  FormSubmit(){
// console.log(this.checkuppackBooking.value);
this.LabbooknowService.bookorder(this.checkuppackBooking.value).subscribe((res:any)=>{
  // console.log(res);
  this.router.navigateByUrl('/MyHealthChechups');
  
})

  }    
  get validate() {
    return this.checkuppackBooking.controls;
  }
}
