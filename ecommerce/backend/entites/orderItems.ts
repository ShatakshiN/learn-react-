import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { Order } from "./orders.js";
import { ProductVariant } from "./productVariants.js";


@Entity({ name: "order_items" })
export class OrderItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Order, (order) => order.orderItems, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "order_id" })
  order!: Order;

  @ManyToOne(() => ProductVariant, (variant) => variant.orderItems, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_variant_id" })
  productVariant!: ProductVariant;

  @Column({ type: "int", nullable: false })
  quantity!: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  price!: number;
}
