import { Category } from "../entities/categories.js";
import { BaseRepositoryService } from "./baseRepoServices.js";
export declare class CategoryService extends BaseRepositoryService<Category> {
    constructor();
    getTopCategories(): Promise<Category[]>;
    getSubCategories(parentId: number): Promise<Category[]>;
}
//# sourceMappingURL=categoryServices.d.ts.map