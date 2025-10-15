import type { Request, Response, NextFunction } from "express";
import { BaseController } from "./baseController.js";
export declare class UserController extends BaseController {
    private userService;
    constructor();
    getUserProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    editUserProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteUserAccount: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
//# sourceMappingURL=userProfileController.d.ts.map