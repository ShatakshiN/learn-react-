import type { Request, Response, NextFunction } from "express";
interface SignUpBody {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    dpUrl?: string;
}
export declare const signUp: (req: Request<{}, {}, SignUpBody>, res: Response, next: NextFunction) => Promise<void>;
export declare const login: (req: Request<{}, {}, SignUpBody>, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=userController.d.ts.map