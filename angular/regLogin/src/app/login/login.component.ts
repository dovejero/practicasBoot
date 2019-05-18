import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegloginService } from '../reglogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private regLoginService: RegloginService) {

  }

  ngOnInit() {
  }

  logarse(valor) {
    console.log(valor);
    this.regLoginService.validar(valor).then((valid) => {
      console.log('Ok:', valid)
      localStorage.setItem('token', valid['token'])
    }).catch((error) => {
      console.log('Error', error)
    })
  }
}
