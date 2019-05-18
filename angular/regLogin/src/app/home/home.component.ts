import { Component, OnInit } from '@angular/core';
import { regLoginModel } from '../model/regLogin.model';
import { RegloginService } from '../reglogin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private regLoginService: RegloginService) { }

  ngOnInit() {
  }
  premio() {
    this.regLoginService.premiar().then((valid) => {
      console.log('Ok:', valid)
    }).catch((error) => {
      console.log('Error', error)
    })
  }
}
