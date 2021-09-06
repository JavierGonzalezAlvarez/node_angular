import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { ResponseDirecionUser } from 'src/app/models/respuesta-direccionuser';

import { map } from 'rxjs/operators'
import { Usuario } from '../models/usuarios';

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
    
    getAllDirecciones1() {         
      return this.http.get(this.serverUrl + 'get_direccionuser/direccion', this.httpOptions)           
    };
    
    getAllDirecciones2(): Observable<any> {     
      return this.http.get<any>(this.serverUrl + 'get_direccionuser/direccion', this.httpOptions)                 
    };

    getAllDirecciones3(): Observable<any> {     
      return this.http.get<ResponseDirecionUser>(this.serverUrl + 'get_direccionuser/direccion', this.httpOptions)
        .pipe(
          //cogemos la respuesta y la transformamos en lo que se necesita
            map(res => {
                //devolvemos uns instancia de usuarioJson()
                return  res.docs.map(user => Usuario.usuarioJson(user))
            })
        )               
    };
    

}
