import { config } from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entites/users.js";
import { Role } from "../entites/roles.js";
import { Permissions } from "../entites/permissions.js";
import { Category } from "../entites/categories.js";
import { Product } from "../entites/products.js";
import { ProductVariant } from "../entites/productVariants.js";
config(); // load .env
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DBASE_HOST,
    port: Number(process.env.DBASE_PORT),
    username: process.env.DBASE_USERNAME,
    password: process.env.DBASE_PASSWORD,
    database: process.env.DBASE_NAME,
    synchronize: true,
    logging: false,
    entities: [User, Role, Permissions, Category, Product, ProductVariant],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=db.js.map