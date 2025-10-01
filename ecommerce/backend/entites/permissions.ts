import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"permissions"})
export class Permissions{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({type:"varchar", length:50 , nullable:false})
    permission_name!: string; 

    @Column({type:"varchar",length:100, nullable:false})
    description!:string;

    @CreateDateColumn({type:"timestamp"})
    createdAt!: Date;

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!: Date;

}