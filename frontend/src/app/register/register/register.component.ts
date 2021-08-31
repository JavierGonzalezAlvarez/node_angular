import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SeguridadService } from 'src/app/service/seguridad.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  //crear formulario
  registrationForm: FormGroup;
    
  private emailPattern = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';  
  result: any;  
  private readonly llaveToken = 'token';

  constructor(private fb: FormBuilder, private seguridad: SeguridadService) { 
    this.registrationForm = fb.group({
      name: [''],
      apellido: [''],
      //email: ['', [Validators.required], Validators.pattern(this.emailPattern)],
      //password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.pattern(this.emailPattern)],
      password: ['', Validators.minLength(3)],
    })
  }

  ngOnInit(): void {
  }

  /*
  datos = {        
    "name": "jesus",
    "apellido": "perez",
    "email": "jesus@gmail.com",
    "password": "12345"    
  }
  */

  registerUser() {
    if (this.registrationForm.invalid) {          
      return console.log("Datos del formulario de Angular erroneos");
    }else{
      //envio de datos del formulario => this.registrationForm.value
      this.seguridad.postRegister(this.registrationForm.value).subscribe(data=>{      
         this.result = data;                      
         console.log("respuesta:", this.result)  
         //comprobar el token
         console.log("token:", this.result['token'])  
         //guardar token en localstorage
         let valueToken = this.result['token']         
         localStorage.setItem('currentUser', JSON.stringify(valueToken));
      })
      //localstorage, acceder al valor de campo de un formulario
      console.log(this.registrationForm.controls['name'].value);
      //this.registrationForm.reset
    }
  }

  get formControls() {
    return this.registrationForm.controls;
  }

}
