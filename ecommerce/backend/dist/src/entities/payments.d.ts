import { Order } from "./orders.js";
export declare enum PaymentStatus {
    PENDING = "pending",
    SUCCESSFUL = "successful",
    FAILED = "failed",
    REFUNDED = "refunded"
}
export declare class Payment {
    id: number;
    order: Order;
    paymentGateway_id: string;
    amount: number;
    status: PaymentStatus;
    payment_method: string;
}
//# sourceMappingURL=payments.d.ts.map