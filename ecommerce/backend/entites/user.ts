
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 100, nullable: false })
    first_name!: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    last_name!: string;

    @Column({ type: "varchar", length: 200, nullable: false })
    dp_url!: string;

    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    email!: string;

    @Column({ type: "varchar", length: 15, nullable: false })
    phone_no!: string;

    @Column({ type: "boolean", default: true, nullable: false })
    is_active!: boolean;

    @Column({ type: "varchar", length: 150, nullable: false })
    hashed_password!: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;
}

