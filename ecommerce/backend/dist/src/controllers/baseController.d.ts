import type { Response } from "express";
export declare abstract class BaseController {
    protected sendSuccess(res: Response, payload?: any, code?: number): void;
    protected sendError(res: Response, error: any, code?: number): void;
    abstract registerRoutes(): void;
}
//# sourceMappingURL=baseController.d.ts.map