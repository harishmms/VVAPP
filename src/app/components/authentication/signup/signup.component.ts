import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { SignupService } from './Signup.service';
import { OtpService } from '../otp/Otp.service';
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profileForm: FormGroup;
  pmobile:any;
 
  // profileForm = new FormGroup({
  //   FirstName: new FormControl('',[Validators.required]),
  //   LastName: new FormControl('',[Validators.required]),
  //   mobile: new FormControl('',[Validators.required,Validators.minLength(10)]),
  //   mail: new FormControl('',[Validators.required ,Validators.email]),
  //   date: new FormControl('',[Validators.required]),
  // });

  constructor(private router:Router,private SignupFrom: FormBuilder,private SignupService:SignupService,private OtpService:OtpService) {
 
    this.profileForm=this.SignupFrom.group({
    FirstName: ['',[Validators.required]],
      LastName: ['',[Validators.required]],
      mobile: ['',[Validators.required,Validators.minLength(10)]],
      mail: ['',[Validators.required ,Validators.email]],
      date: ['',[Validators.required]],
      Password: ['',[Validators.required]],
   })

this.pmobile=localStorage.getItem('MobileId',);

  }
  
  
  get validate() {
    return this.profileForm.controls;
  }

  FormSubmit() {
   if(this.profileForm.valid)
   {
     this.SignupService.signupApi(this.profileForm.value).subscribe((res:any)=>{
       console.log(res);
       this.router.navigateByUrl('/Home');
     });
   } 

    console.warn(this.profileForm.value);
    
  }
  val:any;

  ngOnInit(): void {
   this.val=this.OtpService.fun();
   console.log(this.pmobile);
   this.profileForm.patchValue({
    mobile:this.pmobile
  });
  }

}
