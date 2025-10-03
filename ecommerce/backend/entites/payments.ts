import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Order } from "./orders.js";

export enum PaymentStatus {
  PENDING = "pending",
  SUCCESSFUL = "successful",
  FAILED = "failed",
  REFUNDED = "refunded",
}

@Entity({ name: "payments" })
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Order, (order) => order.payment, {
    nullable: false,
    onDelete: "CASCADE", 
  })
  @JoinColumn({ name: "order_id" }) 
  order!: Order;

  @Column({ type: "varchar", length: 100, nullable: false })
  paymentGateway_id!: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  amount!: number;

  @Column({
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status!: PaymentStatus;

  @Column({ type: "varchar", length: 100, nullable: false })
  payment_method!: string;
}
