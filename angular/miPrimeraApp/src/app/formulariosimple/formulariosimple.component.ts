import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariosimple',
  templateUrl: './formulariosimple.component.html',
  styleUrls: ['./formulariosimple.component.css']
})
export class FormulariosimpleComponent implements OnInit {
  inputValue: string;

  constructor() {
    this.inputValue = 'Este es mi valor';
   }

  ngOnInit() {
  }

}
