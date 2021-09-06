import { Component, OnInit } from '@angular/core';

import { DireccionService } from 'src/app/service/direccion.service';

import { ResponseDirecionUser } from 'src/app/models/respuesta-direccionuser';
import { Usuario } from 'src/app/models/usuarios';

@Component({
  selector: 'app-listado-direcciones',
  templateUrl: './listado-direcciones.component.html',
  styleUrls: ['./listado-direcciones.component.css']
})
export class ListadoDireccionesComponent implements OnInit {

  public result1: any = [];
  public result2: any = [];
  public result3: any = [];
  public result4: any = [];
  public result5: any = [];
  public result6: any = [];
  public data: any = [];

  constructor(private listadoService: DireccionService) { }

  ngOnInit(): void {
        
    this.listadoService.getAllDirecciones1().subscribe(res => {        
        this.data = res;
        console.log("salida1 => ", this.data);                
      })   

    this.listadoService.getAllDirecciones1().subscribe((resp: any)=>{     
      this.result1 = resp.docs;  // => ok      
      console.log("salida2 => ", this.result1[0].direccion); // => ok
      console.log("salida3 => ", this.result1);  // => objeto   ok  
    })        
   
    this.listadoService.getAllDirecciones2().subscribe((respuesta: ResponseDirecionUser)=>{           
      //docs es el dato que llega de interface
      this.result2 = respuesta.docs;
      //this.result2 = ""; => dato vacio. ok
      this.result3 = respuesta.docs;
      this.result4 = this.result2[0].direccion;
      console.log("salida4 => ", this.result4); // => ok
      console.log("salida5 => ", this.result3); // => ok     
      console.log("salida6 => ", this.result2); // => ok     
    })        
     
    this.listadoService.getAllDirecciones3().subscribe(
      usuarios =>{            
        //docs es el dato que llega de interface
        this.result5 = usuarios;
        this.result6 = usuarios[0].direccionCP;
        console.log("salida7 => ", this.result5); // => ok     
    })        
    

  }

}
