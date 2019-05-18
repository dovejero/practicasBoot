import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { postModel } from '../models/post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formPost: postModel;
  formPostTmp: postModel;
  formulario: FormGroup;
  control: boolean;
  constructor(private postService: PostService) {
    this.control = false;
    this.formPost = new postModel('', '', '', '', '', '');
    this.formPostTmp = new postModel('', '', '', '', '', '');
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
    })
  }

  // crearPost() {
  //   this.formPostTmp = new postModel(this.formPost.titulo, this.formPost.texto, this.formPost.autor, this.formPost.imagen, this.formPost.fecha, this.formPost.categoria);
  //   this.postService.agregarPost(this.formPostTmp);
  // }
  tratarSubmit() {
    console.log(this.formulario.valid);
    if (!this.formulario.valid) {
      this.control = true;
    } else {
      this.control = false;
    }
  }

  tratarDatos() {
    console.log(this.formulario);
    this.formPostTmp = new postModel(this.formulario.value.titulo, this.formulario.value.texto, this.formulario.value.autor, this.formulario.value.imagen, this.formulario.value.fecha, this.formulario.value.categoria);
    this.postService.agregarPost(this.formPostTmp);
  }
  ngOnInit() {
  }

}
