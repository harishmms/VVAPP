import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConsultdoctorService implements OnInit {

constructor(private http :HttpClient) {
 
 }
  ngOnInit(): void {
    // this.getdoctors();
  }
getdoctors(){
  return this.http.get(`${environment.apiurl}OnlineConsultations/getdoctors.php`);
}
}
