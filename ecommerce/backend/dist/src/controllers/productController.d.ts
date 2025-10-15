import type { Request, Response, NextFunction } from "express";
import { BaseController } from "./baseController.js";
export declare class ProductController extends BaseController {
    private productService;
    constructor();
    getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=productController.d.ts.map