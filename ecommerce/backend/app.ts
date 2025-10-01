import "reflect-metadata"; // required for TypeORM decorators
import express from "express";
import { AppDataSource } from "./util/db.js";

const app = express();
app.use(express.json()); 


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");

        // start your server only after DB is ready
        app.listen(4000, () => {
            console.log("Server running on http://localhost:4000");
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });



