import { BaseController } from "./baseController.js";
import { CategoryService } from "../services/categoryServices.js";
export class CategoryController extends BaseController {
    categoryService = new CategoryService();
    getCategories = async (req, res) => {
        try {
            const categories = await this.categoryService.getTopCategories();
            if (!categories.length)
                return this.sendError(res, "No Product Categories found!", 404);
            this.sendSuccess(res, { categoryList: categories });
        }
        catch (err) {
            this.handleError(err, res);
        }
    };
    getSubCategories = async (req, res) => {
        try {
            const idParam = req.params.id;
            if (!idParam) {
                return this.sendError(res, 'Invalid Category ID', 400);
            }
            const parentId = parseInt(idParam);
            if (isNaN(parentId))
                return this.sendError(res, "Invalid category ID", 400);
            const subCategories = await this.categoryService.getSubCategories(parentId);
            if (!subCategories.length)
                return this.sendError(res, "No subcategories found", 404);
            this.sendSuccess(res, { subcatList: subCategories });
        }
        catch (err) {
            this.handleError(err, res);
        }
    };
}
//# sourceMappingURL=productCategoryController.js.map