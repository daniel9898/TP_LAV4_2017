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
    		this.domElement.style.backgroundImage = "url(" + this.frames[0] + ")";
    }

    pause(){
        clearInterval(this.interval);
        this.isPause = true;
    }

    resume(){
       
        this.isPause = false;

        this.interval = setInterval(() => {
            this.currentFrame < this.frames.length - 1 ? this.currentFrame++ : this.currentFrame = 0;
            this.imagenActual = this.frames[this.currentFrame];
            //document.body.style.backgroundColor  = (this.verificar()) ? "#006400" : "#212529";
            this.domElement.style.backgroundImage = "url(" + this.frames[this.currentFrame] + ")";
    
        }, this.speed);
    }

  

    public verificar(){
      
        return (this.imagenActual.indexOf('A') != -1  || this.imagenActual.indexOf('B')
                 != -1 || this.imagenActual.indexOf('C') != -1);
    }
}
