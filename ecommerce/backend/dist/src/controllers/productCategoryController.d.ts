import { BaseController } from "./baseController.js";
import type { Request, Response } from "express";
export declare class CategoryController extends BaseController {
    private categoryService;
    getCategories: (req: Request, res: Response) => Promise<void>;
    getSubCategories: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=productCategoryController.d.ts.map