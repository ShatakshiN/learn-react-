/* import { Router } from "express";
import { categories, subCategories } from "../controllers/categoriesController.js";
//import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get('/categories', categories);
router.get('/sub-categories/:id', subCategories);

export default router; */
import { Router } from "express";
import { CategoryController } from "../controllers/productCategoryController.js";
const categoryController = new CategoryController();
const router = Router();
router.get('/Product-Categories', (req, res) => categoryController.getCategories(req, res));
router.get('/Product-Sub-Categories/:id', (req, res) => categoryController.getSubCategories(req, res));
export default router;
//# sourceMappingURL=categoriesRoutes.js.map