import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginemailService {
constructor(private http:HttpClient) { }
PostloginApi(postdata: any) {
  return this.http.post(`${environment.apiurl}authentication/loginEmailPassword.php`,postdata);
}

}
