import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

constructor(private http:HttpClient) { }
getUserApi(): Observable<any[]> {
  return this.http.get<any[]>(`${environment.apiurl}SignUp/getUserdata.php`);
}
getbanner(): Observable<any[]>{
  return this.http.get<any[]>(`${environment.apiurl}Home/getBanners.php`);
}
}
