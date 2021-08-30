import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private serverUrl = environment.apiBack;

  constructor(private http: HttpClient) {
   }

   /**
    * endpoint back
    * http://localhost:3001/get_direccionuser/direccion
    * https://angular.io/guide/http
    */
   /*
   getAllDirecciones(limitOfResults=10) {     
     return this.http.get<any>(this.serverUrl + 'get_direccionuser/direccion', {
          params: {
            limit: limitOfResults.toString()
          }
     });
   }
   */

   httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'Token d0b5a'
    //'Authorization': `Token ${this.token}`        
    })
  } 

   getAllDirecciones(): Observable<any> {     
      return this.http.get<any>(this.serverUrl + 'get_direccionuser/direccion', this.httpOptions)           
    };
  

}
