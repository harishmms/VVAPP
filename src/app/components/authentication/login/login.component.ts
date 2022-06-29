import { Component, OnInit } from "@angular/core";
import { LoginService } from "./Login.service";
import { FormGroup, Validators,FormBuilder,} from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  mnumber:any;
  alredyExist=false;
resdata:any={};
  constructor(private SignupFrom: FormBuilder, private login: LoginService,private route:ActivatedRoute,private router:Router) {
    this.profileForm = this.SignupFrom.group({
      mobile: ["", [Validators.required, Validators.minLength(10)]],
      otp:[""],
    });
  }
  get validate() {
    return this.profileForm.controls;
  }

  FormSubmit() {
    const num =this.profileForm.value;
    this.mnumber=Number( this.profileForm.controls['mobile'].value);
    console.log("number is ",this.mnumber);
    
    this.login.OtpApi(num).subscribe((res: any) => {
      this.resdata.status=res.status;
      this.resdata.massage=res.message;
      console.log(res.status);
      let status="n";
     status=  this.resdata.status;
    
      if(status =="OK"){
        localStorage.removeItem('MobileId');
        localStorage.setItem('MobileId',this.mnumber);
        this.login.getotpcom();
      //  console.log(res);
      }else{
        this.alredyExist=true;
      }

       });
  }
  otpsend() {}
  ngOnInit(): void {}
}
//;
