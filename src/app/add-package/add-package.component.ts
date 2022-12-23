import { Component, OnInit } from '@angular/core';
import {StickerPackage} from "./StickerPackage";
import {NgForm} from "@angular/forms";
import {AlertifyService} from "../../services/alertify.service";
import {StickerPackageService} from "../../services/sticker-package.service";
import {Sticker} from "../homepage/Sticker";
import {StickerService} from "../../services/sticker.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  constructor(private alertify:AlertifyService, private packageService:StickerPackageService,
              private stickerService:StickerService,
              private modalService: NgbModal) { }

  model:StickerPackage= new StickerPackage();

  model2:Sticker = new Sticker();

  packages:StickerPackage[];

  packageId:number;

  ngOnInit(): void {
  }

  addPackage(form:NgForm){
    this.packageService.addPackage(this.model).subscribe((res)=>{
      this.alertify.success("Paket Eklendi");
    });

  }

  addSticker(form:NgForm){
    console.log(this.model2.stickerName);
    this.stickerService.addSticker(this.model2,this.packageId).subscribe((res)=>{
      this.alertify.success("Paket Eklendi");
    });
  }

  // @ts-ignore
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.packageService.getStickers().subscribe(data=>{
      this.packages = data;
    });
  }
  choosePackage(packageId:number){
    console.log(packageId);
    this.packageId=packageId;
  }

}
