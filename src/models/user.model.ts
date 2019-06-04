import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
    id: true
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  role?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
