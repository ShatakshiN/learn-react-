var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from "typeorm";
import { ProductVariant } from "./productVariants.js";
import { Attribute } from "./attributes.js";
let VariantAttributeValue = class VariantAttributeValue {
    id;
    productVariant;
    attribute;
    value;
};
__decorate([
    PrimaryGeneratedColumn()
], VariantAttributeValue.prototype, "id", void 0);
__decorate([
    ManyToOne(() => ProductVariant, (variant) => variant.attributeValues, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "product_variant_id" })
], VariantAttributeValue.prototype, "productVariant", void 0);
__decorate([
    ManyToOne(() => Attribute, (attribute) => attribute.variantValues, {
        nullable: false,
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "attribute_id" })
], VariantAttributeValue.prototype, "attribute", void 0);
__decorate([
    Column({ type: "varchar", length: 100, nullable: false })
], VariantAttributeValue.prototype, "value", void 0);
VariantAttributeValue = __decorate([
    Entity({ name: "variant_attribute_value" }),
    Unique(["productVariant", "attribute"])
], VariantAttributeValue);
export { VariantAttributeValue };
//# sourceMappingURL=variantAttributeValues.js.map