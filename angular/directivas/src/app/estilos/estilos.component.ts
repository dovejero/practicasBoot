import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {
  estilosP: any;
  cambioColor: string;
  cambioTexto: string;
  cambioColorFondo: string;
  constructor() { 
    this.estilosP= {
      color: 'red',
      fontSize: '32px',
      backgroundColor: '#C2F'
    }
  }
  cambiarColor(){
    this.estilosP.color = this.cambioColor;
  }
  cambiarColorFondo(){
    this.estilosP.backgroundColor = this.cambioColorFondo;
  }
  cambiarTexto(){
    this.estilosP.fontSize = this.cambioTexto;
  }
  ngOnInit() {
  }

}
