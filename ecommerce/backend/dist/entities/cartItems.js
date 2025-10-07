var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Cart } from "./cart.js";
import { ProductVariant } from "./productVariants.js";
let CartItem = class CartItem {
    id;
    cart;
    productVariant;
    quantity;
};
__decorate([
    PrimaryGeneratedColumn()
], CartItem.prototype, "id", void 0);
__decorate([
    ManyToOne(() => Cart, (cart) => cart.items, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "cart_id" })
], CartItem.prototype, "cart", void 0);
__decorate([
    ManyToOne(() => ProductVariant, (variant) => variant.cartItems, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "product_variant_id" })
], CartItem.prototype, "productVariant", void 0);
__decorate([
    Column({ type: "int", nullable: false })
], CartItem.prototype, "quantity", void 0);
CartItem = __decorate([
    Entity({ name: "cart_items" })
], CartItem);
export { CartItem };
//# sourceMappingURL=cartItems.js.map