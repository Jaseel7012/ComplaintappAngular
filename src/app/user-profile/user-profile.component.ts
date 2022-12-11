import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userId:any=""
  infodata:any=[]
  

  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userinfo")
    console.log(this.userId)
    let data:any={
      "id":this.userId
    }
    this.api.getInfo(data).subscribe(
      (resp:any)=>{
        this.infodata=resp;
        console.log(this.infodata[0].name)
      }
    )
  }
  



}
