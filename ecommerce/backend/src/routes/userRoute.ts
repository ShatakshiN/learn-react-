/* import { Router } from "express";
import{signUp, login} from "../controllers/userController.js";
import upload from "../middlewares/upload.js";

const router = Router();

router.post('/signUp', upload.single("dp"),signUp);
router.post('/login', login);

export default router;  */


import express from "express";
import multer from "multer";
import { UserController } from "../controllers/usersController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); 
const userController = new UserController();


router.post("/signup", upload.single("dp"), (req, res) => userController.signUp(req, res));
router.post("/login", (req, res) => userController.login(req, res));

export default router;
