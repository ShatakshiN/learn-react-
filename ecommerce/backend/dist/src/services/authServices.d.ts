import { UserService } from "./userServices.js";
import { User } from "../entities/users.js";
export declare class AuthService {
    private userService;
    private JWT_SECRET;
    constructor(userService: UserService);
    signUp(data: Partial<User>): Promise<User>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
//# sourceMappingURL=authServices.d.ts.map