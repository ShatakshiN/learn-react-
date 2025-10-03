import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne , OneToMany} from "typeorm";
import { User } from "./users.js";
import { Payment } from "./payments.js";
import { OrderItem } from "./orderItems.js";
import { Delivery } from "./delivaries.js";

export enum OrderStatus {
    SUCCESSFUL = "successful",
    FAILED = "failed",
    PENDING = "pending",
    RETURNED = "returned",
    CANCELLED = "cancelled",
}

@Entity({ name: "orders" })
export class Order {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.orders, {
        nullable: false,
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" })
    user!: User;

    @OneToOne(() => Payment, (payment) => payment.order)
    payment!: Payment;

    @Column({
        type: "enum",
        enum: OrderStatus,
        default: OrderStatus.PENDING,
    })
    order_status!: OrderStatus;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    orderItems!: OrderItem[];

    @OneToOne(() => Delivery, (delivery) => delivery.order)
    delivery!: Delivery;
}
