import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

constructor(private http:HttpClient) { }
getUserApi(): Observable<any[]> {
  return this.http.get<any[]>(`${environment.apiurl}SignUp/getUserdata.php`);
}
updatebyId(data: any) {
  return this.http.post(`${environment.apiurl}SignUp/UpdateUser.php`, data);
}
}
