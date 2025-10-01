import { config } from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";

config(); // load .env

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DBASE_HOST!,          // the ! tells TS it is not undefined
    port: Number(process.env.DBASE_PORT!),
    username: process.env.DBASE_USERNAME!,
    password: process.env.DBASE_PASSWORD!,
    database: process.env.DBASE_NAME!,
    synchronize: true,
    logging: false,
    entities: [],  
    migrations: [],
    subscribers: [],
});

