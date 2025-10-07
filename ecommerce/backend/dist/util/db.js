import { config } from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/users.js";
import { Role } from "../entities/roles.js";
import { Permissions } from "../entities/permissions.js";
import { Category } from "../entities/categories.js";
import { Product } from "../entities/products.js";
import { ProductVariant } from "../entities/productVariants.js";
import { ProductImage } from "../entities/productImage.js";
import { VariantAttributeValue } from "../entities/variantAttributeValues.js";
import { Attribute } from "../entities/attributes.js";
import { Cart } from "../entities/cart.js";
import { CartItem } from "../entities/cartItems.js";
import { Order } from "../entities/orders.js";
import { Payment } from "../entities/payments.js";
import { OrderItem } from "../entities/orderItems.js";
import { Delivery } from "../entities/delivaries.js";
import { Address } from "../entities/address.js";
config();
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DBASE_HOST,
    port: Number(process.env.DBASE_PORT),
    username: process.env.DBASE_USERNAME,
    password: process.env.DBASE_PASSWORD,
    database: process.env.DBASE_NAME,
    synchronize: true,
    logging: false,
    entities: [User,
        Role,
        Permissions,
        Category,
        Product,
        ProductVariant,
        Attribute,
        VariantAttributeValue,
        ProductImage,
        Cart,
        CartItem,
        Order,
        Payment,
        OrderItem,
        Delivery,
        Address
    ],
    migrations: ["dist/migrations/*.js"],
    subscribers: [],
});
//# sourceMappingURL=db.js.map