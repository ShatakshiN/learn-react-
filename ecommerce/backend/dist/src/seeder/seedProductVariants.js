import { AppDataSource } from "../../util/db.js";
import { ProductVariant } from "../entities/productVariants.js";
//import { Product } from "../entities/products.js";
export const seedProductVariants = async () => {
    const dataSource = AppDataSource.getInstance();
    if (!dataSource.isInitialized) {
        await dataSource.initialize();
    }
    const repo = dataSource.getRepository(ProductVariant);
    const variants = repo.create([
        {
            SKU: "IP15-128-BLK",
            price: 79999,
            stock: 50,
            product: { id: 1 }, // iPhone 15
        },
        {
            SKU: "PIXEL8-128-WHT",
            price: 74999,
            stock: 40,
            product: { id: 2 }, // Pixel 8
        }
    ]);
    await repo.save(variants);
    console.log("Product Variants seeded");
};
//# sourceMappingURL=seedProductVariants.js.map