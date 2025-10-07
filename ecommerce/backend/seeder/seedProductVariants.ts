import { AppDataSource } from "../util/db.js";
import { ProductVariant } from "../entities/productVariants.js";
//import { Product } from "../entities/products.js";

export const seedProductVariants = async () => {
  const repo = AppDataSource.getRepository(ProductVariant);

  const variants = repo.create([
    {
      SKU: "IPHONE15-128GB",
      price: 79999,
      stock: 50,
      product: { id: 1 }, // iPhone 15
    },
    {
      SKU: "PIXEL8-128GB",
      price: 74999,
      stock: 40,
      product: { id: 2 }, // Pixel 8
    }
  ]);
  await repo.save(variants);
  console.log("Product Variants seeded");
};

