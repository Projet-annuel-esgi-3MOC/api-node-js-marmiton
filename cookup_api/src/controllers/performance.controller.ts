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
import {Performance} from '../models';
import {PerformanceRepository} from '../repositories';

export class PerformanceController {
  constructor(
    @repository(PerformanceRepository)
    public performanceRepository : PerformanceRepository,
  ) {}

  @post('/performances')
  @response(200, {
    description: 'Performance model instance',
    content: {'application/json': {schema: getModelSchemaRef(Performance)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Performance, {
            title: 'NewPerformance',
            exclude: ['id'],
          }),
        },
      },
    })
    performance: Omit<Performance, 'id'>,
  ): Promise<Performance> {
    return this.performanceRepository.create(performance);
  }

  @get('/performances/count')
  @response(200, {
    description: 'Performance model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Performance) where?: Where<Performance>,
  ): Promise<Count> {
    return this.performanceRepository.count(where);
  }

  @get('/performances')
  @response(200, {
    description: 'Array of Performance model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Performance, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Performance) filter?: Filter<Performance>,
  ): Promise<Performance[]> {
    return this.performanceRepository.find(filter);
  }

  @patch('/performances')
  @response(200, {
    description: 'Performance PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Performance, {partial: true}),
        },
      },
    })
    performance: Performance,
    @param.where(Performance) where?: Where<Performance>,
  ): Promise<Count> {
    return this.performanceRepository.updateAll(performance, where);
  }

  @get('/performances/{id}')
  @response(200, {
    description: 'Performance model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Performance, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Performance, {exclude: 'where'}) filter?: FilterExcludingWhere<Performance>
  ): Promise<Performance> {
    return this.performanceRepository.findById(id, filter);
  }

  @patch('/performances/{id}')
  @response(204, {
    description: 'Performance PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Performance, {partial: true}),
        },
      },
    })
    performance: Performance,
  ): Promise<void> {
    await this.performanceRepository.updateById(id, performance);
  }

  @put('/performances/{id}')
  @response(204, {
    description: 'Performance PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() performance: Performance,
  ): Promise<void> {
    await this.performanceRepository.replaceById(id, performance);
  }

  @del('/performances/{id}')
  @response(204, {
    description: 'Performance DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.performanceRepository.deleteById(id);
  }
}
