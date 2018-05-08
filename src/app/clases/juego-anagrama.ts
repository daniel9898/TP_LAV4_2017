import { Juego } from '../clases/juego';

export class JuegoAnagrama extends Juego {

   public palabras = [];
   public palabraUser : string ;

   constructor(nombre?: string, gano?: boolean, jugador?: string){
   	 super(nombre,gano,jugador);
	   this.palabras = ['alejandro','relajando' ,'al no dejar' ,'dar lejano' ,'deja al ron' ,'dejar lona',
                        'el andrajo' ,'la joderan' ,'lo dejarán' ,'nada reloj' ,'anda reloj'];
   }

   verificar() : boolean{
    return this.palabras.includes(this.palabraUser);
   }

   setResultado(result : boolean){
     this.gano = result;
   }
}
