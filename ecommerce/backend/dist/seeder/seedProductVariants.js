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
            product: { id: 1 },
        },
        {
            SKU: "PIXEL8-128GB",
            price: 74999,
            stock: 40,
            product: { id: 2 },
        },
        {
            SKU: "CASE-IPHONE15-BLACK",
            price: 1999,
            stock: 100,
            product: { id: 3 },
        },
    ]);
    await repo.save(variants);
    console.log("Product Variants seeded");
};
//# sourceMappingURL=seedProductVariants.js.map