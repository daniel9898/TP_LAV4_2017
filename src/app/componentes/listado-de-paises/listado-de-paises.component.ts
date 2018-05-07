import { Component, OnInit , Input} from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-listado-de-paises',
  templateUrl: './listado-de-paises.component.html',
  styleUrls: ['./listado-de-paises.component.css']
})
export class ListadoDePaisesComponent /*implements OnInit*/ {

  @Input() listadoDePaises: Array<any>;
  miServicioDePaises:PaisesService;

  constructor( servicioPaises:PaisesService) {
    this.miServicioDePaises=servicioPaises;
   }

  /*ngOnInit() {

    this.miServicioDePaises.listarTodos()
    .then(datos=>{
      console.info("listado de paises",datos);
      this.listadoDePaises=datos;
    });

  }*/

}
