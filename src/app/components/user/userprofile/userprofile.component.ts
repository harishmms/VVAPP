import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { UserprofileService } from './userprofile.service';
import { FormGroup, Validators,FormBuilder,} from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profileForm: FormGroup;
  UserId:any;
  decoded:any;
  Userdata:any;
  fdata:any
  imageSrc: any="assets/imagescopy/addimgs.webp";
  constructor(private profileservice:UserprofileService,private SignupFrom: FormBuilder) { 
    this.UserId=localStorage.getItem('TokenId');

    this.profileForm = this.SignupFrom.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      number: ["", [Validators.required]],
      password: ["", [Validators.required]],
      fileSource: ["", [Validators.required]],
      hidenid: ["", [Validators.required]],    
      
    });
  }
  FormSubmit() {

    if (this.profileForm.valid) {
      this.profileservice.updatebyId(this.profileForm.value).subscribe((res: any) => {console.log(res)
      console.log("profile updated succesfully");
      });
      }
      else {
        console.log(`form invalid`);
      }
  }
fetchdata(){
  this.decoded = jwt_decode( this.UserId);
  console.log(this.decoded);
  
  console.log("this is new decoded jwt code",this.decoded);
  this.fdata=this.decoded.user_id;
  this.profileservice.getUserApi().subscribe((res) => {
    this.Userdata=res.filter((res:any)=>res.user_id == `${this.fdata}`);
    console.log("here is user data of fetching",this.Userdata);
    this.profileForm.patchValue({
      name:this.Userdata[0].user_name,
      email:this.Userdata[0].user_mail,
      number:this.Userdata[0].user_number,
      password:this.Userdata[0].user_password,
      hidenid:this.Userdata[0].user_id
    });
    let imgd=this.Userdata[0].propic_url;
    if(imgd!=""&& imgd!='undefined'&& imgd!=null && imgd!=undefined  ){
      this.imageSrc =this.Userdata[0].propic_url;
    }else{
      this.imageSrc="assets/imagescopy/proimg.png";
    }
    
  });
}
  ngOnInit():void {

   this.fetchdata();   
  }
  onFileChange(event:any) {
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);    
      reader.onload = () => {   
        this.imageSrc = reader.result as string;
     console.log("hello");
     this.profileForm.controls["fileSource"].setValue( reader.result);
        // this.profileForm.patchValue({
        //   fileSource: reader.result
        // });
   
      };
   
    }
  }
}
