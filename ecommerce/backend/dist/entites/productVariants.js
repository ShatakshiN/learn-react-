var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique, OneToMany } from "typeorm";
import { Product } from "./products.js";
import { VariantAttributeValue } from "./variantAttributeValues.js";
import { ProductImage } from "./productImage.js";
import { CartItem } from "./cartItems.js";
let ProductVariant = class ProductVariant {
    id;
    SKU;
    price;
    stock;
    product;
    attributeValues;
    images;
    cartItems;
};
__decorate([
    PrimaryGeneratedColumn()
], ProductVariant.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false })
], ProductVariant.prototype, "SKU", void 0);
__decorate([
    Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
], ProductVariant.prototype, "price", void 0);
__decorate([
    Column({ type: "int", nullable: false })
], ProductVariant.prototype, "stock", void 0);
__decorate([
    ManyToOne(() => Product, (product) => product.variants, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "product_id" })
], ProductVariant.prototype, "product", void 0);
__decorate([
    OneToMany(() => VariantAttributeValue, (vav) => vav.productVariant)
], ProductVariant.prototype, "attributeValues", void 0);
__decorate([
    OneToMany(() => ProductImage, (image) => image.productVariant)
], ProductVariant.prototype, "images", void 0);
__decorate([
    OneToMany(() => CartItem, (item) => item.productVariant)
], ProductVariant.prototype, "cartItems", void 0);
ProductVariant = __decorate([
    Entity({ name: "product_variants" }),
    Unique(["SKU"])
], ProductVariant);
export { ProductVariant };
//# sourceMappingURL=productVariants.js.map