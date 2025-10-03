var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Order } from "./orders.js";
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["SUCCESSFUL"] = "successful";
    PaymentStatus["FAILED"] = "failed";
    PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (PaymentStatus = {}));
let Payment = class Payment {
    id;
    order;
    paymentGateway_id;
    amount;
    status;
    payment_method;
};
__decorate([
    PrimaryGeneratedColumn()
], Payment.prototype, "id", void 0);
__decorate([
    OneToOne(() => Order, (order) => order.payment, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "order_id" })
], Payment.prototype, "order", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false })
], Payment.prototype, "paymentGateway_id", void 0);
__decorate([
    Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
], Payment.prototype, "amount", void 0);
__decorate([
    Column({
        type: "enum",
        enum: PaymentStatus,
        default: PaymentStatus.PENDING,
    })
], Payment.prototype, "status", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false })
], Payment.prototype, "payment_method", void 0);
Payment = __decorate([
    Entity({ name: "payments" })
], Payment);
export { Payment };
//# sourceMappingURL=payments.js.map