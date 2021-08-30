import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { ListadoDireccionesComponent } from './listados/listado-direcciones/listado-direcciones.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'listadodirecciones', component: ListadoDireccionesComponent},  
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
