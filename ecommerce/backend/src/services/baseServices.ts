import type{ Repository, DeepPartial, ObjectLiteral } from "typeorm";

export abstract class BaseService<T extends ObjectLiteral> {
  protected repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(criteria: Partial<T>): Promise<T | null> {
    return this.repository.findOne({ where: criteria });
  }

  async create(data: DeepPartial<T> | DeepPartial<T>[]): Promise<T | T[]> {
    if (Array.isArray(data)) {
      const entities = this.repository.create(data);
      return await this.repository.save(entities);
    } else {
      const entity = this.repository.create(data);
      return await this.repository.save(entity);
    }
  }
}
