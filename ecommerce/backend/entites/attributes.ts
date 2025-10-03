import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("attributes")
export class Attribute {
  @PrimaryGeneratedColumn()
  id!: number;   

  @Column({ type: "varchar", length: 100, nullable: false })
  attribute!: string;  

  
}


