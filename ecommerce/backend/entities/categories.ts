import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";

import { Product } from "./products.js";

@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  category!: string;

  
  @Column({ type: "varchar", length: 255, nullable: false }) 
  icon_image_url!: string;


  @Column({ type: "boolean", default: false, nullable: false })
  is_featured_on_homepage!: boolean;
 
  @ManyToOne(() => Category, (category) => category.children, { nullable: true })
  @JoinColumn({ name: "parent_category_id" })
  parent!: Category | null;

  @OneToMany(() => Category, (category) => category.parent)
  children!: Category[];

  
  @OneToMany(() => Product, (product) => product.category)
  products!: Product[]; 
}
