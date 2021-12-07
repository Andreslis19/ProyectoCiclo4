import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificarComponent } from './identificar/identificar.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';


const routes: Routes = [
  {
    path: "identificar",
    component : IdentificarComponent
  },

  {
    path: "cerrar-sesion",
    component : CerrarSesionComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
