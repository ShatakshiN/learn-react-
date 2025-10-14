import { Category } from "../entities/categories.js";
import { BaseRepositoryService } from "./baseRepoServices.js";
import { IsNull } from "typeorm";

export class CategoryService extends BaseRepositoryService<Category> {
  constructor() {
    super(Category); 
  }

  async getTopCategories(): Promise<Category[]> {
    return this.repository.find({ where: { parent: IsNull() } });
  }

  async getSubCategories(parentId: number): Promise<Category[]> {
    return this.repository.find({
      where: { parent: { id: parentId } },
      relations: ["parent"],
    });
  }
}

