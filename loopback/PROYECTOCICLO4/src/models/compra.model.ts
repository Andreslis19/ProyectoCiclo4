import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Persona} from './persona.model';
import {Producto} from './producto.model';

@model()
export class Compra extends Entity {
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
  id_Producto: string;

  @property({
    type: 'string',
    required: true,
  })
  id_EstadoC: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaCompra: string;

  @property({
    type: 'number',
    required: true,
  })
  SeleccionCantidad: number;

  @belongsTo(() => Persona)
  personaId: string;

  @property({
    type: 'string',
  })
  productoId?: string;

  @hasMany(() => Producto)
  productos: Producto[];

  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
