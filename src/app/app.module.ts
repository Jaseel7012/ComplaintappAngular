import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const myroute:Routes=[
  {
    path:'reg',
    component:UserRegisterComponent
  },{
    path:'user',
    component:UserLoginComponent
  },{
    path:'',
    component:AdminLoginComponent
  },{
    path:'userprofile',
    component:UserProfileComponent
  },{
    path:'dashboard',
    component:DashboardComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AdminLoginComponent,
    NavbarUserComponent,
    AdminNavbarComponent,
    UserProfileComponent,
    DashboardComponent
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
