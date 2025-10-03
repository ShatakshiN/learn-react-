import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Cart } from "./cart.js";
import { ProductVariant } from "./productVariants.js";

@Entity({ name: "cart_items" })
export class CartItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Cart, (cart) => cart.items, {
    nullable: false,
    onDelete: "CASCADE", 
  })
  @JoinColumn({ name: "cart_id" })
  cart!: Cart;

  @ManyToOne(() => ProductVariant, (variant) => variant.cartItems, {
    nullable: false,
    onDelete: "CASCADE", 
  })
  @JoinColumn({ name: "product_variant_id" })
  productVariant!: ProductVariant;

  @Column({ type: "int", nullable: false })
  quantity!: number;
}
