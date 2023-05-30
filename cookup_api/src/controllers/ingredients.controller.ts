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
import {Ingredients} from '../models';
import {IngredientsRepository} from '../repositories';

export class IngredientsController {
  constructor(
    @repository(IngredientsRepository)
    public ingredientsRepository: IngredientsRepository,
  ) {}

  @post('/ingredients')
  @response(200, {
    description: 'Ingredients model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ingredients)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ingredients, {
            title: 'NewIngredients',
            exclude: ['id'],
          }),
        },
      },
    })
    ingredients: Omit<Ingredients, 'id'>,
  ): Promise<Ingredients> {
    return this.ingredientsRepository.create(ingredients);
  }

  @get('/ingredients/count')
  @response(200, {
    description: 'Ingredients model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ingredients) where?: Where<Ingredients>,
  ): Promise<Count> {
    return this.ingredientsRepository.count(where);
  }

  @get('/ingredients')
  @response(200, {
    description: 'Array of Ingredients model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ingredients, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ingredients) filter?: Filter<Ingredients>,
  ): Promise<Ingredients[]> {
    return this.ingredientsRepository.find(filter);
  }

  @patch('/ingredients')
  @response(200, {
    description: 'Ingredients PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ingredients, {partial: true}),
        },
      },
    })
    ingredients: Ingredients,
    @param.where(Ingredients) where?: Where<Ingredients>,
  ): Promise<Count> {
    return this.ingredientsRepository.updateAll(ingredients, where);
  }

  @get('/ingredients/{id}')
  @response(200, {
    description: 'Ingredients model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ingredients, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ingredients, {exclude: 'where'})
    filter?: FilterExcludingWhere<Ingredients>,
  ): Promise<Ingredients> {
    return this.ingredientsRepository.findById(id, filter);
  }

  @patch('/ingredients/{id}')
  @response(204, {
    description: 'Ingredients PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ingredients, {partial: true}),
        },
      },
    })
    ingredients: Ingredients,
  ): Promise<void> {
    await this.ingredientsRepository.updateById(id, ingredients);
  }

  @put('/ingredients/{id}')
  @response(204, {
    description: 'Ingredients PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ingredients: Ingredients,
  ): Promise<void> {
    await this.ingredientsRepository.replaceById(id, ingredients);
  }

  @del('/ingredients/{id}')
  @response(204, {
    description: 'Ingredients DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ingredientsRepository.deleteById(id);
  }
}
