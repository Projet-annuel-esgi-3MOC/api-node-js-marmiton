import {Entity, model, property, hasMany} from '@loopback/repository';
import {Ingredients} from './ingredients.model';

@model()
export class Recipe extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  photo?: string;

  @property({
    type: 'string',
    required: true,
  })
  level?: string;

  @property({
    type: 'string',
    required: true,
  })
  timetoprepare?: string;

  @property({
    type: 'string',
    required: true,
  })
  timetocook?: string;

  @property({
    type: 'number',
  })
  ingredientsId?: number;

  @hasMany(() => Ingredients)
  ingredients: Ingredients[];

  constructor(data?: Partial<Recipe>) {
    super(data);
  }
}

export interface RecipeRelations {
  // describe navigational properties here
}

export type RecipeWithRelations = Recipe & RecipeRelations;
