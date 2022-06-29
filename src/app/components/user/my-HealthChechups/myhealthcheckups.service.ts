import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyhealthcheckupsService {

constructor(private http:HttpClient) { }
getappointments(){
  return this.http.get(`${environment.apiurl}LabTest/getorders.php`);
}
}
