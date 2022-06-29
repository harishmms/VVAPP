import { Component, OnInit } from '@angular/core';
import { ConsultnowService } from './consultnow.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consult-now',
  templateUrl: './consult-now.component.html',
  styleUrls: ['./consult-now.component.css']
})
export class ConsultNowComponent implements OnInit {
 departmentlist:any;
 departmentId:any;
  constructor(private consultnow:ConsultnowService ,private router:Router, private routers:ActivatedRoute) { }
  getdid(event:any){
this.departmentId=event;
// console.log("this is dip id:",this.departmentId);
localStorage.removeItem('departmentId');
localStorage.setItem('departmentId',this.departmentId);
this.router.navigateByUrl('/psymptoms');
// this.router.navigateByUrl('/consult');

  }
  ngOnInit(): void {
   this.getdepartments();
  }
getdepartments(){
this.consultnow.getdepartments().subscribe((res: any) => {
  this.departmentlist=res;
  // console.log("this is data",this.departmentlist);
  
return res;
});

}



}
