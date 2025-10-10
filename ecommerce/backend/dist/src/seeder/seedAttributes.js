import { AppDataSource } from "../../util/db.js";
import { Attribute } from "../entities/attributes.js";
export const seedAttributes = async () => {
    const dataSource = AppDataSource.getInstance();
    if (!dataSource.isInitialized) {
        await dataSource.initialize();
    }
    const attributeRepo = dataSource.getRepository(Attribute);
    const existing = await attributeRepo.count();
    if (existing > 0) {
        console.log("Attributes already exist, skipping...");
        return;
    }
    const attributes = [
        { attribute: "Color" },
        { attribute: "Storage" },
    ];
    await attributeRepo.save(attributes);
    //console.log("Attributes seeded successfully");
};
//# sourceMappingURL=seedAttributes.js.map