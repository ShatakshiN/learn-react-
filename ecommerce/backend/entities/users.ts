import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, OneToOne, OneToMany } from "typeorm";
import { Role } from "./roles.js"; 
import { Cart } from "./cart.js";
import { Order } from "./orders.js";
import { Address } from "./address.js";


@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column({ type: "varchar", length: 100 })
    first_name!: string;

    @Column({ type: "varchar", length: 100 })
    last_name!: string;

    @Column({ type: "varchar", length: 200 })
    dp_url!: string;

    @Column({ type: "varchar", length: 100, unique: true })
    email!: string;

    @Column({ type: "varchar", length: 15 })
    phone_no!: string;

    @Column({ type: "boolean", default: true })
    is_active!: boolean;

    @Column({ type: "varchar", length: 150 })
    hashed_password!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToMany(() => Role, (role) => role.users)
    roles!: Role[];

    @OneToOne(() => Cart, (cart) => cart.user)
    cart!: Cart;

    @OneToMany(() => Order, (order) => order.user)
    orders!: Order[];

    
    @OneToMany(() => Address, (address) => address.user)
    addresses!: Address[];
}

