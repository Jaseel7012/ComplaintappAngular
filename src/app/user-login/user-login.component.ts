import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
email=""
password=""
constructor(private api:ApiService,private r:Router){}
read=()=>{
  let data={
    "email":this.email,
    "password":this.password
  }
  this.api.userlogin(data).subscribe(
    (resp:any)=>{
      if(resp.status=="failed"){
        console.log("user does not exist")
      }
      else{
        let userId=resp.UserId;
        console.log(userId);
        localStorage.setItem("userinfo",userId)
        this.r.navigate(['/userprofile'])
        this.email=""
        this.password=""
      }

    }

  )

}
}
