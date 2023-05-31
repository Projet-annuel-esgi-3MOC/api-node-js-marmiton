import {Entity, model, property} from '@loopback/repository';

@model()
export class Pointlevel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  point?: number;

  @property({
    type: 'number',
  })
  level?: number;


  constructor(data?: Partial<Pointlevel>) {
    super(data);
  }
}

export interface PointlevelRelations {
  // describe navigational properties here
}

export type PointlevelWithRelations = Pointlevel & PointlevelRelations;
