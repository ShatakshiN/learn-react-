import { User } from "./users.js";
import { Payment } from "./payments.js";
import { OrderItem } from "./orderItems.js";
import { Delivery } from "./delivaries.js";
export declare enum OrderStatus {
    SUCCESSFUL = "successful",
    FAILED = "failed",
    PENDING = "pending",
    RETURNED = "returned",
    CANCELLED = "cancelled"
}
export declare class Order {
    id: number;
    user: User;
    payment: Payment;
    order_status: OrderStatus;
    orderItems: OrderItem[];
    delivery: Delivery;
}
//# sourceMappingURL=orders.d.ts.map