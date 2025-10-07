import { User } from "./users.js";
import { Permissions } from "./permissions.js";
export declare class Role {
    id: number;
    role_name: string;
    createdAt: Date;
    updatedAt: Date;
    users: User[];
    permissions: Permissions[];
}
//# sourceMappingURL=roles.d.ts.map