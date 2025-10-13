import type { Response } from "express";
export declare abstract class BaseController {
    protected sendSuccess(res: Response, data: any, status?: number): void;
    protected sendError(res: Response, message: string, status?: number): void;
    protected handleError(error: unknown, res: Response): void;
}
//# sourceMappingURL=baseController.d.ts.map