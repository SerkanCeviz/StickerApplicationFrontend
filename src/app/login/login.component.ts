import { Component, OnInit } from '@angular/core';
import {AlertifyService} from "../../services/alertify.service";
import {NgForm} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Users} from "./Users";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:Users = new Users();
  constructor(private alertifyService:AlertifyService,
              private accountService:AccountService) { }

  login(form:NgForm){
    this.accountService.login(this
      .model);
  }

  ngOnInit(): void {
  }

}
