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
import {Challenge} from '../models';
import {ChallengeRepository} from '../repositories';

export class ChallengeController {
  constructor(
    @repository(ChallengeRepository)
    public challengeRepository : ChallengeRepository,
  ) {}

  @post('/challenges')
  @response(200, {
    description: 'Challenge model instance',
    content: {'application/json': {schema: getModelSchemaRef(Challenge)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Challenge, {
            title: 'NewChallenge',
            exclude: ['id'],
          }),
        },
      },
    })
    challenge: Omit<Challenge, 'id'>,
  ): Promise<Challenge> {
    return this.challengeRepository.create(challenge);
  }

  @get('/challenges/count')
  @response(200, {
    description: 'Challenge model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Challenge) where?: Where<Challenge>,
  ): Promise<Count> {
    return this.challengeRepository.count(where);
  }

  @get('/challenges')
  @response(200, {
    description: 'Array of Challenge model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Challenge, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Challenge) filter?: Filter<Challenge>,
  ): Promise<Challenge[]> {
    return this.challengeRepository.find(filter);
  }

  @patch('/challenges')
  @response(200, {
    description: 'Challenge PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Challenge, {partial: true}),
        },
      },
    })
    challenge: Challenge,
    @param.where(Challenge) where?: Where<Challenge>,
  ): Promise<Count> {
    return this.challengeRepository.updateAll(challenge, where);
  }

  @get('/challenges/{id}')
  @response(200, {
    description: 'Challenge model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Challenge, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Challenge, {exclude: 'where'}) filter?: FilterExcludingWhere<Challenge>
  ): Promise<Challenge> {
    return this.challengeRepository.findById(id, filter);
  }

  @patch('/challenges/{id}')
  @response(204, {
    description: 'Challenge PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Challenge, {partial: true}),
        },
      },
    })
    challenge: Challenge,
  ): Promise<void> {
    await this.challengeRepository.updateById(id, challenge);
  }

  @put('/challenges/{id}')
  @response(204, {
    description: 'Challenge PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() challenge: Challenge,
  ): Promise<void> {
    await this.challengeRepository.replaceById(id, challenge);
  }

  @del('/challenges/{id}')
  @response(204, {
    description: 'Challenge DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.challengeRepository.deleteById(id);
  }
}
