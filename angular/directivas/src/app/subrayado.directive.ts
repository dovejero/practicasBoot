import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {
  colores: string[];
  constructor(element: ElementRef) { 
    this.colores = ['red', 'blue', 'green' ];
    console.log('Ejecuta directiva de appSubrayado: ', element);
    // element.nativeElement.innerText = 'Div en Rojo CAMBIADO';
    element.nativeElement.style.textDecoration = 'underline';
    element.nativeElement.style.color = this.colorAleatorio();
  }
  colorAleatorio(){
    return this.colores[Math.floor(Math.random() * this.colores.length)]
  }
}
