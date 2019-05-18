import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  @Input() numero: number; 
  @Output() numeroChange= new EventEmitter();
  constructor() { 

  }
  incre(){
    this.numero ++;
    this.numeroChange.emit(this.numero);
  }
  decre(){
    this.numero --;
    this.numeroChange.emit(this.numero);
  }
  ngOnInit() {
  }

}
