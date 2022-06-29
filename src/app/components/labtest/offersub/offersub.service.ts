import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OffersubService {

constructor(private http:HttpClient) { }

getcheckupbyid(id:any){
  return this.http.get(`${environment.apiurl}LabTest/GetsingleCheckupbyid.php?id=${id}`,id);
 
}
}
