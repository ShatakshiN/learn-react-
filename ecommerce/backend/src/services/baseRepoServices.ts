import { BaseService } from "./baseServices.js";
import { Repository } from "typeorm";
import type { ObjectLiteral } from "typeorm";
import { AppDataSource } from "../../util/db.js";

export abstract class BaseRepositoryService<T extends ObjectLiteral> extends BaseService<T> {
  constructor(entity: { new (): T }) {
    const dataSource = AppDataSource.getInstance();
    if (!dataSource.isInitialized) dataSource.initialize();
    const repo: Repository<T> = dataSource.getRepository(entity);
    super(repo); 
  }
}


