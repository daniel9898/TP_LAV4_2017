import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';


@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent  {
  
  mostrarInforme : boolean ;
  palabraUser : string;
  helper : JuegoAnagrama;
  result :boolean;
  textoResultado : string;

  constructor() {
  	this.result = false;
  	this.mostrarInforme = false;
    this.helper = new JuegoAnagrama("Anagrama");
  }

  tomarPalabra(){
  	this.mostrarInforme = true;
  	this.helper.palabraUser = this.palabraUser;
  	this.result = (this.helper.verificar());
    this.helper.setResultado(this.result);
      
  	this.textoResultado = this.result ? "Eres el mejor !!" : " Ups sigue intentado !";
  	setTimeout(() =>{ this.mostrarInforme = false }, 3000);
  	//console.log(localStorage.getItem('usr'));
  	
  }

   


}
