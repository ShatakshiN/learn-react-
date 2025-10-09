import { AppDataSource } from "../util/db.js";
import { Product } from "../entities/products.js";
export const AllProducts = async (req, res, next) => {
    try {
        const idParam = req.params.id;
        if (!idParam) {
            return res.status(400).json({ msg: "category ID is required" });
        }
        ;
        const parentId = parseInt(idParam);
        if (isNaN(parentId)) {
            return res.status(400).json({ msg: "invalid ID" });
        }
        const productRepository = AppDataSource.getRepository(Product);
        const allProducts = await productRepository
            .createQueryBuilder("p")
            .leftJoinAndSelect("p.variants", "pv")
            .leftJoinAndSelect("pv.images", "pi")
            .innerJoin("p.category", "c")
            .where("p.category_id = :categoryId", { categoryId: parentId })
            .select([
            "p.id",
            "p.product_name",
            "pi.image_url"
        ])
            .getMany();
        if (!allProducts) {
            return res.status(404).json({ msg: "no products found" });
        }
        res.status(200).json({ allProds: allProducts });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error || "internal server error" });
    }
};
//# sourceMappingURL=productController.js.map