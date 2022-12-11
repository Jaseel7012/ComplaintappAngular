import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
uname=""
password=""
constructor(private r:Router){}
read=()=>{

  
    if((this.uname=="admin")&& (this.password=="1234")){
      this.r.navigate(['/dashboard'])
  
    }
    else{
      alert("invalid")
      this.uname=""
      this.password=""
    }
  }
}



