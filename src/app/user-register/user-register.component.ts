import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name=""
  email=""
  password=""
  pno=""
  constructor(private api:ApiService){}
  read=()=>{
    let data:any={
      "name":this.name,
      "email":this.email,
      "password":this.password,
      "pno":this.pno
    }
    this.api.regeisterdata(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }


}
