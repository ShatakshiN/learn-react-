import { Category } from "../entities/categories.js";
import { BaseRepositoryService } from "./baseRepoServices.js";
import { IsNull } from "typeorm";
export class CategoryService extends BaseRepositoryService {
    constructor() {
        super(Category);
    }
    async getTopCategories() {
        return this.repository.find({ where: { parent: IsNull() } });
    }
    async getSubCategories(parentId) {
        return this.repository.find({
            where: { parent: { id: parentId } },
            relations: ["parent"],
        });
    }
}
//# sourceMappingURL=categoryServices.js.map