import {Entity, model, property, hasMany} from '@loopback/repository';
import {Messages} from './messages.model';

@model()
export class Conversation extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @hasMany(() => Messages)
  messages: Messages[];

  constructor(data?: Partial<Conversation>) {
    super(data);
  }
}

export interface ConversationRelations {
  // describe navigational properties here
}

export type ConversationWithRelations = Conversation & ConversationRelations;
