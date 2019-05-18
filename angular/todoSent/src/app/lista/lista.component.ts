import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() listaElemento: string[];
  divPintado: string;
  elemento: string;
  constructor() { 
  }

  ngOnInit() {
  }

  pintarArray(){
    this.divPintado = '';
    for(this.elemento of this.listaElemento){
      this.divPintado += '<li>' + this.elemento + '</li>';
    }
    return '<ul>' + this.divPintado + '</ul>'
  }


}
