var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Role } from "./roles.js";
let Permissions = class Permissions {
    id;
    permission_name;
    description;
    createdAt;
    updatedAt;
    roles;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Permissions.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 50, nullable: false }),
    __metadata("design:type", String)
], Permissions.prototype, "permission_name", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false }),
    __metadata("design:type", String)
], Permissions.prototype, "description", void 0);
__decorate([
    CreateDateColumn({ type: "timestamp" }),
    __metadata("design:type", Date)
], Permissions.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ type: "timestamp" }),
    __metadata("design:type", Date)
], Permissions.prototype, "updatedAt", void 0);
__decorate([
    ManyToMany(() => Role, (role) => role.permissions),
    __metadata("design:type", Array)
], Permissions.prototype, "roles", void 0);
Permissions = __decorate([
    Entity({ name: "permissions" })
], Permissions);
export { Permissions };
//# sourceMappingURL=permissions.js.map