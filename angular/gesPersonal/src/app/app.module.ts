import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LisEmpleadosComponent } from './lis-empleados/lis-empleados.component';
import { DetEmpleadosComponent } from './det-empleados/det-empleados.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LisEmpleadosComponent,
    DetEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
