import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { DireccionComponent } from './direccion/direccion/direccion.component';
import { ListadoDireccionesComponent } from './listados/listado-direcciones/listado-direcciones.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'direcciones', component: DireccionComponent},
  {path: 'listadodirecciones', component: ListadoDireccionesComponent},  
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
