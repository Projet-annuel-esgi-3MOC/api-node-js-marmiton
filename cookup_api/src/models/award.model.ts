import {Entity, model, property} from '@loopback/repository';

@model()
export class Award extends Entity {
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
  nom: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  image?: string;


  constructor(data?: Partial<Award>) {
    super(data);
  }
}

export interface AwardRelations {
  // describe navigational properties here
}

export type AwardWithRelations = Award & AwardRelations;
