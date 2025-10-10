import { AppDataSource } from "../../util/db.js";
import { Product } from "../entities/products.js";
import { Category } from "../entities/categories.js";

export const seedProducts = async () => {
  const dataSource = AppDataSource.getInstance();
  
    if (!dataSource.isInitialized) {
      await dataSource.initialize();
    }
  
    
    const productRepo = dataSource.getRepository(Product);
  const existing = await productRepo.count();
  if (existing > 0) {
    console.log("Products already exist, skipping...");
    return;
  }

  const categoryRepo = dataSource.getRepository(Category);
  const phonesCategory = await categoryRepo.findOne({ where: { category: "Phones" } });
  if (!phonesCategory) throw new Error("Phones category not found");

  const products = [
    {
      product_name: "iPhone 15",
      description: "Latest Apple iPhone 15",
      brand: "Apple",
      base_SKU: "IP15-128-BLK",
      category: phonesCategory,
    },
    {
      product_name: "Pixel 8",
      description: "Google Pixel 8 with Tensor G3",
      brand: "Google",
      base_SKU: "PIXEL8-128-BLK",
      category: phonesCategory,
    },
    

  ];

  await productRepo.save(products);
  console.log(" Products seeded successfully");
};
