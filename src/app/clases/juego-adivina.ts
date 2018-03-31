import { Juego } from '../clases/juego';

export class JuegoAdivina extends  Juego {

    public numeroSecreto: Number = 0;
    public numeroIngresado: Number  = 0;
    
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Adivina el número', gano, jugador);
    }
    public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) { this.gano = true; }
        return (this.gano);
    }
    public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.log('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    public retornarAyuda() {
      return (this.numeroIngresado < this.numeroSecreto) ? 'Falta' : 'Te pasate';
    }
}
