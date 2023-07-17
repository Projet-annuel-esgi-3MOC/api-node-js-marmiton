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
  Messages,
  User,
} from '../models';
import {MessagesRepository} from '../repositories';

export class MessagesUserController {
  constructor(
    @repository(MessagesRepository) protected messagesRepository: MessagesRepository,
  ) { }

  @get('/messages/{id}/user', {
    responses: {
      '200': {
        description: 'Messages has one User',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<User>,
  ): Promise<User> {
    return this.messagesRepository.user(id).get(filter);
  }

  @post('/messages/{id}/user', {
    responses: {
      '200': {
        description: 'Messages model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Messages.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInMessages',
            exclude: ['id'],
            optional: ['messagesId']
          }),
        },
      },
    }) user: Omit<User, 'id'>,
  ): Promise<User> {
    return this.messagesRepository.user(id).create(user);
  }

  @patch('/messages/{id}/user', {
    responses: {
      '200': {
        description: 'Messages.User PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: Partial<User>,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.messagesRepository.user(id).patch(user, where);
  }

  @del('/messages/{id}/user', {
    responses: {
      '200': {
        description: 'Messages.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.messagesRepository.user(id).delete(where);
  }
}
