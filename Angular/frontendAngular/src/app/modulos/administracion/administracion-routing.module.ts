import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';


const routes: Routes = [
  {
    path: "crear",
    component: CrearPersonaComponent
  },
  {
    path: "eliminar",
    component: EliminarPersonaComponent
  },
  {
    path: "buscar",
    component: BuscarPersonaComponent
  },
  {
    path : "editar",
    component: EditarPersonaComponent 
  },
  {
    path: "crear",
    component: CrearProductoComponent
  },
  {
    path: "eliminar",
    component: EliminarProductoComponent
  },
  {
    path: "buscar",
    component: BuscarProductoComponent
  },
  {
    path : "editar",
    component: EditarProductoComponent 
  },
  {
    path : "buscar-producto",
    component: BuscarProductoComponent
  },
  {
    path: "editar-producto/:id",
    component : EditarProductoComponent
  },
  {
    path: "crear-producto",
    component : CrearProductoComponent
  },
  {
    path: "eliminar-producto/:id",
    component: EliminarProductoComponent
  },
  {
    path : "buscar-persona",
    component: BuscarPersonaComponent
  },
  {
    path: "editar-persona/:id",
    component : EditarPersonaComponent
  },
  {
    path: "crear-persona",
    component : CrearPersonaComponent
  },
  {
    path: "eliminar-persona/:id",
    component: EliminarPersonaComponent
  },
  {
    path: "contactenos",
    component: ContactenosComponent
  },
  {
    path: "mision-vision",
    component: MisionVisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
