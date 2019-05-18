import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { CartComponent } from './cart/cart.component';
import { PruebaComponent } from './prueba/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    CartComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
