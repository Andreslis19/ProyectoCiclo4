import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Compra,
  Persona,
} from '../models';
import {CompraRepository} from '../repositories';

export class CompraPersonaController {
  constructor(
    @repository(CompraRepository)
    public compraRepository: CompraRepository,
  ) { }

  @get('/compras/{id}/persona', {
    responses: {
      '200': {
        description: 'Persona belonging to Compra',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Persona)},
          },
        },
      },
    },
  })
  async getPersona(
    @param.path.string('id') id: typeof Compra.prototype.id,
  ): Promise<Persona> {
    return this.compraRepository.persona(id);
  }
}
