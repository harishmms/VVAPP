import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimeslotService {

constructor(private http:HttpClient) { }
gettimeslots():Observable<any[]>{
  return this.http.get<any[]>(`${environment.apiurl}OnlineConsultations/gettimeslots.php`);
}
}
