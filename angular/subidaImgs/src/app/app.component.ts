import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario: FormGroup;
  control: boolean;
  uploadPercent: Observable<number>
  imagenO: any;
  pintar: boolean;
  imgUrl: string;

  constructor(private storage: AngularFireStorage) {
    this.control = false;
    this.pintar = true
    this.imgUrl = '';
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellido: new FormControl('', [
        Validators.required
      ]),
      edad: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
      ]),
    }, [this.revImagen])
  }

  tratarSubmit() {
    // console.log('ENTRA ENTRA');
    // console.log(this.formulario.valid);
    if (!this.formulario.valid) {
      this.control = true;
    } else {
      this.control = false;
      // console.log(this.formulario);
      this.subirImagen()
    }
  }
  revImagen(formGroup: FormGroup) {
    console.log('REVIMG: ', formGroup)
    console.log('FORMU: ', formGroup.value.url)
    // return { error: 'error' }
    if (formGroup.value.imagen) {
      return null
    } else {
      return { url: 'Carga de la imagen obligatoria' }
    }
  }
  prueba2() {
    if (this.imagenO) {
      console.log(this.imagenO);
    } else {
      console.log('NO FUNCIONA');
    }
  }
  onChangeImg(e) {
    console.log(e)
    this.imagenO = e.target.files[0];
  }

  subirImagen() {
    console.log('FORMULARIO: ', this.formulario)
    const filePath = 'imagenes/' + this.imagenO.name;
    const fileRef = this.storage.ref(filePath);
    const tarea = this.storage.upload(filePath, this.imagenO);
    // tarea.percentageChanges().subscribe(percent => {
    //   console.log(percent)
    // })
    this.uploadPercent = tarea.percentageChanges();

    tarea.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log('URL: ', url);

          // Aquí guardaría en el array la url de la imagen para meterla en bbdd
          this.formulario.value.url = url;
          this.formulario['imagen'] = filePath;
          this.imgUrl = url;

          this.pintar = true;

          // console.log('FORMULARIO: ', this.formulario);
        })
      })
    ).subscribe()

    // tarea.snapshotChanges().pipe(
    //   finalize(async () => {
    //     let url = await fileRef.getDownloadURL().toPromise()
    //     console.log(url)
    //   })
    // )
  }
}
