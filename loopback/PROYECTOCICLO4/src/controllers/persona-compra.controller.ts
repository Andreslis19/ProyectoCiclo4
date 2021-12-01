import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Persona,
  Compra,
} from '../models';
import {PersonaRepository} from '../repositories';

export class PersonaCompraController {
  constructor(
    @repository(PersonaRepository) protected personaRepository: PersonaRepository,
  ) { }

  @get('/personas/{id}/compras', {
    responses: {
      '200': {
        description: 'Array of Persona has many Compra',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Compra)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Compra>,
  ): Promise<Compra[]> {
    return this.personaRepository.compras(id).find(filter);
  }

  @post('/personas/{id}/compras', {
    responses: {
      '200': {
        description: 'Persona model instance',
        content: {'application/json': {schema: getModelSchemaRef(Compra)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Persona.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {
            title: 'NewCompraInPersona',
            exclude: ['id'],
            optional: ['personaId']
          }),
        },
      },
    }) compra: Omit<Compra, 'id'>,
  ): Promise<Compra> {
    return this.personaRepository.compras(id).create(compra);
  }

  @patch('/personas/{id}/compras', {
    responses: {
      '200': {
        description: 'Persona.Compra PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {partial: true}),
        },
      },
    })
    compra: Partial<Compra>,
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.personaRepository.compras(id).patch(compra, where);
  }

  @del('/personas/{id}/compras', {
    responses: {
      '200': {
        description: 'Persona.Compra DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.personaRepository.compras(id).delete(where);
  }
}
