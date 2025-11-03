import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./util/db.js";
import cors from 'cors';
import path from "path";
import userRoutes from './src/routes/userRoute.js';
import categoriesRoutes from "./src/routes/categoriesRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import userDetailsRoute from "./src/routes/userDetailsRoute.js";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config(); 

import { seedCategories } from "./src/seeder/seedCategories.js";
import { seedAttributes } from "./src/seeder/seedAttributes.js";
import { seedProductImages } from "./src/seeder/seedProductImages.js";
import { seedProductVariants } from "./src/seeder/seedProductVariants.js";
import { seedProducts } from "./src/seeder/seedProducts.js";
import { seedVariantAttributeValues } from "./src/seeder/seedVariantAttributeValues.js";

const app = express();

app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/users", userRoutes);
app.use( categoriesRoutes);
app.use( productRoutes);
app.use('/users', userDetailsRoute )

const dataSource = AppDataSource.getInstance();

dataSource.initialize()
    .then(async () => {
        console.log("Data Source has been initialized!");  
       /*  await seedCategories();
        await seedAttributes();
        await seedProducts();
        await seedProductVariants();
        await seedProductImages();
        await seedVariantAttributeValues();  */   
        app.listen(4000, () => {
            console.log("Server running on http://localhost:4000");
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });



