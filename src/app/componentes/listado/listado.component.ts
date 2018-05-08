import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public listadoParaCompartir: Array<any>;
  
  constructor(public servicioJuego:JuegoServiceService) { }
  

  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.servicioJuego.listar();
  }
}
