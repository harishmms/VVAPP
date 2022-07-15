import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MydoctorsService {

constructor(private htpp:HttpClient) { }

getmydoctors(userId:any){
  return this.htpp.get(`${environment.apiurl}Home/mydoctors.php?userid=${userId}`)
}
}
