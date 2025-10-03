import { Order } from "./orders.js";
import { Address } from "./address.js";
export declare enum DeliveryStatus {
    PENDING = "pending",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    RETURNED = "returned",
    CANCELLED = "cancelled"
}
export declare class Delivery {
    id: number;
    service_company: string;
    shipment_date: Date;
    expected_date: Date;
    delivery_date: Date;
    order: Order;
    status: DeliveryStatus;
    address: Address;
}
//# sourceMappingURL=delivaries.d.ts.map