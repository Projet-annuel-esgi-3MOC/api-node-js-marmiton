import {Entity, model, property} from '@loopback/repository';

@model()
export class Challenge extends Entity {
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
    type: 'number',
  })
  level?: number;

  @property({
    type: 'string',
  })
  status?: string;


  constructor(data?: Partial<Challenge>) {
    super(data);
  }
}

export interface ChallengeRelations {
  // describe navigational properties here
}

export type ChallengeWithRelations = Challenge & ChallengeRelations;
