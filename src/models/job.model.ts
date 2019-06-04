import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Job extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  company?: string;

  @property({
    type: 'string',
    itemType: 'string',
  })
  skills?: string;

  @property({
    type: 'string'
  })
  jobDesc: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Job>) {
    super(data);
  }
}
