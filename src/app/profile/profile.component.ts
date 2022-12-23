import { Component, OnInit } from '@angular/core';
import {StickerPackage} from "../add-package/StickerPackage";
import {StickerPackageService} from "../../services/sticker-package.service";
import {Sticker} from "../homepage/Sticker";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StickerService} from "../../services/sticker.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [StickerPackageService]
})
export class ProfileComponent implements OnInit {

  constructor(private packageService:StickerPackageService,private modalService: NgbModal,
              private stickerService:StickerService) { }

  model:Sticker = new Sticker();

  packages:StickerPackage[];

  stickers:Sticker[];

  packageId:number;

  ngOnInit(): void {
    this.packageService.getStickers().subscribe(data=>{
      this.packages = data;
    });
  }


  // @ts-ignore
  open(content,packageId:number) {
    this.packageId=packageId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.stickerService.getPackageStickers(this.packageId).subscribe(data=>{
      this.stickers = data;
    });
  }

}
