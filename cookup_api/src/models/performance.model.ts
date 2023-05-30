import {Entity, model, property} from '@loopback/repository';

@model()
export class Performance extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  count?: number;

  @property({
    type: 'number',
  })
  member?: number;


  constructor(data?: Partial<Performance>) {
    super(data);
  }
}

export interface PerformanceRelations {
  // describe navigational properties here
}

export type PerformanceWithRelations = Performance & PerformanceRelations;
