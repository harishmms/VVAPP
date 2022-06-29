
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';
export class SymptomsService {

constructor(private http:HttpClient) { }
getSymptoms(){
    return this.http.get(`${environment.apiurl}OnlineConsultations/getSymptoms.php`);
    // return"hello bhai";
  }
  
}
