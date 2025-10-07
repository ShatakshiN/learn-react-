import { Router } from "express";
import { AllProducts } from "../controllers/productController.js";
const router = Router();
router.get('/allPhones/:id', AllProducts);
export default router;
//# sourceMappingURL=productRoutes.js.map