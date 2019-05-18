import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { regLoginModel } from '../model/regLogin.model';
import { RegloginService } from '../reglogin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  datos: regLoginModel;
  control: boolean;
  repeticion: boolean;
  constructor(private regLoginService: RegloginService) {
    this.control = false;
    this.repeticion = false;
    this.datos = new regLoginModel('', '', '', '', '', '', '', '');
    this.formulario = new FormGroup({
      name: new FormControl('David', [
        Validators.required
      ]),
      surname: new FormControl('Ovejero', [
        Validators.required
      ]),
      username: new FormControl('dovejero', [
        Validators.required
      ]),
      password: new FormControl('davido1', [
        Validators.required,
        Validators.pattern(/^(?=.*\d).{4,8}$/)
      ]),
      password2: new FormControl('davido1', [
        Validators.required
      ]),
      mail: new FormControl('dovejerovargas@gmail.com', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      address: new FormControl('Getafe', [
        Validators.required
      ]),
      age: new FormControl('37', [
        Validators.required
      ])
    })

  }

  ngOnInit() {
  }

  tratarSubmit() {
    console.log('AAAA: ', this.formulario);
    if (!this.formulario.valid) {
      this.control = true;
    } else {
      this.control = false;
      this.envioDatos()
    }
  }

  envioDatos() {
    console.log('ENTRA: ', this.formulario.value)
    this.regLoginService.registrar(this.formulario.value).then((res) => {
      console.log('Ok: ', res)
    }).catch((error) => {
      console.log('Error: ', error)
    })
  }

}
