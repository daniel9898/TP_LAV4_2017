import { Component, OnInit } from '@angular/core';
import { JuegoFigthGif } from '../../clases/juego-figth-gif';

@Component({
  selector: 'app-figth-gif',
  templateUrl: './figth-gif.component.html',
  styleUrls: ['./figth-gif.component.css']
})



export class FigthGifComponent implements OnInit {

  

  private helperFigthGif : JuegoFigthGif;
  private frames : any = [
    '../../../assets/imagenes/gokuVSfree/01.gif',
    '../../../assets/imagenes/gokuVSfree/02.gif',
    '../../../assets/imagenes/gokuVSfree/03.gif',
    '../../../assets/imagenes/gokuVSfree/04.gif',
    '../../../assets/imagenes/gokuVSfree/05.gif',
    '../../../assets/imagenes/gokuVSfree/06.gif',
    '../../../assets/imagenes/gokuVSfree/07.gif',
    '../../../assets/imagenes/gokuVSfree/08A.gif',
    '../../../assets/imagenes/gokuVSfree/09.gif',
    '../../../assets/imagenes/gokuVSfree/10.gif',
    '../../../assets/imagenes/gokuVSfree/11.gif',
    '../../../assets/imagenes/gokuVSfree/12.gif',
    '../../../assets/imagenes/gokuVSfree/13B.gif',
    '../../../assets/imagenes/gokuVSfree/14.gif',
    '../../../assets/imagenes/gokuVSfree/15.gif',
    '../../../assets/imagenes/gokuVSfree/16.gif',
    '../../../assets/imagenes/gokuVSfree/17.gif',
    '../../../assets/imagenes/gokuVSfree/18.gif',
    '../../../assets/imagenes/gokuVSfree/19C.gif',
    '../../../assets/imagenes/gokuVSfree/20.gif',
    '../../../assets/imagenes/gokuVSfree/21.gif'
  ];

  constructor() {
  
  }

  
  ngOnInit() {

    var div = document.querySelector('#faux-gif');
    this.helperFigthGif = new JuegoFigthGif(div, this.frames, 60);
    this.helperFigthGif.resume();

    div.addEventListener('click',this.capturarImagenActual.bind(this));
  
  }

  capturarImagenActual (event){
    this.helperFigthGif.imagenActual = (<HTMLDivElement>event.target).style.cssText;
    this.helperFigthGif.verificar();
  }

}
