var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { User } from "./users.js";
let Role = class Role {
    id;
    role_name;
    createdAt;
    updatedAt;
    users;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 10 }),
    __metadata("design:type", String)
], Role.prototype, "role_name", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Role.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Role.prototype, "updatedAt", void 0);
__decorate([
    ManyToMany(() => User, (user) => user.roles),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
Role = __decorate([
    Entity({ name: "roles" })
], Role);
export { Role };
//# sourceMappingURL=roles.js.map