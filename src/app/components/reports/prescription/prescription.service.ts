import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

constructor(private http:HttpClient) { }
getprescriptions(id:any){
return this.http.get(`${environment.apiurl}OnlineConsultations/getPrescription.php?id=${id}`,id);
}

}
