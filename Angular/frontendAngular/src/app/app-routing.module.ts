import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';



const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "seguridad",
    loadChildren: ()=>import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "administracion",
    loadChildren: ()=>import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: "pedidos",
    loadChildren: ()=>import("./modulos/compra/compra.module").then(x => x.CompraModule)
  },
  {
    path: "**",  //sintaxis para los comodines en caso de que coloque mal la url
    component: ErrorComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
