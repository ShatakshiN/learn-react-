import { Router } from "express";
import { ProductController } from "../controllers/productController.js";
const router = Router();
const productController = new ProductController();
router.get("/products/:id", productController.getAllProducts.bind(productController));
export default router;
//# sourceMappingURL=productRoutes.js.map