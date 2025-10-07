import { Router } from "express";
import { categories, subCategories } from "../controllers/categoriesController.js";
//import { authenticate } from "../middlewares/auth.js";
const router = Router();
router.get('/categories', categories);
router.get('/sub-categories/:id', subCategories);
export default router;
//# sourceMappingURL=categoriesRoutes.js.map