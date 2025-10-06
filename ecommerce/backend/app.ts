import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./util/db.js";
import cors from 'cors';
import userRoutes from './routes/userRoute.js'

const app = express();
app.use(express.json()); 
app.use(cors());
app.use('/user',userRoutes )



AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");

        
        app.listen(4000, () => {
            console.log("Server running on http://localhost:4000");
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });



