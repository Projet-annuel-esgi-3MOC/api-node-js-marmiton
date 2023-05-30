import {Entity, model, property} from '@loopback/repository';

@model()
export class Ingredients extends Entity {
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
  image?: string;

  @property({
    type: 'number',
  })
  recipeId?: number;

  constructor(data?: Partial<Ingredients>) {
    super(data);
  }
}

export interface IngredientsRelations {
  // describe navigational properties here
}

export type IngredientsWithRelations = Ingredients & IngredientsRelations;
