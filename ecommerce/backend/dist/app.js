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
/* import { seedCategories } from "./seeder/seedCategories.js";
import { seedAttributes } from "./seeder/seedAttributes.js";
import { seedProductImages } from "./seeder/seedProductImages.js";
import { seedProductVariants } from "./seeder/seedProductVariants.js";
import { seedProducts } from "./seeder/seedProducts.js";
import { seedVariantAttributeValues } from "./seeder/seedVariantAttributeValues.js";
 */
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/users", userRoutes);
app.use(categoriesRoutes);
app.use('/products', productRoutes);
app.use('/users', userDetailsRoute);
const dataSource = AppDataSource.getInstance();
dataSource.initialize()
    .then(async () => {
    console.log("Data Source has been initialized!");
    app.listen(4000, () => {
        console.log("Server running on http://localhost:4000");
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
//# sourceMappingURL=app.js.map