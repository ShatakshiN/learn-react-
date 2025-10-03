var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "./users.js";
import { Delivery } from "./delivaries.js";
let Address = class Address {
    id;
    line1;
    line2;
    district;
    state;
    country;
    pincode;
    deliveries;
    user;
};
__decorate([
    PrimaryGeneratedColumn()
], Address.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false })
], Address.prototype, "line1", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false })
], Address.prototype, "line2", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false })
], Address.prototype, "district", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false })
], Address.prototype, "state", void 0);
__decorate([
    Column({ type: "varchar", length: 50, nullable: false, default: "India" })
], Address.prototype, "country", void 0);
__decorate([
    Column({ type: "varchar", length: 20, nullable: false })
], Address.prototype, "pincode", void 0);
__decorate([
    OneToMany(() => Delivery, (delivery) => delivery.address)
], Address.prototype, "deliveries", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.addresses, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "user_id" })
], Address.prototype, "user", void 0);
Address = __decorate([
    Entity({ name: "addresses" })
], Address);
export { Address };
//# sourceMappingURL=address.js.map