import { AppDataSource } from "../util/db.js";
import { IsNull } from "typeorm";
export const AllProducts = async (req, res, next) => {
    try {
        const idParam = req.params.id;
        if (!idParam) {
            return res.status(400).json({ msg: "parent ID is required" });
        }
        ;
        const parentId = parseInt(idParam);
        if (isNaN(parentId)) {
            return res.status(400).json({ msg: "invalid ID" });
        }
        const productRepository = AppDataSource.getRepository('Product');
        const allProducts = productRepository.find({
            where: { category: { id: parentId } },
            relations: [
                "product_variants",
                "product_variants.productImages"
            ],
        });
        if (!allProducts) {
            return res.status(404).json({ msg: "no products found" });
        }
        res.status(200).json({ allProds: allProducts });
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=productController.js.map