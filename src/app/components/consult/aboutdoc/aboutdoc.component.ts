import { Component, OnInit } from '@angular/core';
import { AboutDoctorService } from './AboutDoctor.service';
@Component({
  selector: 'app-aboutdoc',
  templateUrl: './aboutdoc.component.html',
  styleUrls: ['./aboutdoc.component.css']
})
export class AboutdocComponent implements OnInit {
  doctorlist:any;
  doctorid=localStorage.getItem("Doctor_Id");
  constructor(private AboutDoctor:AboutDoctorService) { }

  ngOnInit(): void {
   this.getdoctors();
  }
  getdoctors(){
    this.AboutDoctor.getdoctors(this.doctorid).subscribe((res: any) => {
      this.doctorlist=res;
    
      return res;
      });
    
    }
}
