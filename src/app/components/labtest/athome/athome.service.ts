import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AthomeService {

constructor(private http:HttpClient) { }
getHealtpacks(){
  return this.http.get(`${environment.apiurl}LabTest/getHealtpacks.php`);
}
}
