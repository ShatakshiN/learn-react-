import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from "typeorm";
import { ProductVariant } from "./productVariants.js";
import { Attribute } from "./attributes.js";

@Entity({ name: "variant_attribute_value" })
@Unique(["productVariant", "attribute"]) 
export class VariantAttributeValue {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ProductVariant, (variant) => variant.attributeValues, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_variant_id" })
  productVariant!: ProductVariant;

  @ManyToOne(() => Attribute, (attribute) => attribute.variantValues, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "attribute_id" })
  attribute!: Attribute;

  @Column({ type: "varchar", length: 100, nullable: false })
  value!: string;
}
