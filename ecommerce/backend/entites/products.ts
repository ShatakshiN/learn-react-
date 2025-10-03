import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import { Category } from "./categories.js";

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
  category!: Category[];
}
