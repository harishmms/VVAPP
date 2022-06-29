import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators,FormBuilder} from '@angular/forms';
import { OtpService } from './Otp.service'; 
import { LoginService } from '../login/Login.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  sotp:any;
  mnumber:any;
  profileForm!: FormGroup;
  constructor(private SignupFrom: FormBuilder,private OtpService:OtpService,private LoginService:LoginService ) { this.profileForm=this.SignupFrom.group({
    number: ['',[Validators.required]],
    // otp2: ['',[Validators.required]],
    // otp3: ['',[Validators.required]],
    // otp4: ['',[Validators.required ]],
    // otp5: ['',[Validators.required]],
    // otp6: ['',[Validators.required]],
   })
  }

 otpsend(){
   this.OtpService.OtpApi(this.profileForm.value).subscribe((res:any)=>{
    console.log(res);
  });
 }
 serfun(){
   this.OtpService.fun();
 }
 Checkotp(){  
   let uotp=this.profileForm.controls["number"].value;
   console.log(this.sotp, uotp); 
  this.OtpService.checkotp(this.sotp, uotp);
}
  ngOnInit(): void {

this.sotp=this.LoginService.getotpcom();
this.mnumber=localStorage.getItem('MobileId');
  }

}
