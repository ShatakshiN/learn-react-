import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Order } from "./orders.js";
import { Address } from "./address.js";

export enum DeliveryStatus {
  PENDING = "pending",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  RETURNED = "returned",
  CANCELLED = "cancelled",
}

@Entity({ name: "deliveries" })
export class Delivery {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 200, nullable: false })
  service_company!: string;

  @Column({ type: "timestamp", nullable: false })
  shipment_date!: Date;

  @Column({ type: "timestamp", nullable: false })
  expected_date!: Date;

  @Column({ type: "timestamp", nullable: false })
  delivery_date!: Date;

  @OneToOne(() => Order, (order) => order.delivery, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "order_id" })
  order!: Order;

  @Column({
    type: "enum",
    enum: DeliveryStatus,
    default: DeliveryStatus.PENDING,
  })
  status!: DeliveryStatus;

  @OneToOne(() => Address, { nullable: false })
  @JoinColumn({ name: "address_id" })
  address!: Address;


}
