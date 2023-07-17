import {Entity, model, property} from '@loopback/repository';

@model()
export class Video extends Entity {
  @property({
    type: 'string',
  })
  content?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Video>) {
    super(data);
  }
}

export interface VideoRelations {
  // describe navigational properties here
}

export type VideoWithRelations = Video & VideoRelations;
