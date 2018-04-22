import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTest]'
})

export class TestDirective {

  @Output() doubleTap = new EventEmitter();
  @Output() tripleTap = new EventEmitter();

  constructor() { }

  
  @HostListener('tap',  ['$event']) 
  onTap(e) {

    if (e.tapCount === 2) {
      console.log("se lanzo : ",2);
      this.doubleTap.emit(e)
    }

    if (e.tapCount === 3) {
      console.log("se lanzo : ",3); //esta deberia hacerla cuando hacierta
      this.tripleTap.emit(e)
    }
  }

}
