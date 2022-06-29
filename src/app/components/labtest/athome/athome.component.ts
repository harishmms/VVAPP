import { Component, OnInit } from '@angular/core';
import { AthomeService } from './athome.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-athome',
  templateUrl: './athome.component.html',
  styleUrls: ['./athome.component.css']
})
export class AthomeComponent implements OnInit {
  Healtpacks:any;
  constructor(private athome :AthomeService , private router:Router) { }

  ngOnInit(): void {

    this.getHealtpacks();
  }
  getHealtpacks(){

    this.athome.getHealtpacks().subscribe((res: any) => {
      this.Healtpacks=res;
      console.log(this.Healtpacks);
      
      return this.Healtpacks;
    });
  }


  healthpackbyid(id:any){
localStorage.removeItem('HealthCheckupId');
localStorage.setItem('HealthCheckupId',id);
this.router.navigateByUrl('/sublab');

  }
}
