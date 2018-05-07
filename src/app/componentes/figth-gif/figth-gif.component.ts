import { Component, OnInit } from '@angular/core';
import { JuegoFigthGif } from '../../clases/juego-figth-gif';
import {
  trigger,
  keyframes,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import * as kf from './keyframes';

@Component({
  selector: 'app-figth-gif',
  templateUrl: './figth-gif.component.html',
  styleUrls: ['./figth-gif.component.css'],
  //styleUrls: ['./testSass.component.sass'],
  animations: [
    trigger('cardAnimator', [
      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ]),

    trigger('popOverState',[
        state('show',style({
           opacity: 0.01,
           height: '600px',
           width: '300px'
        })),
        state('hide',style({
           opacity: 1,
           height : '300px',
           width: '600px'
        })),
        transition('show => hide', animate('600ms ease-out')),
        transition('hide => show', animate('1000ms ease-in')),
        transition('show <=> hide', [   animate(500, style({height: '10px'})), animate(500)   ])
    ]),
  ]
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

  private show : boolean; 
  private animationState : string;
  private colors = ['grey', 'green', 'blue', 'orange', 'yellow','#00FFFF','#DC143C','#00CED1'];
  private interval = null;
  
  
  constructor() { 

    this.show = false;
  }

  ngOnInit() {

    var div = document.querySelector('#faux-gif');
    this.helperFigthGif = new JuegoFigthGif(div, this.frames, 80);
    this.helperFigthGif.resume();

    div.addEventListener('click',this.capturarImagenActual.bind(this));

  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  
  capturarImagenActual (event){

    this.helperFigthGif.imagenActual = (<HTMLDivElement>event.target).style.cssText;
    this.show = this.helperFigthGif.verificar();

    if(this.show){

        this.randomColorBack();
        this.helperFigthGif.pause();
       
        setTimeout(() =>{ 
          this.show = false
          this.helperFigthGif.resume();
          clearInterval(this.interval);
          document.body.style.backgroundColor = "#212529";
        }, 2500);

    }else{

        document.body.style.backgroundColor = "red";
        setTimeout(() =>{ 
          document.body.style.backgroundColor = "#212529";
        }, 200);
    }
  }

  startAnimation(keyFrameName) {
    console.log(keyFrameName)
    if (!this.animationState) {
      this.animationState = keyFrameName;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  randomColorBack(){
   
    let currentColor = 0

    this.interval = setInterval(() => {
       currentColor  < this.colors.length - 1 ? currentColor++ : currentColor = 0;
       document.body.style.backgroundColor = this.colors[currentColor];
    },100);
  }

}
