import type { Request, Response, NextFunction } from "express";
import { User } from "../entities/users.js";
declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
export declare class AuthMiddleware {
    private static instance;
    private constructor();
    static getInstance(): AuthMiddleware;
    authenticate(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=authMiddleware.d.ts.map