import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "./users.js";
import { Delivery } from "./delivaries.js";

@Entity({ name: "addresses" })
export class Address {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 100, nullable: false })
    line1!: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    line2!: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    district!: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    state!: string;

    @Column({ type: "varchar", length: 50, nullable: false, default: "India" })
    country!: string;

    @Column({ type: "varchar", length: 20, nullable: false })
    pincode!: string;

    @OneToMany(() => Delivery, (delivery) => delivery.address)
    deliveries!: Delivery[];

    @ManyToOne(() => User, (user) => user.addresses, {
        nullable: false,
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" })
    user!: User;


}
