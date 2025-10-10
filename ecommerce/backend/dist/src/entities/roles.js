var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./users.js";
import { Permissions } from "./permissions.js";
let Role = class Role {
    id;
    role_name;
    createdAt;
    updatedAt;
    users;
    permissions;
};
__decorate([
    PrimaryGeneratedColumn()
], Role.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 10 })
], Role.prototype, "role_name", void 0);
__decorate([
    CreateDateColumn()
], Role.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
], Role.prototype, "updatedAt", void 0);
__decorate([
    ManyToMany(() => User, (user) => user.roles),
    JoinTable({ name: "user_role" })
], Role.prototype, "users", void 0);
__decorate([
    ManyToMany(() => Permissions, (permission) => permission.roles),
    JoinTable({ name: 'role_permissions' })
], Role.prototype, "permissions", void 0);
Role = __decorate([
    Entity({ name: "roles" })
], Role);
export { Role };
//# sourceMappingURL=roles.js.map