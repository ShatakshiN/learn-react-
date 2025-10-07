import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./util/db.js";
import cors from 'cors';
import userRoutes from './routes/userRoute.js';
import { seedCategories } from "./seeder/seedCategories.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', userRoutes);
app.use('/homepage', categoriesRoutes);
AppDataSource.initialize()
    .then(async () => {
    console.log("Data Source has been initialized!");
    await seedCategories();
    app.listen(4000, () => {
        console.log("Server running on http://localhost:4000");
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
//# sourceMappingURL=app.js.map