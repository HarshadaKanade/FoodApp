import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  user = JSON.parse(localStorage.getItem("user")!);
  isLoggedInManager(){
    if(this.user!=null && this.user.role === "Manager"){
      return true;
    }else {
      return false
    }
  }
  isLoggedInStaff(){
    if(this.user!=null && this.user.role === "Staff"){
      return true;
    }else {
      return false
    }
  }
  isLoggedInUser(){
    if(this.user!=null && this.user.role === "User"){
      return true;
    }else {
      return false
    }
  }

}