import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EstilosComponent } from './estilos/estilos.component';
import { ClasesComponent } from './clases/clases.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { SwitchComponent } from './switch/switch.component';
import { SubrayadoDirective } from './subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent,
    ClasesComponent,
    SemaforoComponent,
    FormularioComponent,
    ListaComponent,
    SwitchComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
