import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { VariantAttributeValue } from "./variantAttributeValues.js";

@Entity("attributes")
export class Attribute {
  @PrimaryGeneratedColumn()
  id!: number;   

  @Column({ type: "varchar", length: 100, nullable: false })
  attribute!: string;  

  @OneToMany(() => VariantAttributeValue, (vav) => vav.attribute)
  variantValues!: VariantAttributeValue[]
  
}


