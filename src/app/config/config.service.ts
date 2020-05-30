// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

// @Injectable()
// export class ConfigService {

//   private requestURL = 'api/heroes';

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

//   constructor(private http: HttpClient) { }

// }

// import { Injectable } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class ConfigService implements OnInit {
//     totalAngularPackages;

//     constructor(private http: HttpClient) { }

//     ngOnInit() {      
//         // Simple GET request with response type <any>
//         this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
//             this.totalAngularPackages = data.total;
//             console.log(this.totalAngularPackages);
//         })
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// export interface Config {
//   heroesUrl: string;
//   textfile: string;
// }

@Injectable()
export class ConfigService {
  configUrl = 'https://www.googleapis.com/books/v1/volumes?q=harry-potter&key=AIzaSyCs7oC6ExcLDKihpSSaFFipUJ4WQ4Jl-80';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<any>(this.configUrl)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  getConfig_3() {
    return this.http.get<any>(this.configUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getConfigResponse(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.configUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}