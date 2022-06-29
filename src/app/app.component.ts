import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'virtualVaidya';
   menuaccess:any;
  constructor() { 
  
  }

  isUserLoggedIn(){
    this.menuaccess = localStorage.getItem('TokenId');
    if(this.menuaccess == '' || this.menuaccess==null || this.menuaccess=='undefined')
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  
  ngOnInit(): void {


  
 
  }
}
