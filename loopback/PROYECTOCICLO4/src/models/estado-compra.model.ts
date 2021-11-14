import {Entity, model, property} from '@loopback/repository';

@model()
export class EstadoCompra extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  En_Estudio: string;

  @property({
    type: 'string',
    required: true,
  })
  Rechazado: string;

  @property({
    type: 'string',
    required: true,
  })
  Aceptado: string;

  @property({
    type: 'string',
    required: true,
  })
  Enviado: string;


  constructor(data?: Partial<EstadoCompra>) {
    super(data);
  }
}

export interface EstadoCompraRelations {
  // describe navigational properties here
}

export type EstadoCompraWithRelations = EstadoCompra & EstadoCompraRelations;
