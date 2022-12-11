import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {StickerPackage} from "../app/add-package/StickerPackage";
import {AccountService} from "./account.service";

@Injectable({
  providedIn: 'root'
})
export class StickerPackageService {

  constructor(private http:HttpClient, private user:AccountService) { }
  path = "http://localhost:8080/stickerPackages/";
  packages:StickerPackage[];



  getStickers():Observable<StickerPackage[]>{
     return this.http.get<StickerPackage[]>(this.path+this.user.getUserId());
  }
//Bu KISIMDA HATA VAR İSTEK GİTMİYOR.
  addPackage(stickerPackage:StickerPackage){
    return this.http.post(this.path+"addPackage/"+this.user.userId, stickerPackage);
  }

  private handleError(err : HttpErrorResponse) {
    let errorMessage= '';
    if(err.error instanceof ErrorEvent){
      errorMessage = 'Bir Hata Oluştu'+err.error.message;
    }else{
      errorMessage= 'Sistemsel Bir Hata Oluştu';
    }
    return throwError(errorMessage);
  }
}
