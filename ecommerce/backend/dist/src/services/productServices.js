import { Product } from "../entities/products.js";
import { BaseRepositoryService } from "./baseRepoServices.js";
export class ProductService extends BaseRepositoryService {
    constructor() {
        super(Product);
    }
    async findProductsByCategory(categoryId) {
        return await this.repository
            .createQueryBuilder("p")
            .leftJoinAndSelect("p.variants", "pv")
            .leftJoinAndSelect("pv.images", "pi")
            .innerJoin("p.category", "c")
            .where("p.category_id = :categoryId", { categoryId })
            /* .select([
              "p.id",
              "p.product_name",
              "pi.image_url"
            ]) */
            .getMany();
    }
}
//# sourceMappingURL=productServices.js.map