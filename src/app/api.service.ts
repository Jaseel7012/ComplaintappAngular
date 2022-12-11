import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  regeisterdata=(data:any)=>{
    return this.http.post("http://localhost:8080/reg",data)

  }
  userlogin=(data:any)=>{
    return this.http.post("http://localhost:8080/userlog",data)
  }
  getInfo=(data:any)=>{
    return this.http.post("http://localhost:8080/userbyid",data)
  }

}
