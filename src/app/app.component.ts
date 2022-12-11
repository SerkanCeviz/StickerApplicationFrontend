import { Component } from '@angular/core';
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StickerFE';
  constructor(private accountService:AccountService) {
  }

  getUserId(){
    return this.accountService.userId;
  }
}
