import { Role } from "./roles.js";
export declare class User {
    id: number;
    first_name: string;
    last_name: string;
    dp_url: string;
    email: string;
    phone_no: string;
    is_active: boolean;
    hashed_password: string;
    createdAt: Date;
    updatedAt: Date;
    roles: Role[];
}
//# sourceMappingURL=users.d.ts.map