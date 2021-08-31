import { Component, OnInit } from '@angular/core';

import { DireccionService } from 'src/app/service/direccion.service';

@Component({
  selector: 'app-listado-direcciones',
  templateUrl: './listado-direcciones.component.html',
  styleUrls: ['./listado-direcciones.component.css']
})
export class ListadoDireccionesComponent implements OnInit {

  direcciones: any[] = [];
  result: any;

  constructor(private listadoService: DireccionService) { }

  ngOnInit(): void {
        
    this.listadoService.getAllDirecciones().subscribe(res => {
        this.direcciones = res;
        console.log(this.direcciones);
      })
    
    this.listadoService.getAllDirecciones().subscribe(data=>{     
      this.result = data;      
      console.log(this.result);      
    })        
 
  }

}
