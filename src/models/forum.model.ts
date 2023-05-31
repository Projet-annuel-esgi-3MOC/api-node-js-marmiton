import {Entity, model, property} from '@loopback/repository';

@model()
export class Forum extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  topic?: string;

  @property({
    type: 'string',
  })
  message?: string;

  @property({
    type: 'date',
  })
  date?: string;


  constructor(data?: Partial<Forum>) {
    super(data);
  }
}

export interface ForumRelations {
  // describe navigational properties here
}

export type ForumWithRelations = Forum & ForumRelations;
