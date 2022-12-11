import { Component, OnInit } from '@angular/core';
import {StickerPackage} from "./StickerPackage";
import {NgForm} from "@angular/forms";
import {AlertifyService} from "../../services/alertify.service";
import {StickerPackageService} from "../../services/sticker-package.service";

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  constructor(private alertify:AlertifyService, private packageService:StickerPackageService) { }

  model:StickerPackage= new StickerPackage();

  ngOnInit(): void {
  }

  addPackage(form:NgForm){
    this.packageService.addPackage(this.model).subscribe((res)=>{
      this.alertify.success("Paket Eklendi");
    });

  }

}
