import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Cart } from "./cart.js";
import { ProductVariant } from "./productVariants.js";

@Entity({ name: "cart_items" })
export class CartItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Cart, (cart) => cart.items, {
    nullable: false,
    onDelete: "CASCADE", // if cart is deleted → items deleted
  })
  @JoinColumn({ name: "cart_id" })
  cart!: Cart;

  @ManyToOne(() => ProductVariant, (variant) => variant.cartItems, {
    nullable: false,
    onDelete: "CASCADE", // if variant deleted → items deleted
  })
  @JoinColumn({ name: "product_variant_id" })
  productVariant!: ProductVariant;

  @Column({ type: "int", nullable: false })
  quantity!: number;
}
