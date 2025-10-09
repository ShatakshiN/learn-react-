import { Router } from "express";
import { AllProducts } from "../controllers/productController.js";

const router  = Router(); 

router.get('/allPhones/:id', AllProducts); // id from category table 

export default router;