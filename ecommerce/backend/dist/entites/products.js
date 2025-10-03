var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./categories.js";
let Product = class Product {
    id;
    product_name;
    description;
    brand;
    base_SKU;
    category;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "product_name", void 0);
__decorate([
    Column({ type: "varchar", length: 200, nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "brand", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Product.prototype, "base_SKU", void 0);
__decorate([
    ManyToOne(() => Category, (category) => category.products, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "category_id" }),
    __metadata("design:type", Array)
], Product.prototype, "category", void 0);
Product = __decorate([
    Entity({ name: "products" })
], Product);
export { Product };
//# sourceMappingURL=products.js.map