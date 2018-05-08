export abstract class Juego {

  public nombre = 'Juego Sin Nombre';
  public jugador: string;
  public gano = false;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    this.nombre = (nombre) ? nombre : this.nombre;
    this.gano = (gano) ? gano : this.gano;
    this.jugador = (jugador) ? jugador : JSON.parse(localStorage.getItem('usr')).nombre;
  }

  public abstract verificar(): boolean;
 
  public retornarAyuda() {
    return 'NO hay Ayuda definida';
  }

  setListado(){
    
  }
}
