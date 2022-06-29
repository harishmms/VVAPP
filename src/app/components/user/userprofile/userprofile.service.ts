import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

constructor(private http:HttpClient) { }
getUserApi(): Observable<any[]> {
  return this.http.get<any[]>('https://virtualvaidya.com/WebApis/SignUp/getUserdata.php');
}
updatebyId(data: any) {
  return this.http.post(`https://virtualvaidya.com/WebApis/SignUp/UpdateUser.php`, data);
}
}
