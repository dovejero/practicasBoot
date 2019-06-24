import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiAlumnosComponent } from './alumnos/api-alumnos/api-alumnos.component';
import { ApiNewAlumnoComponent } from './alumnos/api-new-alumno/api-new-alumno.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiEditAlumComponent } from './alumnos/api-edit-alum/api-edit-alum.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiAlumnosComponent,
    ApiNewAlumnoComponent,
    ApiEditAlumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
