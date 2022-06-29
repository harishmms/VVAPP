import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BokkingService {

constructor(private http :HttpClient) { }
getdoctors(doctorid:any){
  return this.http.get(`${environment.apiurl}OnlineConsultations/AboutDoc.php?id=${doctorid}`,doctorid);
}
getuser(id:any){
  return this.http.get(`${environment.apiurl}OnlineConsultations/getuser.php?id=${id}`,id);
}
bookappointment(data:any){
  return this.http.post(`${environment.apiurl}OnlineConsultations/bookappointment.php`,data);
}
getcouponcode(){
  return this.http.get(`${environment.apiurl}OnlineConsultations/getCoupon.php`);
}
}
