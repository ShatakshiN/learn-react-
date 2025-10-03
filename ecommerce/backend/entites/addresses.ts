
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"addresses"})
export class Address{
    @PrimaryGeneratedColumn()
    id!:number
}