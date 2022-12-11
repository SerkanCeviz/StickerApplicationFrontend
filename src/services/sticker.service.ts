import { Injectable } from '@angular/core';
import {Sticker} from "../app/homepage/Sticker";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { tap, catchError} from "rxjs/operators";
import {AccountService} from "./account.service";

@Injectable()
export class StickerService {

  constructor(private http:HttpClient, private account:AccountService) { }
  path = "http://localhost:8080/stickers";

  getStickers():Observable<Sticker[]>{
    return this.http.get<Sticker[]>(this.path+"/home/"+this.account.userId)
      .pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError));
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
