import { Component, OnInit } from '@angular/core';
import {StickerService} from "../../services/sticker.service";
import {Sticker} from "./Sticker";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {StickerPackageService} from "../../services/sticker-package.service";
import {StickerPackage} from "../add-package/StickerPackage";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[StickerService]
})
export class HomepageComponent implements OnInit {

  constructor(private stickerService:StickerService,private modalService: NgbModal
              ,private packageService:StickerPackageService,
              private alertify:AlertifyService) { }

  stickers: Sticker[];
  packages:StickerPackage[];
  stickerId:number;
  packageId:number;


  ngOnInit(){
    this.stickerService.getStickers().subscribe(data=>{
      this.stickers=data;
    });
  }

// @ts-ignore
  open(content,stickerId:number) {
    this.stickerId=stickerId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.packageService.getStickers().subscribe(data=>{
      this.packages = data;
    });
  }

  saveToPackage(packageId:number){
    console.log(packageId);
    this.packageId=packageId;
  }

  addStickerToPackage(){
    console.log("Çalıştım Bilader");
    this.stickerService.addStickerToPackage(this.stickerId, this.packageId).subscribe((res)=>{
      this.alertify.success("Sticker Pakete Eklendi");
    });
  }

}
