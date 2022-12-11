import { Component, OnInit } from '@angular/core';
import {Users} from "../login/Users";
import {UsersService} from "../../services/users.service";
import {FriendService} from "../../services/friend.service";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  constructor(private userService:UsersService, private friendService:FriendService, private alertify:AlertifyService) { }

  users:Users;
  isfriend:boolean;

  ngOnInit(): void {
  }

  findFriend(name:String){
    this.userService.findByNickname(name).subscribe(data =>{
      this.users = data;
    });
    this.isFriend(this.users.id);
  }

  isFriend(userId:number){
    this.friendService.isFriend(userId).subscribe((res: boolean)=>{
      this.isfriend=res;
    })
  }

  addFriend(){
    console.log(this.users.id)
    this.friendService.addFriend(this.users.id).subscribe((res)=>{
      this.alertify.success("Arkadaş Olarak Eklendi");
    })
  }
}
