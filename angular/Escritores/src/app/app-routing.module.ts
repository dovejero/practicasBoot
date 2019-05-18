import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { FichaEscritorComponent } from './ficha-escritor/ficha-escritor.component';
import { LibrosComponent } from './libros/libros.component';

const routes : Routes = [
  {path: 'lista', component: ListaEscritoresComponent},
  {path: 'escritor/:identificador', component: FichaEscritorComponent},
  {
    path: 'escritor/:identificador', 
    component: FichaEscritorComponent, 
    children: [
      {path: 'libros', component: LibrosComponent }
    ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
