import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  moneda: number;
  fecha: any;
  fechaM: any;
  numero: number;
  randomNum: number;
  constructor() {
    this.moneda = 3455.667;
    // this.fecha = new Date();
    this.fechaM = moment();
    this.numero = 345.345678;
    this.randomNum = Math.random()
  }
  ngOnInit() {
    this.fecha = this.actualizarFecha()
  }

  actualizarFecha() {
    setInterval(() => {
      this.fecha = new Date();
      // console.log('AAAA', fechaRet)
    }, 1000)
  }
}
