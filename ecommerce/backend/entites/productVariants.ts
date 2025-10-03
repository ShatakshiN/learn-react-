import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique, OneToMany } from "typeorm";
import { Product } from "./products.js";
import { VariantAttributeValue } from "./variantAttributeValues.js";
import { ProductImage } from "./productImage.js";
import { CartItem } from "./cartItems.js";
import { OrderItem } from "./orderItems.js";

@Entity({ name: "product_variants" })
@Unique(["SKU"])
export class ProductVariant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  SKU!: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  price!: number;

  @Column({ type: "int", nullable: false })
  stock!: number;

  @ManyToOne(() => Product, (product) => product.variants, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product!: Product;

  @OneToMany(() => VariantAttributeValue, (vav) => vav.productVariant)
  attributeValues!: VariantAttributeValue[];

  @OneToMany(() => ProductImage, (image) => image.productVariant)
  images!: ProductImage[];

  
  @OneToMany(() => CartItem, (item) => item.productVariant)
  cartItems!: CartItem[];
  
  @OneToMany(() => OrderItem, (orderItem) => orderItem.productVariant)
  orderItems!: OrderItem[];
}
