import { Injectable } from '@angular/core';
import {Users} from "../app/login/Users";
import {AlertifyService} from "./alertify.service";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private alertify:AlertifyService,private usersService:UsersService) { }

  userId:number;

  loginUser : Users;


  async  login(user:Users){
     this.usersService.login(user.nickName, user.password).subscribe(user =>{
      this.loginUser= user;
    });
    if (this.loginUser){
          this.alertify.success("Giriş Yapılıyor");
          this.userId = this.loginUser.id;
          console.log(this.userId);
        }
      else{
        this.alertify.error("Kullanıcı Adı veya Şifre Yanlış");

      }
  }

  getUserId(){
    return this.userId;
  }

}
