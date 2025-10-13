import { BaseService } from "../services/baseServices.js";
import { User } from "../entities/users.js";
export declare class UserService extends BaseService<User> {
    createUser(data: Partial<User>): Promise<User>;
    verifyPassword(password: string, hash: string): Promise<boolean>;
}
//# sourceMappingURL=userServices.d.ts.map