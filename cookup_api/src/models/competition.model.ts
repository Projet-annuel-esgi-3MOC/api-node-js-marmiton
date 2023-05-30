import {Entity, model, property} from '@loopback/repository';

@model()
export class Competition extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
  })
  datestart?: string;

  @property({
    type: 'date',
  })
  dateend?: string;

  @property({
    type: 'string',
    required: true,
  })
  statut: string;


  constructor(data?: Partial<Competition>) {
    super(data);
  }
}

export interface CompetitionRelations {
  // describe navigational properties here
}

export type CompetitionWithRelations = Competition & CompetitionRelations;
