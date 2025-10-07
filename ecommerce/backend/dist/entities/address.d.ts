import { User } from "./users.js";
import { Delivery } from "./delivaries.js";
export declare class Address {
    id: number;
    line1: string;
    line2: string;
    district: string;
    state: string;
    country: string;
    pincode: string;
    deliveries: Delivery[];
    user: User;
}
//# sourceMappingURL=address.d.ts.map