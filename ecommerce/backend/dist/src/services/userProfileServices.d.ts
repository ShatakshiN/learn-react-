import { User } from "../entities/users.js";
import { BaseRepositoryService } from "./baseRepoServices.js";
export declare class UserService extends BaseRepositoryService<User> {
    constructor();
    getUserProfile(userId: number): Promise<{
        user_id: number;
        first_name: string;
        last_name: string;
        email: string;
        phone_no: string;
        dp_url: string;
    }>;
    updateUserProfile(userId: number, updates: any): Promise<{
        user_id: number;
        first_name: string;
        last_name: string;
        email: string;
        phone_no: string;
        dp_url: string;
    }>;
    deleteUser(userId: number): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=userProfileServices.d.ts.map