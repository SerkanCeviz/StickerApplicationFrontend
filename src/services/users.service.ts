import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable } from "rxjs";
import {Users} from "../app/login/Users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private Http:HttpClient) { }
  path = "http://localhost:8080/users";

  login(nickname:String, password:String):Observable<Users>{
    return this.Http.get<Users>(this.path+"/findByNickname/"+nickname+"/"+password);
  }

  findByNickname(nickname:String):Observable<Users>{
    return this.Http.get<Users>(this.path+"/findFriend/"+nickname);
  }
}
