import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDireccionesComponent } from './listados/listado-direcciones/listado-direcciones.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BodyComponent } from './body/body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { DireccionComponent } from './direccion/direccion/direccion.component';

//import {Component} from '@angular/core';
//import {FormControl, Validators} from '@angular/forms';

//register y login
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    ListadoDireccionesComponent, 
    HeaderComponent, 
    FooterComponent, 
    BodyComponent, RegisterComponent, LoginComponent, DireccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //Component,
    //FormControl    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
