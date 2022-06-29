import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators,FormBuilder,} from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { LoginemailService } from './loginemail.service';
@Component({
  selector: 'app-LoginByPassword',
  templateUrl: './LoginByPassword.component.html',
  styleUrls: ['./LoginByPassword.component.css']
})
export class LoginByPasswordComponent implements OnInit {
  profileForm: FormGroup;
  TokenId:any;
  alredyExist=false;
  constructor(private SignupFrom: FormBuilder,private loginservice:LoginemailService,private router:Router) {  
    this.profileForm = this.SignupFrom.group({
    Email: ["", [Validators.required]],
    Password: ["", [Validators.required]],
    
  });}

  get validate() {
    return this.profileForm.controls;
  }
  FormSubmit() {
    if (this.profileForm.valid) {
      this.loginservice.PostloginApi(this.profileForm.value).subscribe((res: any) => {
        console.log(res)
      console.log(this.profileForm.value);
      localStorage.removeItem('TokenId');
      localStorage.setItem('TokenId',res.JwtToken);
      this.TokenId= localStorage.getItem('TokenId');

        if(this.TokenId!=null && this.TokenId!="undefined"){
                  
           this.router.navigateByUrl('/Home');
        }
        
        else{
          localStorage.removeItem('TokenId');
          this.alredyExist=true;
        }
      });
      }
      
      else {
        console.log(this.profileForm.value)
      }
  }

  ngOnInit() {

  }

}
