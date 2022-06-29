import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MsymptomsService {

constructor(private http :HttpClient) { }
getdepartments(){
  return this.http.get(`${environment.apiurl}OnlineConsultations/getSymptoms.php`);
}


}
