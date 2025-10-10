import { Router } from "express";
import{signUp, login} from "../controllers/userController.js";
import upload from "../middlewares/upload.js";

const router = Router();

router.post('/signUp', upload.single("dp"),signUp);
router.post('/login', login);

export default router; 