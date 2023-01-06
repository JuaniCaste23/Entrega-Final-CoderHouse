import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulosx20]'
})
export class Titulosx20Directive {

  constructor(private element:ElementRef) {
    element.nativeElement.style.fontSize = '20px';
  }

}
