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
import { Role } from "./roles.js"; // Node16 ESM requires .js
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
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    Column({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    Column({ type: "varchar", length: 200 }),
    __metadata("design:type", String)
], User.prototype, "dp_url", void 0);
__decorate([
    Column({ type: "varchar", length: 100, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({ type: "varchar", length: 15 }),
    __metadata("design:type", String)
], User.prototype, "phone_no", void 0);
__decorate([
    Column({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    Column({ type: "varchar", length: 150 }),
    __metadata("design:type", String)
], User.prototype, "hashed_password", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    ManyToMany(() => Role, (role) => role.users),
    JoinTable() // <-- This tells TypeORM to create the join table automatically
    ,
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
User = __decorate([
    Entity({ name: "users" })
], User);
export { User };
//# sourceMappingURL=users.js.map