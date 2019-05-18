import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  mensaje: string;
  otro: string;

  constructor() { 
    this.mensaje = 'Este es mi mensaje';
  }

  ngOnInit() {
    setTimeout(()=> {
      this.mensaje = 'Han pasado 5 segundos';
      this.otro = this.otroMensaje() + ' tras 5 segundos';
    }, 5000)
  }
  otroMensaje(): string{
    return 'Este es otro mensaje';
  }
}
