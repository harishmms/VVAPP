import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  OrderId :any;
  max=989895;
  min=202426;

constructor(private http :HttpClient ,private route:Router, private router:ActivatedRoute ) { }
OtpApi(formdata: any) {
  return this.http.post(`${environment.apiurl}OTP/Send_otp.php`,formdata);
}
fun(){
  const vs="test";
// this.route.navigateByUrl('/Signup');


this.OrderId=Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      console.log("The Random Order Id is",this.OrderId);
      this.route.navigateByUrl('/Signup');
return this.OrderId;
}
checkotp(sotp:any, uotp:any)
{

  let status="no";
if(sotp==uotp)
{
  status="OK";
   this.route.navigateByUrl('/Signup');

//
}else{
  console.log("notok");
  
}
return status;
}
}
