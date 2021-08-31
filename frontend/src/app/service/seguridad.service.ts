import { Injectable } from '@angular/core';

import { Usuario, respuestaAutenticacion } from '../register/seguridad';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  
  constructor(private http: HttpClient) { 
    //this.postRegister({
//      this.name = 
  //  })

  }

  private serverUrl = environment.apiBack;
  private readonly llaveToken = 'token'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
    
  //https://angular.io/guide/http
  
  postRegister(formData: any): Observable<{ message: string }> {     
    const { name, apellido, email, password } = formData;
    console.log("datos a enviar al back => ", formData);
    return this.http.post<{ message: string }>(this.serverUrl + 'register/user',
      {
        name,
        apellido,
        email,
        password
      }, 
      this.httpOptions)          
  };
    


}
