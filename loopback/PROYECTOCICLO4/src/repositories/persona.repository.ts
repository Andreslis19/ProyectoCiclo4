import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Persona, PersonaRelations, Compra} from '../models';
import {CompraRepository} from './compra.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {

  public readonly compras: HasManyRepositoryFactory<Compra, typeof Persona.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('CompraRepository') protected compraRepositoryGetter: Getter<CompraRepository>,
  ) {
    super(Persona, dataSource);
    this.compras = this.createHasManyRepositoryFactoryFor('compras', compraRepositoryGetter,);
    this.registerInclusionResolver('compras', this.compras.inclusionResolver);
  }
}
