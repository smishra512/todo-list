import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Job } from '../models';
import { JobRepository } from '../repositories';

export class JobController {
  constructor(
    @repository(JobRepository)
    public jobRepository: JobRepository,
  ) { }

  @post('/jobs', {
    responses: {
      '200': {
        description: 'Job model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Job } } },
      },
    },
  })
  async create(@requestBody() job: Job): Promise<Job> {
    return await this.jobRepository.create(job);
  }

  @get('/jobs/count', {
    responses: {
      '200': {
        description: 'Job model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Job)) where?: Where,
  ): Promise<Count> {
    return await this.jobRepository.count(where);
  }

  @get('/jobs', {
    responses: {
      '200': {
        description: 'Array of Job model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Job } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Job)) filter?: Filter,
  ): Promise<Job[]> {
    return await this.jobRepository.find(filter);
  }

  @patch('/jobs', {
    responses: {
      '200': {
        description: 'Job PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() job: Job,
    @param.query.object('where', getWhereSchemaFor(Job)) where?: Where,
  ): Promise<Count> {
    return await this.jobRepository.updateAll(job, where);
  }

  @get('/jobs/{id}', {
    responses: {
      '200': {
        description: 'Job model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Job } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Job> {
    return await this.jobRepository.findById(id);
  }

  @patch('/jobs/{id}', {
    responses: {
      '204': {
        description: 'Job PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() job: Job,
  ): Promise<void> {
    await this.jobRepository.updateById(id, job);
  }

  @put('/jobs/{id}', {
    responses: {
      '204': {
        description: 'Job PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() job: Job,
  ): Promise<void> {
    await this.jobRepository.replaceById(id, job);
  }

  @del('/jobs/{id}', {
    responses: {
      '204': {
        description: 'Job DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.jobRepository.deleteById(id);
  }
}
