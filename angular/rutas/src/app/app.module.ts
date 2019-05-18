import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ErrorComponent } from './error/error.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { ProductoComponent } from './producto/producto.component';
import { ReviewComponent } from './review/review.component';
import { RelacionadosComponent } from './relacionados/relacionados.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SaludoComponent,
    ErrorComponent,
    ListaPersonasComponent,
    ProductoComponent,
    ReviewComponent,
    RelacionadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
