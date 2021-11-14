import {Entity, model, property} from '@loopback/repository';

@model()
export class Vendedor extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  SeleccionVentas: boolean;

  @property({
    type: 'string',
  })
  id_Cliente?: string;

  @property({
    type: 'string',
  })
  id_Producto?: string;

  @property({
    type: 'string',
  })
  id_Compra?: string;

  @property({
    type: 'string',
  })
  id_verificacion?: string;


  constructor(data?: Partial<Vendedor>) {
    super(data);
  }
}

export interface VendedorRelations {
  // describe navigational properties here
}

export type VendedorWithRelations = Vendedor & VendedorRelations;
