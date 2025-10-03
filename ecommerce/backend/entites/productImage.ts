import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ProductVariant } from "./productVariants.js";

@Entity({ name: "product_images" })
export class ProductImage {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ProductVariant, (variant) => variant.images, {
    nullable: false,
    onDelete: "CASCADE", 
  })
  @JoinColumn({ name: "product_variant_id" })
  productVariant!: ProductVariant;

  @Column({ type: "varchar", length: 200, nullable: false })
  image_url!: string;
}
