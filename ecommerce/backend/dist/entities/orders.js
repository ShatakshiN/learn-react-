var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { User } from "./users.js";
import { Payment } from "./payments.js";
import { OrderItem } from "./orderItems.js";
import { Delivery } from "./delivaries.js";
export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["SUCCESSFUL"] = "successful";
    OrderStatus["FAILED"] = "failed";
    OrderStatus["PENDING"] = "pending";
    OrderStatus["RETURNED"] = "returned";
    OrderStatus["CANCELLED"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
let Order = class Order {
    id;
    user;
    payment;
    order_status;
    orderItems;
    delivery;
};
__decorate([
    PrimaryGeneratedColumn()
], Order.prototype, "id", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.orders, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "user_id" })
], Order.prototype, "user", void 0);
__decorate([
    OneToOne(() => Payment, (payment) => payment.order)
], Order.prototype, "payment", void 0);
__decorate([
    Column({
        type: "enum",
        enum: OrderStatus,
        default: OrderStatus.PENDING,
    })
], Order.prototype, "order_status", void 0);
__decorate([
    OneToMany(() => OrderItem, (orderItem) => orderItem.order)
], Order.prototype, "orderItems", void 0);
__decorate([
    OneToOne(() => Delivery, (delivery) => delivery.order)
], Order.prototype, "delivery", void 0);
Order = __decorate([
    Entity({ name: "orders" })
], Order);
export { Order };
//# sourceMappingURL=orders.js.map