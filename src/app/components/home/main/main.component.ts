import { Component, OnInit } from "@angular/core";
import jwt_decode from "jwt-decode";
import { MainserviceService } from "./mainservice.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  UserId: any;
  decoded: any;
  Userdata: any;
  fdata: any;
  baneer:any;
  constructor(private mainservice: MainserviceService) {
    this.UserId = localStorage.getItem("TokenId");
    this.decoded = jwt_decode(this.UserId);
  }
  ngOnInit(): void {
    this.getbanner();
 
    // console.log("this is new decoded jwt code", this.decoded.user_id);
    this.fdata = this.decoded.user_id;
    this.getusername();
  }

getbanner(){
  this.mainservice.getbanner().subscribe((res) => {
    
    this.baneer=res;
    console.log("here is user data of fetching of baneer", this.baneer);
  });
}
getusername()
{
  this.mainservice.getUserApi().subscribe((res) => {
    this.Userdata = res.filter((res: any) => res.user_id == `${this.fdata}`);
    console.log("here is user data of fetching of Userdata", this.Userdata);
  });
}

}
