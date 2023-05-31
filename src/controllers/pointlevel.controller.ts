import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Pointlevel} from '../models';
import {PointlevelRepository} from '../repositories';

export class PointlevelController {
  constructor(
    @repository(PointlevelRepository)
    public pointlevelRepository : PointlevelRepository,
  ) {}

  @post('/pointlevels')
  @response(200, {
    description: 'Pointlevel model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pointlevel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pointlevel, {
            title: 'NewPointlevel',
            exclude: ['id'],
          }),
        },
      },
    })
    pointlevel: Omit<Pointlevel, 'id'>,
  ): Promise<Pointlevel> {
    return this.pointlevelRepository.create(pointlevel);
  }

  @get('/pointlevels/count')
  @response(200, {
    description: 'Pointlevel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pointlevel) where?: Where<Pointlevel>,
  ): Promise<Count> {
    return this.pointlevelRepository.count(where);
  }

  @get('/pointlevels')
  @response(200, {
    description: 'Array of Pointlevel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pointlevel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pointlevel) filter?: Filter<Pointlevel>,
  ): Promise<Pointlevel[]> {
    return this.pointlevelRepository.find(filter);
  }

  @patch('/pointlevels')
  @response(200, {
    description: 'Pointlevel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pointlevel, {partial: true}),
        },
      },
    })
    pointlevel: Pointlevel,
    @param.where(Pointlevel) where?: Where<Pointlevel>,
  ): Promise<Count> {
    return this.pointlevelRepository.updateAll(pointlevel, where);
  }

  @get('/pointlevels/{id}')
  @response(200, {
    description: 'Pointlevel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pointlevel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pointlevel, {exclude: 'where'}) filter?: FilterExcludingWhere<Pointlevel>
  ): Promise<Pointlevel> {
    return this.pointlevelRepository.findById(id, filter);
  }

  @patch('/pointlevels/{id}')
  @response(204, {
    description: 'Pointlevel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pointlevel, {partial: true}),
        },
      },
    })
    pointlevel: Pointlevel,
  ): Promise<void> {
    await this.pointlevelRepository.updateById(id, pointlevel);
  }

  @put('/pointlevels/{id}')
  @response(204, {
    description: 'Pointlevel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pointlevel: Pointlevel,
  ): Promise<void> {
    await this.pointlevelRepository.replaceById(id, pointlevel);
  }

  @del('/pointlevels/{id}')
  @response(204, {
    description: 'Pointlevel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pointlevelRepository.deleteById(id);
  }
}
