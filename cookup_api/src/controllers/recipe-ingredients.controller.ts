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
import {Recipe, Ingredients} from '../models';
import {RecipeRepository} from '../repositories';

export class RecipeIngredientsController {
  constructor(
    @repository(RecipeRepository) protected recipeRepository: RecipeRepository,
  ) {}

  @get('/recipes/{id}/ingredients', {
    responses: {
      '200': {
        description: 'Array of Recipe has many Ingredients',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ingredients)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Ingredients>,
  ): Promise<Ingredients[]> {
    return this.recipeRepository.ingredients(id).find(filter);
  }

  @post('/recipes/{id}/ingredients', {
    responses: {
      '200': {
        description: 'Recipe model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ingredients)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Recipe.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ingredients, {
            title: 'NewIngredientsInRecipe',
            exclude: ['id'],
            optional: ['recipeId'],
          }),
        },
      },
    })
    ingredients: Omit<Ingredients, 'id'>,
  ): Promise<Ingredients> {
    return this.recipeRepository.ingredients(id).create(ingredients);
  }

  @patch('/recipes/{id}/ingredients', {
    responses: {
      '200': {
        description: 'Recipe.Ingredients PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ingredients, {partial: true}),
        },
      },
    })
    ingredients: Partial<Ingredients>,
    @param.query.object('where', getWhereSchemaFor(Ingredients))
    where?: Where<Ingredients>,
  ): Promise<Count> {
    return this.recipeRepository.ingredients(id).patch(ingredients, where);
  }

  @del('/recipes/{id}/ingredients', {
    responses: {
      '200': {
        description: 'Recipe.Ingredients DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Ingredients))
    where?: Where<Ingredients>,
  ): Promise<Count> {
    return this.recipeRepository.ingredients(id).delete(where);
  }
}
