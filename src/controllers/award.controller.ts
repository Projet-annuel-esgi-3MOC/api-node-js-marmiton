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
import {Award} from '../models';
import {AwardRepository} from '../repositories';

export class AwardController {
  constructor(
    @repository(AwardRepository)
    public awardRepository : AwardRepository,
  ) {}

  @post('/awards')
  @response(200, {
    description: 'Award model instance',
    content: {'application/json': {schema: getModelSchemaRef(Award)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Award, {
            title: 'NewAward',
            exclude: ['id'],
          }),
        },
      },
    })
    award: Omit<Award, 'id'>,
  ): Promise<Award> {
    return this.awardRepository.create(award);
  }

  @get('/awards/count')
  @response(200, {
    description: 'Award model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Award) where?: Where<Award>,
  ): Promise<Count> {
    return this.awardRepository.count(where);
  }

  @get('/awards')
  @response(200, {
    description: 'Array of Award model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Award, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Award) filter?: Filter<Award>,
  ): Promise<Award[]> {
    return this.awardRepository.find(filter);
  }

  @patch('/awards')
  @response(200, {
    description: 'Award PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Award, {partial: true}),
        },
      },
    })
    award: Award,
    @param.where(Award) where?: Where<Award>,
  ): Promise<Count> {
    return this.awardRepository.updateAll(award, where);
  }

  @get('/awards/{id}')
  @response(200, {
    description: 'Award model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Award, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Award, {exclude: 'where'}) filter?: FilterExcludingWhere<Award>
  ): Promise<Award> {
    return this.awardRepository.findById(id, filter);
  }

  @patch('/awards/{id}')
  @response(204, {
    description: 'Award PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Award, {partial: true}),
        },
      },
    })
    award: Award,
  ): Promise<void> {
    await this.awardRepository.updateById(id, award);
  }

  @put('/awards/{id}')
  @response(204, {
    description: 'Award PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() award: Award,
  ): Promise<void> {
    await this.awardRepository.replaceById(id, award);
  }

  @del('/awards/{id}')
  @response(204, {
    description: 'Award DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.awardRepository.deleteById(id);
  }
}
