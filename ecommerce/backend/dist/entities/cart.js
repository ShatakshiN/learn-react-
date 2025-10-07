var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./users.js";
import { CartItem } from "./cartItems.js";
let Cart = class Cart {
    id;
    user;
    items;
};
__decorate([
    PrimaryGeneratedColumn()
], Cart.prototype, "id", void 0);
__decorate([
    OneToOne(() => User, (user) => user.cart, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "user_id" })
], Cart.prototype, "user", void 0);
__decorate([
    OneToMany(() => CartItem, (item) => item.cart)
], Cart.prototype, "items", void 0);
Cart = __decorate([
    Entity({ name: "cart" })
], Cart);
export { Cart };
//# sourceMappingURL=cart.js.map