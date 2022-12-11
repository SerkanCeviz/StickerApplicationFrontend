import { Component, OnInit } from '@angular/core';
import {StickerPackage} from "../add-package/StickerPackage";
import {StickerPackageService} from "../../services/sticker-package.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [StickerPackageService]
})
export class ProfileComponent implements OnInit {

  constructor(private packageService:StickerPackageService) { }


  packages:StickerPackage[];

  ngOnInit(): void {
    this.packageService.getStickers().subscribe(data=>{
      this.packages = data;
    });
  }

}
