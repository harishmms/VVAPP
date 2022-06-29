import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sir-templet',
  templateUrl: './sir-templet.component.html',
  styleUrls: ['./sir-templet.component.css']
})
export class SirTempletComponent implements OnInit {
change=0;
imageSrc:any;
   myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor(private http: HttpClient) { }


 
  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     console.log("hello");
     
        this.myForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }
  ngOnInit() {
  }



//   fasak(amount:any, totalamount:any){
// console.log(amount,totalamount);

// this.change=Number( totalamount-amount);
//   }
}
