import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiAlumnosComponent } from './alumnos/api-alumnos/api-alumnos.component';
import { ApiNewAlumnoComponent } from './alumnos/api-new-alumno/api-new-alumno.component';
import { ApiEditAlumComponent } from './alumnos/api-edit-alum/api-edit-alum.component';

const routes: Routes = [
  { path: '', component: ApiAlumnosComponent },
  { path: 'newalumnos', component: ApiNewAlumnoComponent },
  { path: 'editalumnos', component: ApiEditAlumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
