import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

import { Category } from "./categories.js";
import { ProductVariant } from "./productVariants.js";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  product_name!: string;

  @Column({ type: "varchar", length: 200, nullable: false })
  description!: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  brand!: string;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  base_SKU!: string;
  
  @ManyToOne(() => Category, (category) => category.products, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "category_id" })
  category!: Category;
  
  @OneToMany(() => ProductVariant, (variant) => variant.product)
  variants!: ProductVariant[];
}
