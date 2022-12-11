import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountService} from "./account.service";
import {Observable} from "rxjs";
import {AlertifyService} from "./alertify.service";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http:HttpClient, private user:AccountService) { }

  path = "http://localhost:8080/friend/";

  addFriend(userId:number):Observable<any>{
    return this.http.post<any>(this.path+"addFriend/"+this.user.getUserId(),userId);
  }

  isFriend(userId:number):Observable<any>{
    return this.http.get<any>(this.path+"isFriend/"+this.user.getUserId()+"/"+userId);
  }
}
