import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutDoctorService {

constructor(private http :HttpClient) { }
getdoctors(doctorid:any){
  return this.http.get(`${environment.apiurl}OnlineConsultations/AboutDoc.php?id=${doctorid}`,doctorid);
 
}
}
