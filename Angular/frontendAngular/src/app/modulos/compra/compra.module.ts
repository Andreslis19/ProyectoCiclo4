import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { RealizarCompraComponent } from './compras/realizar-compra/realizar-compra.component';


@NgModule({
  declarations: [
    RealizarCompraComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule
  ]
})
export class CompraModule { }
