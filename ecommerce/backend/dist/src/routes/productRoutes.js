import { Router } from "express";
import { AllProducts } from "../controllers/productController.js";
const router = Router();
router.get('/allProducts/:id', AllProducts); // id from category table 
export default router;
//# sourceMappingURL=productRoutes.js.map