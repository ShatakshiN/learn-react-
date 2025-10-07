import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./users.js";
import { Permissions } from "./permissions.js";

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
    @JoinTable({name: "user_role"}) 
    users!: User[];

    @ManyToMany(() => Permissions, (permission) => permission.roles)
    @JoinTable({name: 'role_permissions'})
    permissions!: Permissions[];
}
