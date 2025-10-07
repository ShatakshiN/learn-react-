import { AppDataSource } from "../util/db.js";
import { VariantAttributeValue } from "../entities/variantAttributeValues.js";


export const seedVariantAttributeValues = async () => {
  const repo = AppDataSource.getRepository(VariantAttributeValue);

  const data = repo.create([
    {
      productVariant: { id: 1 },
      attribute: { id: 2 }, // Storage
      value: "128GB",
    },
    {
      productVariant: { id: 3 },
      attribute: { id: 1 }, // Color
      value: "Black",
    },
  ]);

  await repo.save(data);
  console.log("Variant Attribute Values seeded");
};
