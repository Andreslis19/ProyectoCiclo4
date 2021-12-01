import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {EstadoCompra, EstadoCompraRelations} from '../models';

export class EstadoCompraRepository extends DefaultCrudRepository<
  EstadoCompra,
  typeof EstadoCompra.prototype.id,
  EstadoCompraRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(EstadoCompra, dataSource);
  }
}
