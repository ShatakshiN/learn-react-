import type { Request, Response } from "express";
import { BaseController } from "./baseController.js";
export declare class UserController extends BaseController {
    private authService;
    constructor();
    signUp(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=usersController.d.ts.map