var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, } from "typeorm";
import { Product } from "./products.js";
let Category = class Category {
    id;
    category;
    icon_image_url;
    is_featured_on_homepage;
    parent;
    children;
    products;
};
__decorate([
    PrimaryGeneratedColumn()
], Category.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 255, nullable: false })
], Category.prototype, "category", void 0);
__decorate([
    Column({ type: "varchar", length: 255, nullable: false })
], Category.prototype, "icon_image_url", void 0);
__decorate([
    Column({ type: "boolean", default: false, nullable: false })
], Category.prototype, "is_featured_on_homepage", void 0);
__decorate([
    ManyToOne(() => Category, (category) => category.children, { nullable: true }),
    JoinColumn({ name: "parent_category_id" })
], Category.prototype, "parent", void 0);
__decorate([
    OneToMany(() => Category, (category) => category.parent)
], Category.prototype, "children", void 0);
__decorate([
    OneToMany(() => Product, (product) => product.category)
], Category.prototype, "products", void 0);
Category = __decorate([
    Entity({ name: "categories" })
], Category);
export { Category };
//# sourceMappingURL=categories.js.map