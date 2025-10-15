import { Product } from "../entities/products.js";
import { BaseRepositoryService } from "./baseRepoServices.js";
export declare class ProductService extends BaseRepositoryService<Product> {
    constructor();
    findProductsByCategory(categoryId: number): Promise<Product[]>;
}
//# sourceMappingURL=productServices.d.ts.map