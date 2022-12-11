import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
const myroute:Routes=[
  {
    path:'reg',
    component:UserRegisterComponent
  },{
    path:'user',
    component:UserLoginComponent
  },{
    path:'admin',
    component:AdminLoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
