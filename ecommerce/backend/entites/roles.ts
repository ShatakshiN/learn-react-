import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { User } from "./users.js";

@Entity({ name: "roles" })
export class Role {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 10 })
    role_name!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToMany(() => User, (user) => user.roles)
    users!: User[];
}
