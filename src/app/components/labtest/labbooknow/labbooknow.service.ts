import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LabbooknowService {

constructor(private http:HttpClient) { }
bookorder(data:any){
  return this.http.post(`${environment.apiurl}LabTest/HealthCheckupOrder.php`,data);
}
}
