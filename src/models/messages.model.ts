import {Entity, model, property, hasOne} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Messages extends Entity {
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
  message: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'string',
  })
  senderId?: string;

  @property({
    type: 'string',
  })
  conversationId?: string;

  @hasOne(() => User)
  user: User;

  constructor(data?: Partial<Messages>) {
    super(data);
  }
}

export interface MessagesRelations {
  // describe navigational properties here
}

export type MessagesWithRelations = Messages & MessagesRelations;
