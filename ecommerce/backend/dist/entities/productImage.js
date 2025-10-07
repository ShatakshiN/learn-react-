var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ProductVariant } from "./productVariants.js";
let ProductImage = class ProductImage {
    id;
    productVariant;
    image_url;
};
__decorate([
    PrimaryGeneratedColumn()
], ProductImage.prototype, "id", void 0);
__decorate([
    ManyToOne(() => ProductVariant, (variant) => variant.images, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "product_variant_id" })
], ProductImage.prototype, "productVariant", void 0);
__decorate([
    Column({ type: "varchar", length: 200, nullable: false })
], ProductImage.prototype, "image_url", void 0);
ProductImage = __decorate([
    Entity({ name: "product_images" })
], ProductImage);
export { ProductImage };
//# sourceMappingURL=productImage.js.map