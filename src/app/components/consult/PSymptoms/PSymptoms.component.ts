import { Component, OnInit } from '@angular/core';
import { MsymptomsService } from './msymptoms.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-PSymptoms',
  templateUrl: './PSymptoms.component.html',
  styleUrls: ['./PSymptoms.component.css']
})
export class PSymptomsComponent implements OnInit {
symptomslist:any;
DepId:any;
  constructor(private sos:MsymptomsService ,private router:Router) {
    this.DepId=localStorage.getItem('departmentId');
     this.getdepartments();
  }
  getdepartments(){
    this.sos.getdepartments().subscribe((res: any) => {
      this.symptomslist=res.filter((res:any)=>res.symptom_categoryid == `${this.DepId}`);;
      // console.log("this is data",this.symptomslist);
      
    return res;
    });
    }


    setsymptom(data :any){
      localStorage.removeItem("psymptoms")
      localStorage.setItem("psymptoms",data);
this.router.navigateByUrl("/consult");
    }
  
  
    ngOnInit() {
    }
}
