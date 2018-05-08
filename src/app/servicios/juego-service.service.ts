import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego';
import { JuegoAdivina } from '../clases/juego-adivina';

@Injectable()
export class JuegoServiceService {

  constructor() {}

  public listar(): Array<Juego> {

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Juego 1", false));
    miArray.push(new JuegoAdivina("Pepe", true));
    miArray.push(new JuegoAdivina("Juego 3", false));
    miArray.push(new JuegoAdivina("Juego 4", false));
    miArray.push(new JuegoAdivina("Juego 5", false));
    miArray.push(new JuegoAdivina("Juego 6", false));
    return miArray;
  }


}
