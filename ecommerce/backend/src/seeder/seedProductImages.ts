import { AppDataSource } from "../../util/db.js";
import { ProductImage } from "../entities/productImage.js";

export const seedProductImages = async () => {
  const dataSource = AppDataSource.getInstance();

  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  
  const repo = dataSource.getRepository(ProductImage);

  const images = repo.create([
    {
      productVariant: { id: 1 },
      image_url: "https://example.com/iphone15-128gb.png",
    },
    {
      productVariant: { id: 2 },
      image_url: "https://example.com/pixel8-128gb.png",
    }
  ]);

  await repo.save(images);
  console.log(" Product Images seeded");
};

