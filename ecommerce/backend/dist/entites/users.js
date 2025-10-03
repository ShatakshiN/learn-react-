var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Role } from "./roles.js";
let User = class User {
    id;
    first_name;
    last_name;
    dp_url;
    email;
    phone_no;
    is_active;
    hashed_password;
    createdAt;
    updatedAt;
    roles;
};
__decorate([
    PrimaryGeneratedColumn()
], User.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 100 })
], User.prototype, "first_name", void 0);
__decorate([
    Column({ type: "varchar", length: 100 })
], User.prototype, "last_name", void 0);
__decorate([
    Column({ type: "varchar", length: 200 })
], User.prototype, "dp_url", void 0);
__decorate([
    Column({ type: "varchar", length: 100, unique: true })
], User.prototype, "email", void 0);
__decorate([
    Column({ type: "varchar", length: 15 })
], User.prototype, "phone_no", void 0);
__decorate([
    Column({ type: "boolean", default: true })
], User.prototype, "is_active", void 0);
__decorate([
    Column({ type: "varchar", length: 150 })
], User.prototype, "hashed_password", void 0);
__decorate([
    CreateDateColumn()
], User.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
], User.prototype, "updatedAt", void 0);
__decorate([
    ManyToMany(() => Role, (role) => role.users)
], User.prototype, "roles", void 0);
User = __decorate([
    Entity({ name: "users" })
], User);
export { User };
//# sourceMappingURL=users.js.map