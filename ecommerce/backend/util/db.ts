import { config } from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../src/entities/users.js";
import { Role } from "../src/entities/roles.js";
import { Permissions } from "../src/entities/permissions.js";
import { Category } from "../src/entities/categories.js";
import { Product } from "../src/entities/products.js";
import { ProductVariant } from "../src/entities/productVariants.js";
import { ProductImage } from "../src/entities/productImage.js";
import { VariantAttributeValue } from "../src/entities/variantAttributeValues.js";
import { Attribute } from "../src/entities/attributes.js";
import { Cart } from "../src/entities/cart.js";
import { CartItem } from "../src/entities/cartItems.js";
import { Order } from "../src/entities/orders.js";
import { Payment } from "../src/entities/payments.js";
import { OrderItem } from "../src/entities/orderItems.js";
import { Delivery } from "../src/entities/delivaries.js";
import { Address } from "../src/entities/address.js";

config(); 

/* export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DBASE_HOST!,          
    port: Number(process.env.DBASE_PORT!),
    username: process.env.DBASE_USERNAME!,
    password: process.env.DBASE_PASSWORD!,
    database: process.env.DBASE_NAME!,
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
        ProductImage , 
        Cart,
        CartItem,
        Order,
        Payment,
        OrderItem,
        Delivery,
        Address
    ],  
    migrations: [],
    subscribers: [],
}); */

export class AppDataSource{
    private static instance: DataSource;

    private constructor() {};

    public static getInstance():DataSource{
        if(!AppDataSource.instance){
            AppDataSource.instance = new DataSource({
                type: "postgres",
                host: process.env.DBASE_HOST!,          
                port: Number(process.env.DBASE_PORT!),
                username: process.env.DBASE_USERNAME!,
                password: process.env.DBASE_PASSWORD!,
                database: process.env.DBASE_NAME!,
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
                    ProductImage , 
                    Cart,
                    CartItem,
                    Order,
                    Payment,
                    OrderItem,
                    Delivery,
                    Address
                ],  
                migrations: [],
                subscribers: [],

            })
           
        }
        return AppDataSource.instance;
    }

}
