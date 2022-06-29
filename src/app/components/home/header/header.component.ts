import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { MainserviceService } from '../main/mainservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserId:any;
  decoded:any;
  Userdata:any;
  fdata:any;
  imageSrc:any="https://img.icons8.com/ios-filled/35/0B1B67/contacts.png";
  constructor(private mainservice:MainserviceService, private router:Router ) { 
    this.UserId=localStorage.getItem('TokenId');
  }
logout(){
this.router.navigateByUrl("/Loginbypassword");
this.UserId=localStorage.removeItem('TokenId');
}
  ngOnInit() {
    this.decoded = jwt_decode( this.UserId);
console.log("this is new decoded jwt code",this.decoded);
this.fdata=this.decoded.user_id

this.mainservice.getUserApi().subscribe((res) => {
  this.Userdata=res.filter((res:any)=>res.user_id == `${this.fdata}`);
  let imgd=this.Userdata[0].propic_url;
  if(imgd!=""&& imgd!='undefined'&& imgd!=null && imgd!=undefined  ){
    this.imageSrc =this.Userdata[0].propic_url;
  }else{
    this.imageSrc="https://img.icons8.com/ios-filled/35/0B1B67/contacts.png";
  }
  console.log("here is user data of fetching",this.Userdata);
});
  }

}
