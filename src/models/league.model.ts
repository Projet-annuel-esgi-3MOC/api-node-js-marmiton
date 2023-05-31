import {Entity, model, property} from '@loopback/repository';

@model()
export class League extends Entity {
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
  max?: number;

  @property({
    type: 'number',
  })
  min?: number;


  constructor(data?: Partial<League>) {
    super(data);
  }
}

export interface LeagueRelations {
  // describe navigational properties here
}

export type LeagueWithRelations = League & LeagueRelations;
