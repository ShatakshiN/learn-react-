var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, } from "typeorm";
import { Order } from "./orders.js";
import { Address } from "./address.js";
export var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["PENDING"] = "pending";
    DeliveryStatus["SHIPPED"] = "shipped";
    DeliveryStatus["DELIVERED"] = "delivered";
    DeliveryStatus["RETURNED"] = "returned";
    DeliveryStatus["CANCELLED"] = "cancelled";
})(DeliveryStatus || (DeliveryStatus = {}));
let Delivery = class Delivery {
    id;
    service_company;
    shipment_date;
    expected_date;
    delivery_date;
    order;
    status;
    address;
};
__decorate([
    PrimaryGeneratedColumn()
], Delivery.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 200, nullable: false })
], Delivery.prototype, "service_company", void 0);
__decorate([
    Column({ type: "timestamp", nullable: false })
], Delivery.prototype, "shipment_date", void 0);
__decorate([
    Column({ type: "timestamp", nullable: false })
], Delivery.prototype, "expected_date", void 0);
__decorate([
    Column({ type: "timestamp", nullable: false })
], Delivery.prototype, "delivery_date", void 0);
__decorate([
    OneToOne(() => Order, (order) => order.delivery, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "order_id" })
], Delivery.prototype, "order", void 0);
__decorate([
    Column({
        type: "enum",
        enum: DeliveryStatus,
        default: DeliveryStatus.PENDING,
    })
], Delivery.prototype, "status", void 0);
__decorate([
    OneToOne(() => Address, { nullable: false }),
    JoinColumn({ name: "address_id" })
], Delivery.prototype, "address", void 0);
Delivery = __decorate([
    Entity({ name: "deliveries" })
], Delivery);
export { Delivery };
//# sourceMappingURL=delivaries.js.map