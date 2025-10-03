var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, } from "typeorm";
import { Order } from "./orders.js";
import { ProductVariant } from "./productVariants.js";
let OrderItem = class OrderItem {
    id;
    order;
    productVariant;
    quantity;
    price;
};
__decorate([
    PrimaryGeneratedColumn()
], OrderItem.prototype, "id", void 0);
__decorate([
    ManyToOne(() => Order, (order) => order.orderItems, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "order_id" })
], OrderItem.prototype, "order", void 0);
__decorate([
    ManyToOne(() => ProductVariant, (variant) => variant.orderItems, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "product_variant_id" })
], OrderItem.prototype, "productVariant", void 0);
__decorate([
    Column({ type: "int", nullable: false })
], OrderItem.prototype, "quantity", void 0);
__decorate([
    Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
], OrderItem.prototype, "price", void 0);
OrderItem = __decorate([
    Entity({ name: "order_items" })
], OrderItem);
export { OrderItem };
//# sourceMappingURL=orderItems.js.map