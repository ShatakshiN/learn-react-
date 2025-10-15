import { Product } from "../entities/products.js";
import { BaseRepositoryService } from "./baseRepoServices.js";

export class ProductService extends BaseRepositoryService<Product> {
  constructor() {
    super(Product); 
  }

  async findProductsByCategory(categoryId: number) {
    return await this.repository
      .createQueryBuilder("p")
      .leftJoinAndSelect("p.variants", "pv")
      .leftJoinAndSelect("pv.images", "pi")
      .innerJoin("p.category", "c")
      .where("p.category_id = :categoryId", { categoryId })
     
      .getMany();
  }
}

 /* .select([
        "p.id",
        "p.product_name",
        "pi.image_url"
      ]) */