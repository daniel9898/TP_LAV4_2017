import { Juego } from '../clases/juego';

export class JuegoFigthGif extends Juego {

    public currentFrame : number;
    public domElement : any;
    public frames : any;
    public speed : number;
    public interval : any;
    public isPause : Boolean;
    public imagenActual : string;

    constructor( element : any, frames : any, speed : number, nombre?: string, gano?: boolean, jugador?: string) {
        super('Figth Gif', gano, jugador);

		this.currentFrame = 0,
		this.domElement   = element,
		this.frames       = frames || null,
		this.speed        = speed  || 100;
		this.interval;
    this.isPause      = false;
    this.imagenActual = "";
		this.init();
    }
    
    init(){
        // set the first one to the first image
		console.log(this.frames[0])
		this.domElement.style.backgroundImage = "url(" + this.frames[0] + ")";
    }

    pause(){
        clearInterval(this.interval);
        this.isPause = true;
    }

    resume(){
        var that = this;

        that.interval = setInterval(function(){
            console.log(that.frames[that.currentFrame])
            console.log(that.frames.length);
            that.currentFrame < that.frames.length - 1 ? that.currentFrame++ : that.currentFrame = 0;
            that.domElement.style.backgroundImage = "url(" + that.frames[that.currentFrame] + ")";
        }, this.speed);
    }

    public verificar(){
    
        if(this.imagenActual.indexOf('A') != -1  || this.imagenActual.indexOf('B') != -1 || this.imagenActual.indexOf('C') != -1){
              //alert("UFF GOLPE DURO!!");
              return true;
        }else{

          if(this.isPause){
             this.resume();
             this.isPause = false;
          }
          else{
             this.pause();
             this.isPause = true;
          } 
        }
        return false;
    }
}
