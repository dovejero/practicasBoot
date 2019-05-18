import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  constructor(private activatedRoot: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.activatedRoot.params.subscribe((params)=> {
      console.log(params);
    });
  }

}
