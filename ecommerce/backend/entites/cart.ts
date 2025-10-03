import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./users.js";

@Entity({ name: "cart" })
export class Cart {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => User, (user) => user.cart, {
    nullable: false,
    onDelete: "CASCADE", 
  })
  @JoinColumn({ name: "user_id" }) 
  user!: User;
}
