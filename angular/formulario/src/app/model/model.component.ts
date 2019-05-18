import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/Operators'

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      edad: new FormControl('', [
        Validators.required,
        this.edadValidator
      ]),
      dni: new FormControl('', [
        Validators.required,
        this.validarDni
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d).{4,8}$/)
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d).{4,8}$/)
      ])
    }, [this.passwordRepeat])
  }
  tratarDatos() {
    console.log(this.formulario);
  }

  passwordRepeat(form: FormGroup) {
    let password = form.controls['password'].value
    let password2 = form.controls['password2'].value
    console.log(password, password2, form)
    if (password === password2) return null
    return { password2: 'Las claves deben ser iguales' }
  }

  edadValidator(control) {
    // Devuelve null si la validación es correcta
    // Devuelve un objeto con el error si la validación no es correcta
    console.log(control);
    if (control.value > 18) {
      return null
    } else {
      return { edad: 'La edad debe ser mayor que 18' }
    }
  }
  validarDni(value) {
    var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var str = value.value.toString().toUpperCase();

    if (!nifRexp.test(str) && !nieRexp.test(str)) return { dni: "El DNI no es válido" };

    var nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');

    var letter = str.substr(-1);
    var charIndex = parseInt(nie.substr(0, 8)) % 23;

    if (validChars.charAt(charIndex) === letter) return null;

    return { dni: "El DNI no es válido" };
  }

  ngOnInit() {
    this.formulario.controls['nombre'].valueChanges.pipe(debounceTime(400)).subscribe(value => {
      console.log(value);
    })
  }

}
