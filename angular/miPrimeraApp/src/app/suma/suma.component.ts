import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
  num11: string;
  num22: string;
  total3: number;
  @Input() num1: string;
  @Input() num2: string;
  @Output() total2 = new EventEmitter()
  total: number;
  constructor() { 

  }
  resultadoSuma(){
    this.total = parseInt(this.num1) + parseInt(this.num2);
    this.total2.emit(this.total);
  }
  resultadoSuma2(){
    this.total3 = parseInt(this.num11) + parseInt(this.num22);
    this.total2.emit(this.total3);
  }

  ngOnInit() {
  }

}
