import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Role } from "./roles.js"; // Node16 ESM requires .js

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

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
    @JoinTable() 
    roles!: Role[];
}

