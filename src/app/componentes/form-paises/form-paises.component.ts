import { Component, OnInit } from '@angular/core';

import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-form-paises',
  templateUrl: './form-paises.component.html',
  styleUrls: ['./form-paises.component.sass']
})
export class FormPaisesComponent implements OnInit {

  public listado: Array<any>;
  private miServicioDePaises: PaisesService;

  constructor(servicioPaises:PaisesService) { 
    this.miServicioDePaises = servicioPaises; 
  }

  ngOnInit() {
  }

  traerTodos(){
    this.miServicioDePaises.listarTodos('all')
     .then(paises =>{
     	this.listado = paises;
     	console.log("paises : ",paises);
     })
     .catch(error => { console.log("error : ",error) });
  }

  traerSoloNombres(){
  	this.miServicioDePaises.listarTodos('name/arg')
     .then(paises =>{
     	this.listado = paises;
     	console.log("paises solo nombres : ",paises);
     })
     .catch(error => { console.log("error : ",error) });
  }

}
