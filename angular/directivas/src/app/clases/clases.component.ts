import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  boolean1: boolean;
  boolean2: boolean;
  constructor() { 
  }
  ngOnInit() {
    this.boolean1 = true;
  }
  cambiarColor(){

    this.boolean1 = !this.boolean1;
    console.log(this.boolean1);
  }
}
