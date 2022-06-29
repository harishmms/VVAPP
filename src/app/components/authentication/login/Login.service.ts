import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  OrderId :any;
personnum:any;
numotp:any;
  max=989895;
  min=202426;
constructor(private http :HttpClient ,private route:Router, private router:ActivatedRoute) { }
OtpApi(formdata: any) {
  this.OrderId=Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      console.log(this.OrderId);
      formdata.otp=this.OrderId;
      console.log(formdata);  
  return this.http.post(`${environment.apiurl}OTP/Send_otp.php`,formdata);
}
getotpcom( ){
//  this.personnum=num;
//  this.numotp.number=num;
//  this.numotp.otp=this.OrderId;
this.route.navigateByUrl('/enterOtp');
// console.log(this.numotp)
return this.OrderId;
}
}
