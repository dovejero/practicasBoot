import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  cont: number;
  identificador: string;
  @Input() inicio: string;
  @Input('otroInput') pruebaInput: string;
  @Input("end") final: string;
  @Output() pruebaOutput = new EventEmitter()
  constructor() {

    this.identificador = 'verde';
    this.final = "10";
    
   }

  ngOnInit() {
    // this.contador();
    this.cont = parseInt(this.inicio);
  }
  contador(){
    let intervalo = setInterval(() =>{
      this.cont++;
      if (this.cont >= parseInt(this.final) ) {
        clearInterval(intervalo);
        this.identificador = 'rojo'
        this.pruebaOutput.emit('booom');
      }
    }, 1000)
  }
  reiniciar(event: string){
    console.log(event);
    if (this.cont >= parseInt(this.final)){
        this.cont = parseInt(this.inicio);
        this.identificador = 'verde';
        this.contador();
    }

  }
}
