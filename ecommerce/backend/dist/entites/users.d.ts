import { Role } from "./roles.js";
import { Cart } from "./cart.js";
import { Order } from "./orders.js";
import { Address } from "./address.js";
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
    cart: Cart;
    orders: Order[];
    addresses: Address[];
}
//# sourceMappingURL=users.d.ts.map