import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "roles"})
export class Role{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar', length:10, nullable:false})
    role_name!:string;

    @CreateDateColumn({type:"timestamp"})
    createdAt!: Date;

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!:Date;
}