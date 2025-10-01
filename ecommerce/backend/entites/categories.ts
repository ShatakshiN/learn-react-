import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";

@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  category!: string;

  // Parent category (self reference)
  @ManyToOne(() => Category, (category) => category.children, { nullable: true })
  @JoinColumn({ name: "parent_category_id" }) // foreign key column - joinColumn() - generates foreign key
  parent!: Category | null;

  // Subcategories
  @OneToMany(() => Category, (category) => category.parent)
  children!: Category[];
}
