import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./users.js";
import { CartItem } from "./cartItems.js";

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

  @OneToMany(() => CartItem, (item) => item.cart)
  items!: CartItem[];
}
